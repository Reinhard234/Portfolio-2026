import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @ViewChild('iconLayer') iconLayer!: ElementRef<HTMLElement>;
  private ticking = false;

  @HostListener('window:scroll') onScroll() {
    if (this.ticking) return;
    this.ticking = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const icons =
        this.iconLayer.nativeElement.querySelectorAll<HTMLElement>('.icon');

      icons.forEach((icon) => {
        const speed = parseFloat(icon.dataset['speed'] ?? '0.2');
        icon.style.setProperty('--scroll-offset', `${scrollY * speed}px`);
      });

      this.ticking = false;
    });
  }
}
