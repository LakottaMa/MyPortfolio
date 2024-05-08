import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  mailSent: boolean = false;
  mailError: boolean = false;
  messageState: string = 'hidden';
  checked: boolean = false;

  constructor(private http: HttpClient) { }
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

  contactData = {
    name: '',
    email: '',
    message: ''
  }

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.checked) {

      if (!navigator.onLine) {
        console.error("no internet connection");
        this.mailError = true;
        this.mailSent = false;
        this.showMessage('error');
        return;
      }

      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.mailSent = true;
            this.mailError = false;
            this.showMessage('success');
            ngForm.resetForm();
          },
          error: (error) => {
            this.mailError = true;
            this.mailSent = false;
            this.showMessage('error');
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.checked) {
      ngForm.resetForm();
    }
  }
}
