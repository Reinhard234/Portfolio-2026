import { inject, Injectable, signal } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Injectable({ providedIn: 'root' })
export class ModalService {
  activeProject = signal<Project | null>(null);
  private readonly smoothScroll = inject(SmoothScrollService);

  open(project: Project) {
    this.activeProject.set(project);
    document.body.style.overflow = 'hidden';
    this.smoothScroll.lock();
  }

  close() {
    this.activeProject.set(null);
    document.body.style.overflow = '';
    this.smoothScroll.unlock();
  }
}
