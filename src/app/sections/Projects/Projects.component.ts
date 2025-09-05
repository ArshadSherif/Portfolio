import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {myProjects} from '../../../constants/index';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "../../components/Project/Project.component";
import gsap from 'gsap';
@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.css'],
  imports: [CommonModule, ProjectsComponent, ProjectComponent],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('follower') follower!: ElementRef<HTMLImageElement>;

  myProjects: any = myProjects;
  hover_project: any = null;
  hover_project_image: string = '';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { 
      const el = this.follower.nativeElement;

      // Create quickTo setters
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });

      // Make image follow mouse with smooth delay
      window.addEventListener('mousemove', (e) => {
        xTo(e.clientX -120); 
        yTo(e.clientY + 20);
      });

  }
}
