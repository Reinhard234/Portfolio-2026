// project-modal.component.ts
import { Component, inject, HostListener } from '@angular/core';
import { ModalService } from './modal.service';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  modalService = inject(ModalService);

  @HostListener('document:keydown.escape')
  onEscape() {
    this.modalService.close();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.modalService.close();
    }
  }
}
