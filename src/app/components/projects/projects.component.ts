import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsList = [
    {
      title: 'Interactive Portfolio',
      imgUrl: 'assets/projects/portfolio.png',
      vidUrl: 'assets/projects/portfolio.gif',
      gitUrl: 'https://github.com/Manoj0Marmat/leo-portfolio',
      type: 'Personal Branding & Showcase',
    },
    {
      title: 'Bulky MVC E-commerce',
      gitUrl: 'https://github.com/Manoj0Marmat/Bulky_MVC',
      type: 'E-commerce Platform with MVC Architecture',
    },
    {
      title: 'RPG API',
      imgUrl: 'assets/projects/backend.png',
      vidUrl: 'assets/projects/backend.gif',
      gitUrl: 'https://github.com/Manoj0Marmat/dotnet-rpg',
      type: 'Backend API for Role-Playing Game',
    },
    {
      title: 'Event Management API',
      imgUrl: 'assets/projects/backend.png',
      vidUrl: 'assets/projects/backend.gif',
      gitUrl: 'https://github.com/Manoj0Marmat/WebDevBackend',
      type: 'CRUD API for Event Management',
    },
    {
      title: 'User Management Web App',
      gitUrl: 'https://github.com/Manoj0Marmat/web-application-task',
      type: 'Authentication & Profile Management',
    },
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
