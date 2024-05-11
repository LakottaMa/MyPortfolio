import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuValue: boolean = false;
  openMenu() {
    this.servicesComponent.isActiveLink = '';
  }
  closeMenu() {
    this.menuValue = false;
  }

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
