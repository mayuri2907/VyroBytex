export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  offerings: string[];
  problemsSolved: string[];
  whoBenefits: string[];
  capabilities: string[];
  deliverables: string[];
  tag: string;
  previewImage?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Website Development' | 'E-commerce' | 'Software Development' | 'AI Solutions';
  isConcept: boolean;
  conceptLabel: string;
  clientOrContext: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  keyInteractions: string[];
  techStack: string[];
  tags: string[];
  image: string;
  year: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
}

export interface Differentiator {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface WorkingPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  isFounder?: boolean;
  portfolioUrl?: string;
  instagramUrl?: string;
}

