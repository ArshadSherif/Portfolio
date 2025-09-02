import { Component, OnInit } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
  imports: [NgTemplateOutlet, CommonModule],
})
export class NavbarComponent implements OnInit {
  is_open = false;

  constructor() {}

  ngOnInit() {}
}
