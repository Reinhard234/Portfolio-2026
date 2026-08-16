import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../../core/data/skills.data';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = SKILL_CATEGORIES;

  _activeCategory: string = '';

  public setActiveCategory(categoryName: string) {
    this._activeCategory = categoryName;
  }
}
