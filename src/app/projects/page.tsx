// src/app/projects/page.tsx

import Navbar from "../../../components/Navbar";
import ProjectsPage from "../../../components/project";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Jaimin Raval\'s portfolio projects, showcasing expertise in modern web development, cloud solutions, innovative applications, and cutting-edge technology implementations.',
  alternates: {
    canonical: 'https://www.jaiminraval.in/projects'
  },
  openGraph: {
    title: 'Projects | Jaimin Raval Portfolio',
    description: 'Explore Jaimin Raval\'s portfolio projects showcasing expertise in modern web development and cloud solutions.',
    url: 'https://www.jaiminraval.in/projects',
    siteName: 'Jaimin Raval Portfolio',
    images: ['/assets/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Jaimin Raval Portfolio',
    description: 'Explore Jaimin Raval\'s portfolio projects showcasing expertise in modern web development.',
    creator: '@JaiminRaval100',
    images: ['/assets/logo.png'],
  },
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <ProjectsPage />
        </>
    );
}