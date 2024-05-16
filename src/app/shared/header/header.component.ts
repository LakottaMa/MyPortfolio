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
  constructor(private servicesComponent: ServicesComponent, public translate: TranslateService, private languageService: LanguageService) { }
  /**
   * Sets the active link in the services component.
   */
  openMenu() {
    this.servicesComponent.isActiveLink = '';
  }
  /**
   * Sets the menuValue property to false, closing the menu.
   */
  closeMenu() {
    this.menuValue = false;
  }
  /**
   * Sets the active link in the services component.
   * @param {string} link - The link to set as active.
   */
  setActiveLink(link: string): void {
    this.servicesComponent.setActiveLink(link);
  }
  /**
   * Scrolls the page to the top.
   */
  scrollToTop(): void {
    this.servicesComponent.scrollToTop();
  }
  /**
   * Returns the active link from the services component.
   * @return {string} The active link value.
   */
  get isActiveLink(): string {
    return this.servicesComponent.isActiveLink;
  }
  /**
   * Returns the value of isEnActive property from the languageService.
   * @return {boolean} The value of isEnActive property.
   */
  get isEnActive(): boolean {
    return this.languageService.isEnActive;
  }
  /**
   * Returns the value of isDeActive property from the languageService.
   * @return {boolean} The value of isDeActive property.
   */
  get isDeActive(): boolean {
    return this.languageService.isDeActive;
  }
  /**
   * Changes the language of the application and updates the active language flags.
   * @param {string} lang - The language code to change to.
   */
  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.closeMenu();
  }
}
