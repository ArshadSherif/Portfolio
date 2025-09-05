import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/Card/Card.component";
import { CommonModule } from '@angular/common';
import { GlobeComponent } from "../../components/Globe/Globe.component";
import { CompyEmailButtonComponent } from "../../components/CompyEmailButton/CompyEmailButton.component";
import { FrameWorksComponent } from "../../components/FrameWorks/FrameWorks.component";

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css'],
  imports: [CardComponent, CommonModule, GlobeComponent, CompyEmailButtonComponent, FrameWorksComponent]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
