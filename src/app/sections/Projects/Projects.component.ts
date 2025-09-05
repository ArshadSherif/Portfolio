import { Component, OnInit } from '@angular/core';
import {myProjects} from '../../../constants/index';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from "../../components/Project/Project.component";
@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.css'],
  imports: [CommonModule, ProjectsComponent, ProjectComponent]
})
export class ProjectsComponent implements OnInit {

  myProjects:any = myProjects;

  constructor() { }

  ngOnInit() {
  }

}
