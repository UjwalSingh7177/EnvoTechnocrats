import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.less'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
      quote: 'Far far away, behind the word mountains...',
      name: 'Jeff Freshman',
      role: 'Guests',
      image: 'assets/s1.jpg'
    },
    {
      quote: 'Separated they live in Bookmarksgrove...',
      name: 'Sarah Parker',
      role: 'Clients',
      image: 'assets/s2.jpg'
    },
        {
      quote: 'Far far away, behind the word mountains...',
      name: 'Jeff Freshman',
      role: 'Guests',
      image: 'assets/s1.jpg'
    },
    {
      quote: 'Separated they live in Bookmarksgrove...',
      name: 'Sarah Parker',
      role: 'Clients',
      image: 'assets/s2.jpg'
    }
  ];

  currentIndex = 0;
  autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  resetAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }
}
