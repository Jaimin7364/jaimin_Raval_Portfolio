// src/app/layout.tsx (Server Component)
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jaimin Raval',
  description:
    'I am a professional Computer Science Engineer, Software Engineer, Developer, App Developer, Cloud Enthusiast, and DevOps Expert. Specializing in building scalable applications, cloud solutions, and modern DevOps practices.',
  icons: {
    icon: '/assets/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jaimin Raval",
              "url": "https://www.jaiminraval.dev",
              "image": "https://www.jaiminraval.dev/assets/logo.png",
              "jobTitle": "Software Engineer",
              "sameAs": [
                "https://github.com/Jaimin7364",
                "www.linkedin.com/in/jaimin-raval-132751283",
                "https://x.com/JaiminRaval100?t=ZVjx3H-CihfeafrtLlg0ZA&s=09"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
