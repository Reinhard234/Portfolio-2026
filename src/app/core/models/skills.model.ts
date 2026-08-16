export interface Skill {
  name: string;
  icon?: string; // path to logo/icon asset
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}
