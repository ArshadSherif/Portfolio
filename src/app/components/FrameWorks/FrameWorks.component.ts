import { Component, OnInit } from '@angular/core';
import { OrbitingCirclesComponent } from '../OrbitingCircles/OrbitingCircles.component';

@Component({
  selector: 'app-FrameWorks',
  templateUrl: './FrameWorks.component.html',
  styleUrls: ['./FrameWorks.component.css'],
  imports: [OrbitingCirclesComponent],
})
export class FrameWorksComponent implements OnInit {
  allLogos: string[] = [
    // 'assets/logos/auth0.svg',
    'assets/logos/firebase.svg',
    'assets/logos/react.svg',
    'assets/logos/sqlite.svg',
    'assets/logos/css3.svg',
    'assets/logos/angular.svg',
    'assets/logos/python.svg',
    'assets/logos/git.svg',
    'assets/logos/github.svg',
    'assets/logos/html5.svg',
    'assets/logos/javascript.svg',
    'assets/logos/stripe.svg',
    'assets/logos/tailwindcss.svg',
    'assets/logos/threejs.svg',
    'assets/logos/vs-code.svg',
    'assets/logos/vitejs.svg',
    'assets/logos/cplusplus.svg',
    'assets/logos/clerk.svg',
    'assets/logos/postgressql.svg',
  ];

  outer_orbit: string[] = [];
  inner_orbit: string[] = [];

  constructor() {}

  ngOnInit() {
    this.outer_orbit = this.allLogos.slice(0, this.allLogos.length / 2);
    this.inner_orbit = this.allLogos.slice(this.allLogos.length / 2);
  }
}
