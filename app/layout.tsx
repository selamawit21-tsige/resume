
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// src/app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selamawit Tsige | Frontend Web Developer',
  description: 'Professional portfolio and resume of Selamawit Tsige, a React and Next.js specialist based in Addis Ababa.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'Ethiopia Tech', 'Web Development'],
  openGraph: {
    title: 'Selamawit Tsige | Resume',
    description: 'Explore my projects including AI Poem Generators and Weather Apps.',
    url: 'https://your-resume-link.vercel.app',
    siteName: 'Selamawit Tsige Portfolio',
    images: [
      {
        url: '/og-image.png', // Create a 1200x630 image for LinkedIn/Twitter previews
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
