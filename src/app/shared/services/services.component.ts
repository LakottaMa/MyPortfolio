import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesComponent {

  isActiveLink: string = '';

  setActiveLink(link: string): void {
    this.isActiveLink = link;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0 });
    this.isActiveLink = '';
  }
}
