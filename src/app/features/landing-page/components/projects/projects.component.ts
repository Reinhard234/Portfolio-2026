import {
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { Project } from '../../../../models/project.model';
import { ProjectInfoComponent } from './components/project-info/project-info.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectInfoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChild('blobLayer') blobLayer!: ElementRef<HTMLElement>;
  private ticking = false;

  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Road infrastructure reporting',
      description:
        'A platform for citizens to log and keep track of reported road infrastructure defects',
      image: 'road-infrastructure-1',
      client: 'Western Cape Government',
      year: '2025 - 2026',
    },
    {
      id: 2,
      title: 'Short term insurance',
      description:
        'A mobile first web platform catered for PPS members to get short term insurance on their everyday products',
      image: 'short-term-insurance-1',
      client: 'PPS',
      year: '2023 - 2024',
    },
    {
      id: 3,
      title: 'Emodle',
      description:
        'A puzzle game where you use emojis to guess the answer of the  day on easy or hard mode',
      image: 'emodle-1',
      client: 'Solo',
      year: '2026',
    },
  ]);

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
