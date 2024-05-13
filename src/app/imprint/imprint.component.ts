import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../shared/services/languageService.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {

  constructor(public translate: TranslateService, private languageService: LanguageService) {
    // if (this.languageService.translate.currentLang === 'en') {
    //   console.log('ImprintCompt use en');
    //   this.translate.use('en');
    // } else if (this.languageService.translate.currentLang === 'de') {
    //   console.log('ImprintCompt use de');
    //   this.translate.use('de');
    // }

    // this.translate.use('de');  //wird dirkt überstezt
    // this.languageService.translate.use('de'); //wird dirkt überstezt
  }

  ngOnInit(): void {


    if (this.languageService.translate.currentLang === 'en') {
      console.log('ImprintCompt use en');
      this.translate.use('en');
    } else if (this.languageService.translate.currentLang === 'de') {
      console.log('ImprintCompt use de');
      this.translate.use('de');
    }

    // if (this.languageService.isEnActive){
    //   this.translate.use('en');
    // } else if (this.languageService.isDeActive){
    //   this.translate.use('de');
    // }

    // this.translate.use('de'); //wird dirkt überstezt
    // this.languageService.translate.use('de'); //wird dirkt überstezt
  }
}
