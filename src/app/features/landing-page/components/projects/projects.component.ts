import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { PROJECTS } from '../../../../core/data/project.data';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectInfoComponent, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChild('blobLayer') blobLayer!: ElementRef<HTMLElement>;
  private ticking = false;

  projects = PROJECTS;

  @HostListener('window:scroll') onScroll() {
    if (this.ticking) return;
    this.ticking = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const blobs =
        this.blobLayer.nativeElement.querySelectorAll<HTMLElement>('.blob');

      blobs.forEach((blob) => {
        const speed = parseFloat(blob.dataset['speed'] ?? '0.2');
        blob.style.setProperty('--scroll-offset', `${scrollY * speed}px`);
      });

      this.ticking = false;
    });
  }
}
