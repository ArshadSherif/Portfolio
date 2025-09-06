import { Component, OnInit } from '@angular/core';
import { TimelineComponent } from '../../components/Timeline/Timeline.component';
import { experiences } from '../../../constants';

@Component({
  selector: 'app-Experience',
  templateUrl: './Experience.component.html',
  styleUrls: ['./Experience.component.css'],
  imports: [TimelineComponent]
})
export class ExperienceComponent implements OnInit {

  experiences:any = experiences;

  constructor() { }

  ngOnInit() {
  }

}
