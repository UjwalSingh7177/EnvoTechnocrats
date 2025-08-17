import { Component, ElementRef, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

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
