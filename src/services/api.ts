import type { Project, Experience, StackItem, ContactForm, ApiResponse } from '@/types';

// Simulated network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock data
const mockProjects: Project[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration',
    thumbnail: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    slug: 'task-management',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    thumbnail: '/placeholder.svg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    featured: true,
    createdAt: '2023-08-20',
  },
  {
    id: '3',
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard for business metrics',
    thumbnail: '/placeholder.svg',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    featured: false,
    createdAt: '2023-05-10',
  },
];

const mockExperiences: Experience[] = [
  {
    id: '1',
    company: 'Công ty TNHH Nha Khoa KIM',
    position: 'Backend Developer',
    startDate: '2024-01',
    description: 'Developed and upgraded a management system for 30+ clinics with modules including appointment scheduling, finance, reporting, HR, CRM, services, and sales. Participated in SaaS transformation.',
    technologies: ['NextJS', 'Vite', 'React Hook Form', 'Tailwind CSS', 'TanStack', 'Shadcn/UI', 'Zustand', 'Zod', 'NodeJS', 'Laravel', 'MySQL', 'Docker', 'Postman', 'MinIO (S3)', 'Rancher (Kubernetes)', 'FPT AI', 'Keycloak'],
  },
  {
    id: '2',
    company: 'Long Yen Trading, Construction and Service Co., Ltd',
    position: 'Full Stack Developer',
    startDate: '2022-11',
    endDate: '2023-12',
    description: 'Independently handled company projects, system maintenance, chatbot system design, and mobile application management.',
    technologies: ['Flask', 'NodeJs', 'C#', '.NET Entity Framework 6', 'MongoDB', 'VectorDB (Pinecone)', 'ReactJS', 'SQL Server', 'Figma', 'Git', 'Angular'],
  },
  {
    id: '3',
    company: 'CloudMedia',
    position: 'Frontend Developer',
    startDate: '2022-06',
    endDate: '2022-11',
    description: 'Developed frontend websites for company projects.',
    technologies: ['Odoo', 'Python', 'HTML', 'CSS', 'Javascript'],
  },
];

const mockStack: StackItem[] = [
  { id: '1', name: 'React', category: 'frontend', proficiency: 95 },
  { id: '2', name: 'TypeScript', category: 'frontend', proficiency: 90 },
  { id: '3', name: 'Tailwind CSS', category: 'frontend', proficiency: 85 },
  { id: '4', name: 'Node.js', category: 'backend', proficiency: 85 },
  { id: '5', name: 'Python', category: 'backend', proficiency: 75 },
  { id: '6', name: 'PostgreSQL', category: 'database', proficiency: 80 },
  { id: '7', name: 'MongoDB', category: 'database', proficiency: 70 },
  { id: '8', name: 'Docker', category: 'devops', proficiency: 75 },
  { id: '9', name: 'AWS', category: 'devops', proficiency: 70 },
  { id: '10', name: 'Git', category: 'tools', proficiency: 90 },
];

// API functions
export const api = {
  getProjects: async (): Promise<ApiResponse<Project[]>> => {
    await delay(500);
    return { data: mockProjects, success: true };
  },

  getProject: async (slug: string): Promise<ApiResponse<Project | null>> => {
    await delay(300);
    const project = mockProjects.find((p) => p.slug === slug) || null;
    return { data: project, success: !!project };
  },

  getExperiences: async (): Promise<ApiResponse<Experience[]>> => {
    await delay(400);
    return { data: mockExperiences, success: true };
  },

  getStack: async (): Promise<ApiResponse<StackItem[]>> => {
    await delay(300);
    return { data: mockStack, success: true };
  },

  sendContact: async (form: ContactForm): Promise<ApiResponse<null>> => {
    await delay(800);
    console.log('Contact form submitted:', form);
    return { data: null, success: true, message: 'Message sent successfully' };
  },
};
