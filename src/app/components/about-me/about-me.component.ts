import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: false,

  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/']);
  }
}
