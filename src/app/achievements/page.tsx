// src/app/achievements/page.tsx

import Achievements from "../../../components/Achievements";
import Navbar from "../../../components/Navbar";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Achievements',
    description: 'Explore Jaimin Raval\'s professional achievements including AWS Cloud Practitioner certification, Google Developer Group Cloud Core membership, technical articles, and milestones in software engineering.',
    alternates: {
      canonical: 'https://www.jaiminraval.dev/achievements',
    },
    openGraph: {
      title: 'Achievements | Jaimin Raval',
      description: 'Explore Jaimin Raval\'s professional achievements including AWS certification, GDG Cloud Core membership, and software engineering milestones.',
      url: 'https://www.jaiminraval.dev/achievements',
      siteName: 'Jaimin Raval Portfolio',
      images: ['/assets/logo.png'],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Achievements | Jaimin Raval',
      description: 'Professional achievements and certifications in cloud computing and software engineering.',
      creator: '@JaiminRaval100',
    },
};

export default function AchievementsPage() {
    return (
        <>
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "dateCreated": "2026-02-26T00:00:00Z",
              "dateModified": "2026-02-26T00:00:00Z",
              "mainEntity": {
                "@type": "Person",
                "name": "Jaimin Raval",
                "url": "https://www.jaiminraval.dev",
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "AWS Certified Cloud Practitioner",
                    "credentialCategory": "Professional Certificate",
                    "recognizedBy": {
                      "@type": "Organization",
                      "name": "Amazon Web Services"
                    },
                    "url": "https://www.credly.com/badges/52c72be0-6db5-419f-886d-b149332ecb11/public_url"
                  }
                ],
                "memberOf": [
                  {
                    "@type": "Organization",
                    "name": "Google Developer Group - CHARUSAT University",
                    "url": "https://gdg.community.dev/",
                    "member": {
                      "@type": "OrganizationRole",
                      "roleName": "Cloud Core Member",
                      "startDate": "2025-07"
                    }
                  }
                ]
              }
            }),
          }}
        />
        <Achievements />
        </>
    );
}