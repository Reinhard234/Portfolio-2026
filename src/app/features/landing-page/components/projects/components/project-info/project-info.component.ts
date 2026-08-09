import { Component, inject, input, signal } from '@angular/core';
import { Project } from '../../../../../../core/models/project.model';
import { ModalService } from '../../../../../../shared/components/modal/modal.service';
import { ScrollRevealDirective } from '../../../../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss',
})
export class ProjectInfoComponent {
  private modalService = inject(ModalService);
  project = input.required<Project>();

  isHoveringImage = signal(false);

  cursorX!: number;
  cursorY!: number;

  onImageHover(isHovering: boolean, event: MouseEvent) {
    this.isHoveringImage.set(isHovering);

    if (isHovering) {
      this.updateCursorPosition(event);
    }
  }

  onCursorMove(event: MouseEvent) {
    this.updateCursorPosition(event);
  }

  private updateCursorPosition(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    this.cursorX = event.clientX - rect.left;
    this.cursorY = event.clientY - rect.top;
  }

  onImageClick() {
    this.modalService.open(this.project());
  }
}
