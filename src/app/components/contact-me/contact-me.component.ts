import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactButtonModel } from '../../shared/contact-button/contact-button.model';

@Component({
  selector: 'app-contact-me',
  standalone: false,
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  contactButtonList: ContactButtonModel[] = [
    {
      hrefLink: 'https://www.linkedin.com/in/manoj-marmat',
      svgLink: 'assets/contacts-svg/linked-in.svg',
      animationClass:
        'animate-pulse drop-shadow-[0_0_10px_rgba(0,126,245,0.9)]',
      altText: 'Linked In',
      width: '50',
      height: '50',
    },
    {
      hrefLink: 'https://github.com/Manoj0Marmat',
      svgLink: 'assets/contacts-svg/github.svg',
      animationClass:
        'animate-pulse drop-shadow-[0_0_10px_rgba(0,126,245,0.9)]',
      altText: 'Github',
      width: '50',
      height: '50',
    },
    {
      hrefLink: 'https://wa.me/+917083955439',
      svgLink: 'assets/contacts-svg/whatsapp.svg',
      animationClass:
        'animate-pulse drop-shadow-[0_0_10px_rgba(37,211,102,0.9)]',
      altText: 'WhatsApp',
      width: '50',
      height: '50',
    },
    {
      hrefLink: 'mailto:manojrajput762000@gmail.com',
      svgLink: 'assets/contacts-svg/gmail.svg',
      animationClass:
        'animate-pulse drop-shadow-[0_0_10px_rgba(217,48,37,0.9)]',
      altText: 'Github',
      width: '50',
      height: '50',
    },
    {
      hrefLink: 'https://www.upwork.com/freelancers/~01e61ea9e0fd2c4048',
      svgLink: 'assets/contacts-svg/upwork.svg',
      animationClass:
        'animate-pulse drop-shadow-[0_0_10px_rgba(37,211,102,0.9)]',
      altText: 'UpWork',
      width: '50',
      height: '50',
    },
  ];
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
