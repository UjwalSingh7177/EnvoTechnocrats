import { Component, ElementRef, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  selectedService: any = null;
  startParagraphTyping = false; 
    showButtons = false; 

services = [
  {
    title: 'Project Management & Consultancy',
    img: 'assets/mep.jpg',
    description: 'Full architecture services with modern design.',
    details: {
      Pharma: [
        'Cleanroom Design & Execution – End-to-end solutions for cleanroom facilities ensuring compliance with global standards.',
        'HVAC, MEP & Utilities – Integrated systems for reliable production and controlled environments.',
        'Procurement & Sourcing – Identifying and supplying compliant equipment, materials, and systems specific to pharma industry needs.',
        'Facility Expansion & Modernization – Upgrading existing pharma facilities with minimal downtime and maximum efficiency.'
      ],
      Healthcare: [
        'Hospital & Laboratory Planning – Designing efficient, hygienic, and patient-focused healthcare environments.',
        'HVAC & MEP Systems – Delivering optimized building services for sterile, safe, and sustainable healthcare infrastructure.',
        'Procurement & Sourcing – Supplying medical-grade equipment, systems, and infrastructure components with a focus on quality and reliability.'
      ],
      Commercial: [
        'Office & Retail Development – Designing and managing modern, functional, and aesthetic commercial spaces.',
        'Sustainable HVAC & MEP – Energy-efficient systems designed to enhance comfort and reduce operational costs.',
        'Procurement & Sourcing – Providing cost-effective and reliable materials, systems, and services for commercial projects.',
        'Project Planning & Delivery – Complete management from concept to handover with a focus on timelines and budgets.'
      ]
    }
  },
  {
    title: 'Project Execution & Implementation',
    img: 'assets/mep.jpg',
    description: 'High quality renovation services for homes & offices.'
  },
  {
    title: 'Design, Development & System Upgradation',
    img: 'assets/mep.jpg',
    description: 'We manage construction projects end-to-end.'
  }
];


openDialog(service: any) {
  this.selectedService = service;
}

closeDialog() {
  this.selectedService = null;
}
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

}
