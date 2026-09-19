import { ParallaxDirective } from '../../../../directives/parallax.directive';
import { ScrollRevealDirective } from './../../../../directives/scroll-reveal.directive';
import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, ParallaxDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly bio =
    "I'm from sunny South Africa. A land of endless possibility and growth, but also of real pain and poverty. Navigating that contrast has shaped who I am: someone who cares deeply about the weight of every decision, big or small. That same care is what I bring into my work.";

  readonly tagline =
    "I'm a developer who turns hard problems into interfaces that feel simple.";

  readonly stats: Stat[] = [
    { value: '4+', label: 'years coding' },
    { value: '3', label: 'industries worked in' },
    { value: 'SCSS', label: 'guilty pleasure' },
  ];
}
