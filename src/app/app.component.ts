import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './sections/Navbar/Navbar.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { HeroComponent } from "./sections/Hero/Hero.component";
import { AboutComponent } from "./sections/About/About.component";
import { ProjectsComponent } from "./sections/Projects/Projects.component";
import { ExperienceComponent } from "./sections/Experience/Experience.component";
import { ContactComponent } from "./sections/Contact/Contact.component";
import { FooterComponent } from "./sections/Footer/Footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgTemplateOutlet, CommonModule, HeroComponent, AboutComponent, ProjectsComponent, ExperienceComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
}
