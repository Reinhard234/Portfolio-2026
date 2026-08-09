import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @ViewChild('iconLayer') iconLayer!: ElementRef<HTMLElement>;
  private ticking = false;
  hoverCaption: string = '';
  hoverCaptionChars: string[] = [];

  setCaption(caption: string) {
    this.hoverCaption = caption;
    this.hoverCaptionChars = caption.split('');
  }

  clearCaption() {
    this.hoverCaption = '';
    this.hoverCaptionChars = [];
  }

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
