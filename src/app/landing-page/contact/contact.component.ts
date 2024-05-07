import { Component, inject, OnInit } from '@angular/core';
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

export class ContactComponent implements OnInit {

  mailSent: boolean = false;
  mailError: boolean = false;
  messageState: string = 'hidden';
  ngOnInit(): void {
    this.messageState = this.mailSent ? 'success' : this.mailError ? 'error' : 'hidden';
  }
  showMessage(type: string) {
    this.messageState = 'closing';
    setTimeout(() => this.messageState = 'hidden', 2050);
  }

  http = inject(HttpClient);
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
    console.log("Form submitted");
    if (ngForm.submitted && ngForm.form.valid) {
      console.log("Form is valid");
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log("Mail sent successfully");
            this.mailSent = true;
            this.mailError = false;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error("Error sending mail", error);
            this.mailError = true;
            this.mailSent = false;
          },
          complete: () => {
            console.log("Mail sending completed");
            console.info('send post complete');
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
    }
  }
}
