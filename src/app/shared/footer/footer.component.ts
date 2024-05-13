import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { LanguageService } from '../services/languageService.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private servicesComponent: ServicesComponent, private languageService: LanguageService) { }
  /**
   * Scrolls to the top of the page by calling the scrollToTop method of the servicesComponent.
   */
  scrollToTop(): void {
    this.servicesComponent.scrollToTop();
  }
  /**
   * Returns the active link from the services component.
   * @return {string} The active link value.
   */
  get isActiveLink(): string {
    return this.servicesComponent.isActiveLink
  }
  /**
   * Returns the value of isEnActive property from the languageService.
   * @return {boolean} The value of isEnActive property.
   */
  get isEnActive(): boolean {
    return this.languageService.isEnActive
  }
}
