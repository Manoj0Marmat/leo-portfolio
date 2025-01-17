import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: false,

  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.skillCategories = this.skillCategories.sort(
      (a, b) => b.skills.length - a.skills.length
    );
  }

  skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C#', 'JavaScript', 'TypeScript', 'SQL'],
      gradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
    },
    {
      title: '.NET Technologies',
      skills: [
        '.NET Core',
        'ASP.NET MVC',
        'Entity Framework Core',
        'LINQ',
        'Web API',
      ],
      gradient: 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500',
    },
    {
      title: 'Frontend Technologies',
      skills: [
        'Angular (Beginner)',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
      ],
      gradient: 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500',
    },
    {
      title: 'Databases',
      skills: ['SQL Server', 'MySQL', 'PostgreSQL (Beginner)'],
      gradient: 'bg-gradient-to-r from-red-500 via-pink-500 to-purple-500',
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
      gradient: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500',
    },
    {
      title: 'Tools & IDEs',
      skills: ['Visual Studio', 'Visual Studio Code', 'JIRA', 'Postman'],
      gradient: 'bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300',
    },
    {
      title: 'Project Management',
      skills: ['Agile', 'Scrum'],
      gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
    },
  ];

  goBack() {
    this.router.navigate(['/']);
  }
}
