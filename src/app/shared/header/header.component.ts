import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  isActiveLink: string = '';

  setActiveLink(link: string): void {
    this.isActiveLink = link;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0 });
    this.isActiveLink = '';

  }
}
