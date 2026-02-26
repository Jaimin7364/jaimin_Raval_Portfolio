// src/app/about/page.tsx

import About from "../../../components/About";
import Navbar from "../../../components/Navbar";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about Jaimin Raval, a passionate Software Engineer specializing in building modern web applications, cloud solutions, and exploring cutting-edge technologies.',
    alternates: {
      canonical: 'https://www.jaiminraval.dev/about',
    },
    openGraph: {
      title: 'About Jaimin Raval | Software Engineer',
      description: 'Learn more about Jaimin Raval, a passionate Software Engineer specializing in modern web applications and cloud solutions.',
      url: 'https://www.jaiminraval.dev/about',
      siteName: 'Jaimin Raval Portfolio',
      images: ['/assets/logo.png'],
      locale: 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Jaimin Raval | Software Engineer',
      description: 'Learn more about Jaimin Raval, a passionate Software Engineer specializing in modern web applications.',
      creator: '@JaiminRaval100',
      images: ['/assets/logo.png'],
    },
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <About />
        </>
    );
}