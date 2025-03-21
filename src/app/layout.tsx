import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from "next-auth/react"
import Header from '@/components/ui/header';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quizz AI',
  description: 'Generate Quizzes And Study Faster Using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SessionProvider>
      <body className={"dark"}>
        <Header />
        {children}
        </body>
      </SessionProvider>
      <SpeedInsights />
    </html>
  )
}
