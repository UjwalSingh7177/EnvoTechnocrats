import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {}
  startParagraphTyping = false;
  showButtons = false;
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
    // Initialize AOS animation
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  ngAfterViewInit(): void {
    const nativeEl = this.el.nativeElement as HTMLElement;

    // Fade-up scroll animation
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

    // --- Video autoplay fix ---
    const video = nativeEl.querySelector<HTMLVideoElement>('video.hero-video');
    if (video) {
      video.muted = true; // required for autoplay in most browsers
      video.play().catch(err => {
        console.warn('Video autoplay failed:', err);
      });
    }
  }
}
