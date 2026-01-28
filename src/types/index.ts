// Core types for the portfolio

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface StackItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  icon?: string;
  proficiency: number; // 1-100
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
