import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements OnInit, OnDestroy {
  /** Direction this element should drift as the user scrolls */
  @Input() appParallax: 'up' | 'down' = 'up';
  /** How strong the effect is — keep this small, 0.1–0.3 feels natural */
  @Input() parallaxSpeed = 0.2;
  /** Clamp so it never drifts absurdly far on long pages */
  @Input() parallaxMax = 80;

  private ticking = false;
  private readonly onScroll = () => this.requestTick();

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.update();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  private requestTick(): void {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => this.update());
  }

  private update(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;

    const direction = this.appParallax === 'up' ? -1 : 1;
    const raw = distanceFromCenter * this.parallaxSpeed * direction;
    const offset = Math.max(-this.parallaxMax, Math.min(this.parallaxMax, raw));

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translateY(${offset}px)`,
    );
    this.ticking = false;
  }
}
