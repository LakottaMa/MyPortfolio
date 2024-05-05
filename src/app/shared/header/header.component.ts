import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor(private servicesComponent: ServicesComponent) { }
  setActiveLink(link: string): void {
    this.servicesComponent.setActiveLink(link);
  }

  scrollToTop(): void {
    this.servicesComponent.scrollToTop();
  }

  get isActiveLink(): string {
    return this.servicesComponent.isActiveLink;
  }
}
