import type { Metadata } from 'next'
import './globals.css'
import Navbar from './Navbar';
import { Manrope } from '@next/font/google';

const manrope = Manrope({
 weight: '400',
 subsets: ['latin'],
 variable: '--font-manrope',
});


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
      <body className="flex justify-center">
        <Navbar />
        {children}
        </body>
    </html>
  )
}

//tu ma być navbar i tyle