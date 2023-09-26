import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInAnimation]
})
export class ContactComponent {
  formData: { name: string; email: string; message: string } = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message
    };

    emailjs
      .send('service_22rl4tm', 'template_c37lz76', templateParams, 'u6ChG9dGYHb8U_uou')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          this.formData = { name: '', email: '', message: '' };
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  }
}