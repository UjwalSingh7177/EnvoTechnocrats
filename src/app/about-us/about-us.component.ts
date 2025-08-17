import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit, AfterViewInit  {

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
     teamMembers = [
    { 
      name: 'Ryan Anderson', 
      role: 'Head Engineer', 
      description: 'Expert in structural engineering.', 
      image: 'assets/t1.jpg' 
    },
    { 
      name: 'Greg Washer', 
      role: 'Head Engineer', 
      description: 'Leads mechanical projects.', 
      image: 'assets/t2.webp' 
    },
    { 
      name: 'Tony Henderson', 
      role: 'Ass. Engineer', 
      description: 'Specializes in CAD and design.', 
      image: 'assets/t3.jpg' 
    },
    { 
      name: 'Jack Smith', 
      role: 'Architect', 
      description: 'Creative architect with 10+ years of experience.', 
      image: 'assets/t4.webp' 
    }
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
