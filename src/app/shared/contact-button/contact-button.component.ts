import { Component, Input, OnInit } from '@angular/core';
import { ContactButtonModel } from './contact-button.model';

@Component({
  selector: 'app-contact-button',
  standalone: false,
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss',
})
export class ContactButtonComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.contactButton);
  }
  @Input() contactButton!: ContactButtonModel[];
}
