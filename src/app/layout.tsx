// src/app/layout.tsx (Server Component)
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientProviders from '../../components/ClientProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jaiminraval.in'),
  title: {
    default: 'Jaimin Raval | Software Engineer & Full Stack Developer',
    template: '%s | Jaimin Raval'
  },
  description:
    'I am a professional Computer Science Engineer, Software Engineer, Developer, App Developer, Cloud Enthusiast, and DevOps Expert. Specializing in building scalable applications, cloud solutions, and modern DevOps practices.',
  keywords: ['Jaimin Raval', 'Software Engineer', 'Full Stack Developer', 'Cloud Engineer', 'DevOps', 'Web Development', 'React', 'Next.js', 'AWS', 'Portfolio'],
  authors: [{ name: 'Jaimin Raval' }],
  creator: 'Jaimin Raval',
  publisher: 'Jaimin Raval',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jaiminraval.in',
    siteName: 'Jaimin Raval Portfolio',
    title: 'Jaimin Raval | Software Engineer & Full Stack Developer',
    description: 'Professional Computer Science Engineer specializing in scalable applications, cloud solutions, and modern DevOps practices.',
    images: [{
      url: '/assets/logo.png',
      width: 1200,
      height: 630,
      alt: 'Jaimin Raval - Software Engineer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaimin Raval | Software Engineer & Full Stack Developer',
    description: 'Professional Computer Science Engineer specializing in scalable applications, cloud solutions, and modern DevOps practices.',
    creator: '@JaiminRaval100',
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  verification: {
    // Add your Google Search Console verification here
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jaimin Raval",
    "url": "https://www.jaiminraval.in",
    "image": "https://www.jaiminraval.in/assets/logo.png",
    "jobTitle": "Software Engineer",
    "description": "Professional Computer Science Engineer, Software Engineer, Developer, App Developer, Cloud Enthusiast, and DevOps Expert",
    "sameAs": [
      "https://github.com/Jaimin7364",
      "https://www.linkedin.com/in/jaimin-raval-132751283",
      "https://x.com/JaiminRaval100"
    ],
    "knowsAbout": ["Web Development", "Cloud Computing", "DevOps", "Software Engineering", "Full Stack Development"],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Computer Science Engineering"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jaimin Raval Portfolio",
    "url": "https://www.jaiminraval.in",
    "description": "Professional portfolio showcasing software engineering projects, articles, and expertise in web development, cloud computing, and DevOps.",
    "author": {
      "@type": "Person",
      "name": "Jaimin Raval"
    },
    "inLanguage": "en-US"
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
