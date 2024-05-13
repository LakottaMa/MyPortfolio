import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/languageService.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule],
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

  constructor(private servicesComponent: ServicesComponent, public translate: TranslateService, private languageService: LanguageService) { }

  setActiveLink(link: string): void {
    this.servicesComponent.setActiveLink(link);
  }
  scrollToTop(): void {
    this.servicesComponent.scrollToTop();
  }
  get isActiveLink(): string {
    return this.servicesComponent.isActiveLink;
  }
  get isEnActive(): boolean {
    return this.languageService.isEnActive;
  }
  get isDeActive(): boolean {
    return this.languageService.isDeActive;
  }
  changeLanguage(lang: string) {
    console.log('click:', lang);
    this.languageService.changeLanguage(lang);
    console.log('service:', this.languageService.translate.currentLang)
  }
}
