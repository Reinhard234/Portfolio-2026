import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') delay = 0; // ms, optional stagger

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition-delay',
      `${this.delay}ms`,
    );

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'revealed');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.2 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
