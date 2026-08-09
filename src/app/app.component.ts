import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectModalComponent } from './shared/components/modal/project-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
