import { Injectable, signal } from '@angular/core';
import { Project } from '../../../core/models/project.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
  activeProject = signal<Project | null>(null);

  open(project: Project) {
    this.activeProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.activeProject.set(null);
    document.body.style.overflow = '';
  }
}
