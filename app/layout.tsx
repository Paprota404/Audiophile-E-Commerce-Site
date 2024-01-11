import type { Metadata } from 'next'
import './globals.css'
import Navbar from './Navbar';
import Footer from './Footer'



export const metadata: Metadata = {
  title: 'Audiophile e-commerce',
  description: 'Buy some high qualiy sounding stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex-col ">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}