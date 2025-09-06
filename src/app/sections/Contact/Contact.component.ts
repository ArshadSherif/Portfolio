import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css'],
  imports: [FormsModule],
})
export class ContactComponent implements OnInit {
  user_name: string = '';
  user_email: string = '';
  user_message: string = '';

  on_submit() {
    console.log('Form submitted:', {
      name: this.user_name,
      email: this.user_email,
      message: this.user_message,
    });
  }

  constructor() {}

  ngOnInit() {}
}
