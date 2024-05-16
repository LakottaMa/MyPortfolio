import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImprintComponent, CommonModule, LandingPageComponent, HeaderComponent, FooterComponent, TranslateModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Marcel Lakotta';
  private scrollTimeout: any;
  constructor() { }

  /**
   * Initializes the AOS library with global settings and refreshes AOS.
   */
  ngOnInit(): void {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 100,
        delay: 80,
        duration: 600,
        easing: 'ease-out-back',
        once: false,
        mirror: false,
        anchorPlacement: 'top-top',
      });
    AOS.refresh();
  }

@HostListener('window:scroll')
/**
 * Function that handles the scroll event. It sets the custom scrollbar thumb color and resets it after a delay.
 */
onScroll() {
  const scrollbarThumbColor = '--scrollbar-thumb-color';
  const defaultScrollbarThumbColor = '';
  document.documentElement.style.setProperty(scrollbarThumbColor, '#00bee8');
  clearTimeout(this.scrollTimeout);
  this.scrollTimeout = setTimeout(() => {
    document.documentElement.style.setProperty(scrollbarThumbColor, defaultScrollbarThumbColor);
  }, 50);
}
/**
 * Lifecycle hook that is called when the component is destroyed.
 */
ngOnDestroy() {
  clearTimeout(this.scrollTimeout);
}
}
