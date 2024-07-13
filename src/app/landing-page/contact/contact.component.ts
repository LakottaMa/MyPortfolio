import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServicesComponent } from '../../shared/services/services.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  [x: string]: any;
  mailSent: boolean = false;
  mailError: boolean = false;
  messageState: string = 'hidden';
  checked: boolean = false;

  constructor(private servicesComponent: ServicesComponent, private http: HttpClient) { }

  /**
   * Scrolls the page to the top by calling the scrollToTop method of the servicesComponent.
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
 * A function that shows different message states based on type.
 * @param {string} type - the type of message state to show
 */
  showMessage(type: string) {
    this.messageState = 'hidden';
    setTimeout(() => {
      this.messageState = 'visible';
      setTimeout(() => {
        this.messageState = 'closing';
        setTimeout(() => {
          this.messageState = 'hidden';
        }, 500);
      }, 2500);
    }, 0);
  }

  /**
   * An object that contains the data of the contact form.
   */
  contactData = {
    name: '',
    email: '',
    message: ''
  }

  /**
   * An object that contains the data of the post request.
   */
  post = {
    endPoint: 'https://marcel-lakotta.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * A function that submits the contact form.
   * @param {NgForm} ngForm - the contact form
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.checked) {
      this.internetError();
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: this.handleSuccess.bind(this, ngForm),
          error: this.handleError.bind(this)
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.checked) {
      ngForm.resetForm();
    }
  }

  /**
 * Handles the success response from the post request.
 * @param {NgForm} ngForm - the contact form
 * @param {any} response - the response from the post request
 */
  handleSuccess(ngForm: NgForm, response: any) {
    this.mailSent = true;
    this.mailError = false;
    this.showMessage('success');
    ngForm.resetForm();
  }

  /**
   * Handles the error response from the post request.
   * @param {any} error - the error response from the post request
   */
  handleError(error: any) {
    this.mailError = true;
    this.mailSent = false;
    this.showMessage('error');
  }

  /**
   * Checks if there is an internet connection.
   */
  internetError() {
    if (!navigator.onLine) {
      alert("no internet connection");
      this.mailError = true;
      this.mailSent = false;
      this.showMessage('error');
      return;
    }
  }
}
