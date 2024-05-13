import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isEnActive: boolean = true;
  isDeActive: boolean = false;
  localStorageKey: string = 'selectedLanguage';
  /**
   * A constructor that initializes the LanguageService with the provided TranslateService.
   * @param {TranslateService} translate - The TranslateService to use for language translation.
   */
  constructor(public translate: TranslateService) {
    const selectedLanguage = localStorage.getItem(this.localStorageKey);
    if (selectedLanguage) {
      this.changeLanguage(selectedLanguage);
    }
  }
  /**
   * Changes the language of the application and updates the active language flags.
   * @param {string} lang - The language code to change to.
   */
  changeLanguage(lang: string) {
    this.translate.use(lang);
    if (lang === 'en') {
      this.isEnActive = true;
      this.isDeActive = false;
    } else if (lang === 'de') {
      this.isEnActive = false;
      this.isDeActive = true;
    }
    localStorage.setItem(this.localStorageKey, lang);
  }
}
