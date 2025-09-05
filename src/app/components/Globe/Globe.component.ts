import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  NgZone,
} from '@angular/core';
import createGlobe, { COBEOptions } from 'cobe';

@Component({
  selector: 'app-globe',
  templateUrl: './Globe.component.html',
  styleUrls: ['./Globe.component.css'],
  imports: [CommonModule],
})
export class GlobeComponent implements OnInit, OnDestroy {
  @Input() className?: string;
  @Input() config?: COBEOptions;

  @ViewChild('canvasRef', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private globe: any = null;
  private phi = 0; // auto-rotation base
  private width = 0;

  // pointer / touch tracking
  private pointerActive = false;
  private pointerId: number | null = null;
  private lastX = 0;

  // rotation state
  private r = 0; // target offset from user input
  private rs = 0; // smoothed offset applied to globe

  // tuning
  private readonly MOVEMENT_DAMPING = 3000; // higher = less sensitive
  private readonly SMOOTHING = 0.09; // lerp factor
  private readonly MAX_DELTA = 40; // clamp per-move pixel delta
  private readonly FALLBACK_WIDTH = 600;

  // default config (same markers you had)
  private readonly DEFAULT_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
    ],
  };

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    window.addEventListener('resize', this.onResize);
    // small delay to ensure element is laid out; still safe because we fall back if width==0
    setTimeout(() => this.setupGlobe(), 0);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    try {
      this.globe?.destroy?.();
    } catch (e) {
      // ignore
    }
  }

  // ----- Resize -----
  private onResize = () => {
    const el = this.canvasRef?.nativeElement;
    if (!el) return;
    const measured = el.clientWidth || el.offsetWidth || this.FALLBACK_WIDTH;
    this.width = measured || this.FALLBACK_WIDTH;
  };

  // ----- Setup Globe -----
  private setupGlobe() {
    this.onResize();
    const initialWidth = this.width > 0 ? this.width : this.FALLBACK_WIDTH;

    // create globe outside Angular to avoid change-detection overhead
    this.ngZone.runOutsideAngular(() => {
      const cfg = { ...(this.config ?? this.DEFAULT_CONFIG) } as COBEOptions;
      this.globe = createGlobe(this.canvasRef.nativeElement, {
        ...cfg,
        width: initialWidth * 2,
        height: initialWidth * 2,
        onRender: (state) => {
          // autospin only when not dragging
          if (!this.pointerActive) {
            this.phi += 0.005;
          }

          // smooth toward target using simple lerp to avoid velocity blowups
          this.rs += (this.r - this.rs) * this.SMOOTHING;

          // combine and sanity-check numeric values
          let combined = this.phi + this.rs;
          if (!isFinite(combined) || Number.isNaN(combined)) {
            console.warn('[Globe] non-finite phi/rs detected — resetting', {
              phi: this.phi,
              r: this.r,
              rs: this.rs,
            });
            this.phi = 0;
            this.r = 0;
            this.rs = 0;
            combined = 0;
          }

          // wrap to [0, 2π) to keep numbers bounded
          const twoPi = Math.PI * 2;
          state['phi'] = ((combined % twoPi) + twoPi) % twoPi;

          // keep state size in sync with container
          const currentWidth = this.width > 0 ? this.width : initialWidth;
          state['width'] = currentWidth * 2;
          state['height'] = currentWidth * 2;
        },
      });

      // fade in canvas
      try {
        this.canvasRef.nativeElement.style.opacity = '1';
      } catch {}
    });
  }

  // ----- Pointer handlers (unified for mouse + touch) -----
  onPointerDown(e: PointerEvent) {
    const el = this.canvasRef.nativeElement;
    this.pointerActive = true;
    this.pointerId = e.pointerId;
    this.lastX = e.clientX;
    try {
      // capture so we continue to get moves even if pointer leaves canvas
      el.setPointerCapture?.(e.pointerId);
    } catch {}
    el.style.cursor = 'grabbing';
    e.preventDefault?.();
  }

  onPointerMove(e: PointerEvent) {
    if (!this.pointerActive || e.pointerId !== this.pointerId) return;
    const deltaRaw = e.clientX - this.lastX;
    this.lastX = e.clientX;

    if (!isFinite(deltaRaw) || Number.isNaN(deltaRaw)) return;

    // clamp per-move delta to avoid huge jumps
    const delta = Math.max(-this.MAX_DELTA, Math.min(this.MAX_DELTA, deltaRaw));

    // update target rotation offset (scaled by damping)
    this.r += delta / this.MOVEMENT_DAMPING;

    // keep r finite
    if (!isFinite(this.r)) {
      console.warn('[Globe] r became non-finite — resetting');
      this.r = 0;
    }
  }

  onPointerUp(e: PointerEvent) {
    if (this.pointerId !== null && e.pointerId !== this.pointerId) return;
    this.releasePointer();
  }

  onPointerCancel(e: PointerEvent) {
    if (this.pointerId !== null && e.pointerId !== this.pointerId) return;
    this.releasePointer();
  }

  onPointerOut(e: PointerEvent) {
    // if the active pointer leaves the element, release capture & stop dragging
    if (this.pointerActive && this.pointerId === e.pointerId) {
      this.releasePointer();
    }
  }

  private releasePointer() {
    const el = this.canvasRef.nativeElement;
    try {
      if (this.pointerId !== null) {
        el.releasePointerCapture?.(this.pointerId);
      }
    } catch {}
    this.pointerActive = false;
    this.pointerId = null;
    el.style.cursor = 'grab';
  }
}
