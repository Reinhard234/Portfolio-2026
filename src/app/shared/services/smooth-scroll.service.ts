import {
  Injectable,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService implements OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private lenis?: Lenis;
  private rafId?: number;

  init(): void {
    if (!this.isBrowser || this.lenis) return;

    // respect users who've asked their OS for less motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // run the animation loop outside Angular so it doesn't trigger change detection every frame
    this.zone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        lerp: 0.06, // 0-1: lower = more lag/glide, higher = snappier
        smoothWheel: true,
      });

      const raf = (time: number) => {
        this.lenis?.raf(time);
        this.rafId = requestAnimationFrame(raf);
      };
      this.rafId = requestAnimationFrame(raf);
    });
  }

  scrollTo(target: string | HTMLElement): void {
    if (this.lenis) {
      this.lenis.scrollTo(target);
    } else {
      // fallback when Lenis is off (reduced motion / SSR)
      const el =
        typeof target === 'string' ? document.querySelector(target) : target;
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.lenis?.destroy();
  }
}
