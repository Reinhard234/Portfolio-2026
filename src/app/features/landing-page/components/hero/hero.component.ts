import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  NgZone,
  ViewChild,
} from '@angular/core';
import { ParallaxDirective } from '../../../../directives/parallax.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ParallaxDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @ViewChild('cursor', { static: true }) cursor!: ElementRef<HTMLImageElement>;
  @ViewChild('content', { static: true })
  content!: ElementRef<HTMLElement>;
  hoverCaption: string = '';
  hoverCaptionChars: string[] = [];

  private readonly cycleMs = 3000;
  private cycleTimer?: ReturnType<typeof setInterval>;
  private flipTimer?: ReturnType<typeof setTimeout>;

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private rafId: number | null = null;
  private snapNextMove = true;
  private activeIndex = 0;
  public flyingOut = false;
  private ticking = false;

  readonly photos = [
    { img: '/assets/images/general/reinhard-2.jpg', caption: 'Bolzano, Italy' },
    {
      img: '/assets/images/general/reinhard-3.jpg',
      caption: 'Constantia, Cape Town',
    },
    {
      img: '/assets/images/general/reinhard-4.jpg',
      caption: 'Riva Del Garda, Italy',
    },
  ];

  readonly tilts = [-4, 3, -8];

  private readonly zone = inject(NgZone);

  // 0 to 1: lower = more lag, 1 = no lag
  private readonly ease = window.matchMedia('(prefers-reduced-motion: reduce)')
    .matches
    ? 1
    : 0.03;

  ngOnInit(): void {
    this.cycleTimer = setInterval(() => this.nextPhoto(), this.cycleMs);
  }

  onMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.targetX = event.clientX - rect.left;
    this.targetY = event.clientY - rect.top;

    if (this.snapNextMove) {
      this.currentX = this.targetX;
      this.currentY = this.targetY;
      this.snapNextMove = false;
    }

    if (this.rafId === null) {
      this.zone.runOutsideAngular(() => {
        this.rafId = requestAnimationFrame(this.tick);
      });
    }
  }

  onLeave(): void {
    this.snapNextMove = true;
  }

  private tick = (): void => {
    const dx = this.targetX - this.currentX;
    const dy = this.targetY - this.currentY;

    this.currentX += dx * this.ease;
    this.currentY += dy * this.ease;

    this.cursor.nativeElement.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;

    // once it has caught up, stop looping until the mouse moves again
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      this.rafId = null;
      return;
    }

    this.rafId = requestAnimationFrame(this.tick);
  };

  position(i: number): number {
    return (i - this.activeIndex + this.photos.length) % this.photos.length;
  }

  nextPhoto(): void {
    if (this.flyingOut) return;
    this.flyingOut = true;

    this.flipTimer = setTimeout(() => {
      this.activeIndex = (this.activeIndex + 1) % this.photos.length;
      this.flyingOut = false;
    }, 300);
  }

  setCaption(caption: string) {
    this.hoverCaption = caption;
    this.hoverCaptionChars = caption.split('');
  }

  clearCaption() {
    this.hoverCaption = '';
    this.hoverCaptionChars = [];
  }

  @HostListener('window:scroll') onScroll() {
    requestAnimationFrame(() => {
      const widthChangeSpeed = 0.4;
      const scrollY = window.scrollY;
      this.content.nativeElement.style.setProperty(
        'width',
        `calc(100% - ${scrollY * widthChangeSpeed}px)`,
      );
      if (scrollY > 0) {
        this.content.nativeElement.style.setProperty(
          'border-radius',
          `${scrollY * 0.1}px`,
        );
      } else {
        this.content.nativeElement.style.setProperty('border-radius', `0px`);
      }
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.cycleTimer);
    clearTimeout(this.flipTimer);

    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }
}
