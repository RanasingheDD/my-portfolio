
export interface Project {
  id: string;
  title: string;
  period: string;
  link?: string;
  description: string[];
  technologies: string[];
  imageUrl?: string;
}

export interface Skill {
  name: string;
  logo?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  gpa: string;
}

export interface Achievement {
  id: string;
  text: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
  logo?: string;
}

export interface Leadership {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  titles: string[];
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  medium: string;
  cvUrl?: string;
  summary: string;
  education: Education;
  projects: Project[];
  certifications: Certification[];
  skills: SkillGroup[];
  services: Service[];
  achievements: Achievement[];
  leadership: Leadership[];
}
