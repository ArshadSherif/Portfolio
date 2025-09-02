import { Component, OnInit } from '@angular/core';
import { NgxWordMorphComponent } from '@omnedia/ngx-word-morph';

@Component({
  selector: 'app-HeroText',
  templateUrl: './HeroText.component.html',
  styleUrls: ['./HeroText.component.css'],
  imports: [NgxWordMorphComponent],
})
export class HeroTextComponent implements OnInit {
  words: string[] = ['Secure', 'Modern', 'Scalable'];
  constructor() {}

  ngOnInit() {}
}
