import Homepage from "../../components/Home";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the portfolio of Jaimin Raval – Software Engineer, Full Stack Developer, and tech enthusiast specializing in scalable applications and cloud solutions.',
  alternates: {
    canonical: 'https://www.jaiminraval.dev/',
  },
  openGraph: {
    title: 'Jaimin Raval | Software Engineer & Full Stack Developer',
    description: 'Welcome to the portfolio of Jaimin Raval – Software Engineer, Full Stack Developer, and tech enthusiast.',
    url: 'https://www.jaiminraval.dev/',
    siteName: 'Jaimin Raval Portfolio',
    images: [{
      url: '/assets/logo.png',
      width: 1200,
      height: 630,
      alt: 'Jaimin Raval Portfolio',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaimin Raval | Software Engineer & Full Stack Developer',
    description: 'Welcome to the portfolio of Jaimin Raval – Software Engineer, Full Stack Developer, and tech enthusiast.',
    creator: '@JaiminRaval100',
    images: ['/assets/logo.png'],
  },
};

export default function ArticlesPage() {
    return (
        <Homepage />
    );
}