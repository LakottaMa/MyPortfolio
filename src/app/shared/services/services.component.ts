import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicesComponent {
  isActiveLink: string = '';
  /**
   * Sets the active link.
   * @param {string} link - The link to set as active.
   */
  setActiveLink(link: string): void {
    this.isActiveLink = link;
  }
  /**
   * Scrolls to the top of the page by setting the window scroll to top and resetting the isActiveLink.
   */
  scrollToTop(): void {
    window.location.hash = '#profil';
    this.isActiveLink = '';
  }
}
