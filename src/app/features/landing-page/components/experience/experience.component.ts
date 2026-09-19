import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { EXPERIENCE } from '../../../../core/data/experience.data';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ParallaxDirective } from '../../../../directives/parallax.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective, ExperienceCardComponent, ParallaxDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experience = EXPERIENCE;
  expandedIndex: number | null = null;

  toggleEntry(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }
}
