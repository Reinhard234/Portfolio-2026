import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { EXPERIENCE } from '../../../../core/data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experience = EXPERIENCE;
}
