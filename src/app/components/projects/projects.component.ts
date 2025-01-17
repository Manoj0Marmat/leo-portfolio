import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  range: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
