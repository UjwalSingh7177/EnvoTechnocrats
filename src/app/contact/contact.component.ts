import { Component, ElementRef, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit{

  constructor(private el: ElementRef) {}
   ngOnInit(): void {
        AOS.init({
          duration: 1000,
          once: true
        });
      }
    
      ngAfterViewInit(): void {
        // First, tell TypeScript this is an HTMLElement
        const nativeEl = this.el.nativeElement as HTMLElement;
    
        // Now querySelectorAll returns NodeListOf<HTMLElement>
        const fadeElements: HTMLElement[] = Array.from(
          nativeEl.querySelectorAll('.fade-up')
        );
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const target = entry.target as HTMLElement;
    
            if (entry.isIntersecting) {
              const delay = fadeElements.indexOf(target) * 150;
              setTimeout(() => target.classList.add('show'), delay);
            } else {
              target.classList.remove('show');
            }
          });
        }, { threshold: 0.1 });
    
        fadeElements.forEach((el: HTMLElement) => observer.observe(el));
      }

        formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    const serviceID = 'service_pxdn1q3';
    const publicKey = '9DLlFVzJ8sJ5PliGT';

    // First email - to you
    emailjs.send(serviceID, 'template_p3k7dmp', this.formData, publicKey)
      .then(() => {
        console.log('Email sent to me!');
      })
      .catch(err => console.error('Failed to send to me:', err));

    // Second email - to user
    
    emailjs.send(serviceID, 'template_vrc3lo5', this.formData, publicKey)
      .then(() => {
        console.log('Email sent to user!');
      })
      .catch(err => console.error('Failed to send to user:', err));
  }
  

}

  
