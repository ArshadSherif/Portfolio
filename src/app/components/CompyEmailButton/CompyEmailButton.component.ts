import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CompyEmailButton',
  templateUrl: './CompyEmailButton.component.html',
  styleUrls: ['./CompyEmailButton.component.css'],
  imports: [CommonModule]
})
export class CompyEmailButtonComponent implements OnInit {

  copied: boolean = false;
  email: string = "sherifarshad2003@gmail.com"
  
  copy_to_clipboard() { 
    navigator.clipboard.writeText(this.email);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
