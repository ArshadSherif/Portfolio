import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEntry {
  date: string;
  title: string;
  job: string;
  contents: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Timeline.component.html',
  styleUrls: ['./Timeline.component.css'],
})
export class TimelineComponent implements AfterViewInit {
  @Input() data: TimelineEntry[] = [];
  @ViewChild('timelineWrapper') timelineWrapper!: ElementRef<HTMLDivElement>;

  height = signal(0);
  progress = signal(0);

  ngAfterViewInit(): void {
    const rect = this.timelineWrapper.nativeElement.getBoundingClientRect();
    this.height.set(rect.height);

    // Initialize
    this.updateProgress();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateProgress();
  }

  private updateProgress(): void {
    const el = this.timelineWrapper.nativeElement;
    const rect = el.getBoundingClientRect();

    const viewportMid = window.innerHeight / 2 + 200;
    const start = rect.top - viewportMid; // when mid crosses top
    const end = rect.bottom - viewportMid; // when mid crosses bottom

    const total = end - start;
    let rawProgress = (0 - start) / total;

    // clamp
    rawProgress = Math.max(0, Math.min(1, rawProgress));
    this.progress.set(rawProgress);
  }

  get lineHeight(): string {
    return this.height() * this.progress() + 'px';
  }
}
