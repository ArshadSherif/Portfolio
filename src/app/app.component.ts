import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './sections/Navbar/Navbar.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { HeroComponent } from "./sections/Hero/Hero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgTemplateOutlet, CommonModule, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
}
