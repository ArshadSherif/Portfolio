import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ProjectDetails',
  templateUrl: './ProjectDetails.component.html',
  styleUrls: ['./ProjectDetails.component.css'],
  imports: [JsonPipe,CommonModule]
})
export class ProjectDetailsComponent implements OnInit {
  @Input() project: any;
  @Output() close_modal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    console.log(this.project);
  }

  close() {
    this.close_modal.emit(false);
  }

}
