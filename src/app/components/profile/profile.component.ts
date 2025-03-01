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
    { text: 'Contact Me', link: '/contact' },
  ];

  // Function to trigger resume download
  downloadResume() {
    const link = document.createElement('a');
    link.href =
      'https://raw.githubusercontent.com/Manoj0Marmat/Doc/refs/heads/main/ManojMarmat_Full-Stack_Developer_2.pdf'; // Replace with your GitHub raw file URL
    link.download = 'ManojMarmat_Resume.pdf'; // Optional: Specify a custom filename
    link.click();
  }
}
