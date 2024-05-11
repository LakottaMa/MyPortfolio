import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  menuValue: boolean = false;
  isEnActive: boolean = true;
  isDeActive: boolean = false;


  openMenu() {
    this.servicesComponent.isActiveLink = '';
  }
  closeMenu() {
    this.menuValue = false;
  }

  constructor(private servicesComponent: ServicesComponent, private translate: TranslateService) { }
  setActiveLink(link: string): void {
    this.servicesComponent.setActiveLink(link);
  }
  scrollToTop(): void {
    this.servicesComponent.scrollToTop();
  }
  get isActiveLink(): string {
    return this.servicesComponent.isActiveLink;
  }
  changeLanguage(lang: string) {
    if (lang === 'en') {
      this.isEnActive = true;
      this.isDeActive = false;
      this.translate.use('en');
    } else if (lang === 'de') {
      this.isEnActive = false;
      this.isDeActive = true;
      this.translate.use('de');
      
    }
  }
}
