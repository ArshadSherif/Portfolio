import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin,Draggable);

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css'],
  imports: [CommonModule],
})
export class CardComponent implements OnInit {
  @Input() display_text: string = '';
  @Input() custom_style: { [key: string]: string } = {};
  @Input() image_src: string = '';
  @Input() dragBoundary: HTMLElement | null = null;

  ngAfterViewInit() { 
    Draggable.create('.draggableEl', {
      inertia: true,
      bounds: this.dragBoundary || undefined,
      dragResistance: 0.3,
      edgeResistance: 0.65,
    });
  }

  constructor() {}

  ngOnInit() {}
}
