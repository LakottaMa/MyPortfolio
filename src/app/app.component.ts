import { Component, HostListener } from '@angular/core';
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
export class AppComponent {
  title = 'Marcel Lakotta';
  aos = AOS;

  private scrollTimeout: any;
  constructor() {
    this.aos.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 10, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease-out-back', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
    });
  };

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
