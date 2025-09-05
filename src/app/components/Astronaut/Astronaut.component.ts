import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { animate } from 'motion';

@Component({
  selector: 'app-astronaut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Astronaut.component.html',
  styleUrls: ['./Astronaut.component.css'],
})
export class AstronautComponent implements AfterViewInit, OnDestroy {
  @ViewChild('astronautCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  // Core Three.js objects
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private astronautModel!: THREE.Group;
  private mixer!: THREE.AnimationMixer;
  private animationId!: number;
  private controls!: OrbitControls;

  // Reactive mobile detection
  private isMobile = signal(window.innerWidth < 768);

  // Hardcoded positions and rotations
  private modelPosition = computed(() => {
    return this.isMobile()
      ? { x: 0, y: -1.1, z: 0.3 } // Mobile position
      : { x: 1, y: -0.2, z: 1 }; // Desktop position
  });

  private modelRotation = { x: 0, y: Math.PI / 2, z: 0 }; // Hardcoded rotation (45 degrees Y-axis)
  private animationStartPosition = computed(() => {
    const finalPos = this.modelPosition();
    return this.isMobile()
      ? { x: finalPos.x, y: finalPos.y + 3, z: finalPos.z } // Start 3 units higher
      : { x: finalPos.x, y: finalPos.y + 3, z: finalPos.z }; // Start 3 units higher
    
  });

  private cameraPosition = { x: 0, y: 1, z: 3 };

  ngAfterViewInit() {
    this.setupScene();
    this.loadModel();
    this.animate();

    // Listen for window resize
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.mixer) this.mixer.stopAllAction();
    if (this.controls) this.controls.dispose();
    if (this.renderer) this.renderer.dispose();
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  private setupScene() {
    const canvas = this.canvasRef.nativeElement;
    const container = canvas.parentElement!;

    // Scene
    this.scene = new THREE.Scene();

    // Camera - hardcoded position
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(
      this.cameraPosition.x,
      this.cameraPosition.y,
      this.cameraPosition.z
    );

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);

    this.scene.add(ambientLight);
    this.scene.add(directionalLight);

    // Setup orbital controls
    this.setupOrbitControls();
  }

  private setupOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
    // Configure controls for rotation only
    this.controls.enableZoom = false; // Disable zoom
    this.controls.enablePan = false; // Disable panning
    this.controls.enableRotate = true; // Enable rotation
    
    // Set rotation speed
    this.controls.rotateSpeed = 0.3;
    
    // Set the target to a fixed point in space, not the model's position
    // This allows the model to appear in different positions while still allowing rotation
    this.controls.target.set(0, 0, 0);
    
    // Damping for smoother controls
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    
    // Allow right-click context menu

  }

  private loadModel() {
    const loader = new GLTFLoader();

    loader.load(
      '/models/tenhun_falling_spaceman_fanart.glb',
      (gltf) => {
        this.astronautModel = gltf.scene;

        // Set initial rotation
        this.astronautModel.rotation.set(
          this.modelRotation.x,
          this.modelRotation.y,
          this.modelRotation.z
        );

        // Set initial position (start from above)
        const startPos = this.animationStartPosition();
        this.astronautModel.position.set(startPos.x, startPos.y, startPos.z);

        // Setup animations
        if (gltf.animations && gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(this.astronautModel);
          gltf.animations.forEach((clip) => {
            this.mixer.clipAction(clip).play();
          });
        }

        this.scene.add(this.astronautModel);

        // Animate model coming down smoothly with Motion One
        this.animateModelEntrance();

        console.log('Astronaut model loaded and positioned');
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );
  }


  private animateModelEntrance() {
    if (!this.astronautModel) return;

    const finalPos = this.modelPosition();
    const startPos = this.animationStartPosition();

    // Create an object to animate
    const animationObject = { y: startPos.y };

    // Use Motion One to animate the model falling down smoothly
    animate(
      animationObject,
      { y: finalPos.y },
      {
        duration: 2, // 2 seconds
        ease: 'easeOut', // Smooth easing
        onUpdate: () => {
          this.astronautModel.position.y = animationObject.y;
        },
      }
    );
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    // Add default rotation to the astronaut model
    if (this.astronautModel) {
      this.astronautModel.rotation.y += 0.005; // Slow rotation around Y-axis
    }

    // Update orbital controls
    if (this.controls) {
      this.controls.update();
    }

    // Update animations
    if (this.mixer) {
      this.mixer.update(0.016); // ~60fps
    }

    this.renderer.render(this.scene, this.camera);
  }

  private onResize() {
    const canvas = this.canvasRef.nativeElement;
    const container = canvas.parentElement!;

    const wasMode = this.isMobile();

    // Update mobile state
    this.isMobile.set(window.innerWidth < 768);

    // If mode changed and model is loaded, animate to new position
    if (wasMode !== this.isMobile() && this.astronautModel) {
      this.animatePositionChange();
    }

    // Resize canvas
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  private animatePositionChange() {
    if (!this.astronautModel) return;

    const newPos = this.modelPosition();
    const currentPos = {
      x: this.astronautModel.position.x,
      y: this.astronautModel.position.y,
      z: this.astronautModel.position.z,
    };

    // Animate to new position smoothly
    animate(currentPos, newPos, {
      duration: 1, // 1 second
      ease: 'easeInOut',
      onUpdate: () => {
        this.astronautModel.position.set(
          currentPos.x,
          currentPos.y,
          currentPos.z
        );
      },
    });
  }
}
