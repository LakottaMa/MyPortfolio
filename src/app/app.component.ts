import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImprintComponent, CommonModule, LandingPageComponent, HeaderComponent, FooterComponent, TranslateModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Marcel Lakotta';

  constructor() {
  }

  private scrollTimeout: any;

  @HostListener('window:scroll')
  onScroll() {
    const scrollbarThumbColor = '--scrollbar-thumb-color';
    const defaultScrollbarThumbColor = '';
    document.documentElement.style.setProperty(scrollbarThumbColor, '#00bee8');
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      document.documentElement.style.setProperty(scrollbarThumbColor, defaultScrollbarThumbColor);
    }, 50);
  }
  ngOnDestroy() {
    clearTimeout(this.scrollTimeout);
  }
}
