import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isEnActive: boolean = true;  //setzt EN btn aktive
  isDeActive: boolean = false; //setzt DE btn aktive

  constructor(public translate: TranslateService) {
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    if (lang === 'en') {
      this.isEnActive = true;
      this.isDeActive = false;
    } else if (lang === 'de') {
      this.isEnActive = false;
      this.isDeActive = true;
    }
  }
}
