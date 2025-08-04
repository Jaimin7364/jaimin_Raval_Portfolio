// src/app/layout.tsx (Server Component)
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jaimin Raval',
  description: 'I am a professional Computer Science Engineer, Software Engineer, Developer, App Developer, Cloud Enthusiast, and DevOps Expert. Specializing in building scalable applications, cloud solutions, and modern DevOps practices.',
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
