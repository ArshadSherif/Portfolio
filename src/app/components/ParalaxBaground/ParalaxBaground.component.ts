import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {  scroll,transform,animate,spring } from 'motion';

@Component({
  selector: 'app-ParalaxBaground',
  templateUrl: './ParalaxBaground.component.html',
  styleUrls: ['./ParalaxBaground.component.css'],
})
export class ParalaxBagroundComponent implements AfterViewInit {
  @ViewChild('mountain3') mountain3!: ElementRef;
  @ViewChild('mountain2') mountain2!: ElementRef;
  @ViewChild('mountain1') mountain1!: ElementRef;
  @ViewChild('planets') planets!: ElementRef;

  ngAfterViewInit() {
    scroll((progress: any) => {
      animate(
        this.mountain1.nativeElement,
        { y: progress *50 },
        { type: spring, damping: 25, stiffness: 200 }
      );

      animate(
        this.mountain2.nativeElement,
        { y: progress * 100 },
        { type: spring, damping: 25, stiffness: 200 }
      );

      animate(
        this.mountain3.nativeElement,
        { y: progress * 150 },
        { type: spring, damping: 25, stiffness: 200 }
      );

      animate(
        this.planets.nativeElement,
        { x: -50 + progress * 50 }, 
        { type: spring, damping: 20, stiffness: 180, bounce: 0.3 }
      );
    });
  }
}
