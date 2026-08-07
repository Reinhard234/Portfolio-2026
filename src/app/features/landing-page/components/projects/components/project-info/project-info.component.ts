import { Component, input } from '@angular/core';
import { Project } from '../../../../../../models/project.model';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss',
})
export class ProjectInfoComponent {
  project = input.required<Project>();
}
