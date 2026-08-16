import { SkillCategory } from '../models/skills.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'C#', icon: 'csharp' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3 / SCSS', icon: 'scss' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
  },
  {
    label: 'Frameworks',
    skills: [
      { name: 'Angular', icon: 'angular' },
      { name: 'Blazor', icon: 'blazor' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'Ionic', icon: 'ionic' },
    ],
  },
  {
    label: 'Design',
    skills: [
      { name: 'Figma', icon: 'figma' },
      { name: 'User Research' },
      { name: 'Wireframing' },
      { name: 'Design Systems' },
      { name: 'Prototyping' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Github', icon: 'github' },
      { name: 'Azure DevOps', icon: 'azure-devops' },
      { name: 'Visual Studio', icon: 'visual-studio' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
];
