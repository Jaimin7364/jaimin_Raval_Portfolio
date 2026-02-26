// src/app/contact/page.tsx

import ContactPage from "../../../components/contact";
import Navbar from "../../../components/Navbar";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Jaimin Raval for collaboration opportunities, project inquiries, or to discuss software engineering, web development, and cloud solutions.',
    alternates: {
        canonical: 'https://www.jaiminraval.dev/contact',
    },
    openGraph: {
      title: 'Contact Jaimin Raval | Software Engineer',
      description: 'Get in touch with Jaimin Raval for collaboration opportunities and project inquiries.',
      url: 'https://www.jaiminraval.dev/contact',
      siteName: 'Jaimin Raval Portfolio',
      images: ['/assets/logo.png'],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Contact Jaimin Raval | Software Engineer',
      description: 'Get in touch with Jaimin Raval for collaboration opportunities.',
      creator: '@JaiminRaval100',
    },
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <ContactPage />
        </>
    );
}