
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import ClientLayout from './layout-client';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TalentFlow - AI-Powered Recruitment Platform",
    template: "%s | TalentFlow"
  },
  description: "Transform your recruitment process with TalentFlow's AI-powered platform. Connect top talent with innovative companies through intelligent matching, automated screening, and streamlined hiring workflows.",
  keywords: ["recruitment", "AI hiring", "talent acquisition", "job matching", "recruiter platform", "candidate screening", "hiring automation"],
  authors: [{ name: "TalentFlow Team" }],
  creator: "TalentFlow",
  publisher: "TalentFlow",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talentflow.com',
    siteName: 'TalentFlow',
    title: 'TalentFlow - AI-Powered Recruitment Platform',
    description: 'Transform your recruitment process with AI-powered talent matching and automated screening.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TalentFlow - AI-Powered Recruitment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentFlow - AI-Powered Recruitment Platform',
    description: 'Transform your recruitment process with AI-powered talent matching and automated screening.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}