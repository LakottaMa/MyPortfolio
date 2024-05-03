import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LandingPageComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Marcel Lakotta Portfolio';

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
