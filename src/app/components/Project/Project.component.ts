import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectDetailsComponent } from "../ProjectDetails/ProjectDetails.component";


@Component({
  selector: 'app-Project',
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.css'],
  imports: [CommonModule, ProjectDetailsComponent]
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  is_modal_open = false;

  constructor() { }

  ngOnInit() {
  }

}
