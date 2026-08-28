import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SectionObserverService } from '../../shared/services/section-observer.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    NavbarComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  private sections = inject(SectionObserverService);

  ngAfterViewInit() {
    this.sections.observe(['hero', 'projects', 'skills', 'experience']);
  }

  ngOnDestroy() {
    this.sections.disconnect();
  }
}
