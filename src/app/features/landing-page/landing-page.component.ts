import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
