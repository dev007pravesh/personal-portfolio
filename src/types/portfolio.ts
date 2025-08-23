export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'other'
  proficiency: number // 1-100
  icon: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  duration: string
  description: string
}

export interface Contact {
  email: string
  phone?: string
  location: string
  linkedin?: string
  twitter?: string
  github?: string
}

export interface PortfolioData {
  personalInfo: {
    name: string
    title: string
    subtitle: string
    description: string
    about: string
    avatar: string
    resumeUrl?: string
  }
  skills: Skill[]
  projects: Project[]
  experience: Experience[]
  education: Education[]
  contact: Contact
}
