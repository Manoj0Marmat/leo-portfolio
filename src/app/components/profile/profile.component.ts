import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  cRoutes = [
    { text: 'About Me', link: '/about-me' },
    { text: 'Skills', link: '/skills' },
    { text: 'Projects', link: '/projects' },
    { text: 'Certificates', link: '/certificates' },
  ];
}
