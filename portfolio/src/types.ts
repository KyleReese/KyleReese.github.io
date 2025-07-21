export interface NavItem {
  name: string;
  path: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
  technologies?: string[];
  createdAt?: Date;
}
