import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orbiting-circles',
  templateUrl: './OrbitingCircles.component.html',
  styleUrls: ['./OrbitingCircles.component.css'],
  imports: [CommonModule],
})
export class OrbitingCirclesComponent {
  @Input() className: string = '';
  @Input() reverse: boolean = false;
  @Input() duration: number = 20;
  @Input() delay: number = 0;
  @Input() radius: number = 160;
  @Input() path: boolean = true;
  @Input() iconSize: number = 30;
  @Input() speed: number = 1;
  @Input() icons: string[] = []; // list of image paths (SVG/PNG)

  get calculatedDuration(): number {
    return this.duration / this.speed;
  }

  get angles(): number[] {
    const count = this.icons.length;
    return this.icons.map((_, index) => (360 / count) * index);
  }
}
