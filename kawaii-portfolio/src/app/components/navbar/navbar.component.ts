import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink } from '../../core/models/nav-link.model';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, NgIf, NgFor ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  navLinks: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
