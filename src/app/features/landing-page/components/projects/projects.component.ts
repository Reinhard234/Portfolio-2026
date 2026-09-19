import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { PROJECTS } from '../../../../core/data/project.data';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from '../../../../directives/parallax.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectInfoComponent,
    ScrollRevealDirective,
    CommonModule,
    ParallaxDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = PROJECTS;
}
