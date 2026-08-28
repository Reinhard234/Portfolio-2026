import { Component, inject } from '@angular/core';
import { SectionObserverService } from '../../services/section-observer.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private sections = inject(SectionObserverService);
  isHidden = this.sections.isHidden;
  activeSection = this.sections.activeSection;
  navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
  ];

  scrollTo(id: string) {
    this.sections.scrollTo(id);
  }
}
