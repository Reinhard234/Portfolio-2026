import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectModalComponent } from './shared/components/modal/project-modal.component';
import { SmoothScrollService } from './shared/services/smooth-scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  private readonly smoothScroll = inject(SmoothScrollService);

  ngOnInit(): void {
    this.smoothScroll.init();
  }
}
