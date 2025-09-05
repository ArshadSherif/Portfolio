import { Component, OnInit } from '@angular/core';
import { OrbitingCirclesComponent } from '../OrbitingCircles/OrbitingCircles.component';

@Component({
  selector: 'app-FrameWorks',
  templateUrl: './FrameWorks.component.html',
  styleUrls: ['./FrameWorks.component.css'],
  imports: [OrbitingCirclesComponent]
})
export class FrameWorksComponent implements OnInit {

  allLogos: string[] = [
    'assets/logos/auth0.svg',
    'assets/logos/azure.svg',
    'assets/logos/blazor-pink.png',
    'assets/logos/blazor.svg',
    'assets/logos/cplusplus.svg',
    'assets/logos/csharp-pink.png',
    'assets/logos/csharp.svg',
    'assets/logos/css3.svg',
    'assets/logos/dotnet-pink.png',
    'assets/logos/dotnet.svg',
    'assets/logos/dotnetcore.svg',
    'assets/logos/efcore.png',
    'assets/logos/git.svg',
    'assets/logos/github.svg',
    'assets/logos/html5.svg',
    'assets/logos/javascript.svg',
    'assets/logos/microsoft.svg',
    'assets/logos/microsoftsqlserver.svg',
    'assets/logos/react.svg',
    'assets/logos/sqlite.svg',
    'assets/logos/stripe.svg',
    'assets/logos/tailwindcss.svg',
    'assets/logos/threejs.svg',
    'assets/logos/visualstudiocode.svg',
    'assets/logos/vitejs.svg',
    'assets/logos/wordpress.svg'
  ];

  outer_orbit: string[] = [];
  inner_orbit: string[] = [];
 

  constructor() { }

  ngOnInit() {
     this.outer_orbit = this.allLogos.slice(0, this.allLogos.length / 2);
     this.inner_orbit = this.allLogos.slice(this.allLogos.length / 2);
  }

}
