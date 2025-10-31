import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Seema Didi Fashion - Indian Fashion Stylist & Creative Director',
  description: 'Discover the creative world of Seema Didi - Indian Fashion Stylist, Creative Director, and Traditional Wear Specialist. Explore saree styling, ethnic wear, and contemporary Indian fashion.',
  keywords: 'indian fashion stylist, saree styling, ethnic wear, traditional indian fashion, lehenga styling, indian wedding fashion, bollywood styling',
  authors: [{ name: 'Seema Didi' }],
  openGraph: {
    title: 'Seema Didi Fashion',
    description: 'Indian Fashion Stylist & Creative Director Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}