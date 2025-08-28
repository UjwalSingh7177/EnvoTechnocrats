import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appTyping]'
})
export class TypingDirective implements OnInit {
  @Input('appTyping') text: string = '';
  @Input() speed: number = 50; // typing speed in ms
  @Output() typingDone = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.typeWriter(this.text, this.speed);
  }

  private typeWriter(text: string, speed: number) {
    let i = 0;
    const element = this.el.nativeElement;
    element.innerHTML = '';

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        this.typingDone.emit(); // ✅ notify when done
      }
    }, speed);
  }
}
