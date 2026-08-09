export interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  year: string;
  image: string;
  skills: string[];
  caseStudy: {
    industry: string;
    role?: string[];
    overview: string;
    problem: string;
    contribution: string;
    context?: string;
    decisions?: string;
    quality?: string;
    outcome?: string;
  };
}
