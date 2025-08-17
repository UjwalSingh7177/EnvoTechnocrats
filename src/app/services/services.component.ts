import { Component, ElementRef, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  selectedService: any = null;

services = [
  { title: 'Architecture', img: 'assets/mep.jpg', description: 'Full architecture services with modern design.' },
  { title: 'Renovation', img: 'assets/mep.jpg', description: 'High quality renovation services for homes & offices.' },
  { title: 'Construction', img: 'assets/mep.jpg', description: 'We manage construction projects end-to-end.' }
];

openDialog(service: any) {
  this.selectedService = service;
}

closeDialog() {
  this.selectedService = null;
}


  constructor(private el: ElementRef) {}
      projects = [
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s3.jpg', location: 'San Francisco, California, USA' },
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s1.jpg', location: 'San Francisco, California, USA' },
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s3.jpg', location: 'San Francisco, California, USA' },
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s3.jpg', location: 'San Francisco, California, USA' },
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s3.jpg', location: 'San Francisco, California, USA' },
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s3.jpg', location: 'San Francisco, California, USA' },
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s3.jpg', location: 'San Francisco, California, USA' },
      { title: 'BUILDING A CONDOMINIUM', img: 'assets/s3.jpg', location: 'San Francisco, California, USA' }
    ];
  
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

}
