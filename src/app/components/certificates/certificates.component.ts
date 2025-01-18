import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {
  // List of images (can be fetched from an API or defined statically)
  images = [
    {
      src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a58d1fbc-4b18-4cc9-8061-d40a2ae30e1a.jpg?v=1736330374000',
      alt: "Asp.Net Core : The Complete Guide To Build RESTful Api's",
    },
    {
      src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-ad9276d4-1e95-411b-a500-3e12e0bf8067.jpg?v=1735233680000',
      alt: '.NET Core MVC',
    },
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
