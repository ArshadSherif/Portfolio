import { Component, OnInit } from '@angular/core';
import { HeroTextComponent } from '../../components/HeroText/HeroText.component';
import { ParalaxBagroundComponent } from "../../components/ParalaxBaground/ParalaxBaground.component";
import { AstronautComponent } from "../../components/Astronaut/Astronaut.component";

@Component({
  selector: 'app-Hero',
  templateUrl: './Hero.component.html',
  styleUrls: ['./Hero.component.css'],
  imports: [HeroTextComponent, ParalaxBagroundComponent, AstronautComponent]
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
