import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
