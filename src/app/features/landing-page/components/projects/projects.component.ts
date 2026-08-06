import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChild('iconLayer') iconLayer!: ElementRef<HTMLElement>;
  private ticking = false;

  @HostListener('window:scroll') onScroll() {
    if (this.ticking) return;
    this.ticking = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const icons =
        this.iconLayer.nativeElement.querySelectorAll<HTMLElement>('.blob');

      icons.forEach((icon) => {
        const speed = parseFloat(icon.dataset['speed'] ?? '0.2');
        icon.style.setProperty('--scroll-offset', `${scrollY * speed}px`);
      });

      this.ticking = false;
    });
  }
}
