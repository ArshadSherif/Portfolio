import { Component, OnInit } from '@angular/core';

import { mySocials } from '../../../constants';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css'],
  imports: [CommonModule],
})
export class FooterComponent implements OnInit {
  mySocials = mySocials;
  constructor() {}

  ngOnInit() {}
}
