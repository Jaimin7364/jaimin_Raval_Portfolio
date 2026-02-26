// data/achievements.ts

import { Trophy, Medal, Users, Award, Code, BookOpen, Cloud, LucideIcon } from 'lucide-react';

export interface Achievement {
  id: number | string;
  title: string;
  category: string;
  description: string;
  date: string;
  icon: LucideIcon;
  color: string;
  featured: boolean;
  link?: string;
  organization?: string;
  period?: string;
}

export const stats = [
  { 
    icon: Code, 
    value: '12+', 
    label: 'Articles Published', 
    color: 'from-blue-400 to-purple-500' 
  },
  { 
    icon: Cloud, 
    value: 'AWS', 
    label: 'Cloud Certified', 
    color: 'from-orange-400 to-yellow-500' 
  },
  { 
    icon: Users, 
    value: 'GDG', 
    label: 'Cloud Core Member', 
    color: 'from-green-400 to-blue-500' 
  },
  { 
    icon: Trophy, 
    value: '2+', 
    label: 'Years Experience', 
    color: 'from-purple-400 to-pink-500' 
  }
];

export const achievements: Achievement[] = [
  {
    id: 'gdg-cloud-core-2025',
    title: 'Cloud Core Member - Google Developer Group CHARUSAT',
    category: 'Leadership',
    description: 'Selected as Cloud Core team member at Google Developer Group, CHARUSAT University. Leading cloud technology initiatives, organizing workshops, and mentoring students in cloud computing and DevOps practices.',
    date: 'July 2025',
    period: 'July 2025 - July 2026',
    organization: 'Google Developer Group - CHARUSAT University',
    icon: Users,
    color: 'from-green-400 to-blue-500',
    featured: true,
    link: 'https://gdg.community.dev/'
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    category: 'Certifications',
    description: 'Achieved AWS Certified Cloud Practitioner certification, demonstrating comprehensive understanding of AWS Cloud, services, security, architecture, pricing, and support. Validated expertise in cloud computing fundamentals.',
    date: 'January 2025',
    organization: 'Amazon Web Services (AWS)',
    icon: Cloud,
    color: 'from-orange-400 to-yellow-500',
    featured: true,
    link: 'https://www.credly.com/badges/52c72be0-6db5-419f-886d-b149332ecb11/public_url'
  }
];

export const categories = [
  'All', 
  'Leadership', 
  'Certifications', 
  'Writing', 
  'Technical', 
  'Projects'
];

export const getFeaturedAchievements = () => {
  return achievements.filter(achievement => achievement.featured);
};

export const getAchievementsByCategory = (category: string) => {
  if (category === 'All') return achievements;
  return achievements.filter(achievement => achievement.category === category);
};
