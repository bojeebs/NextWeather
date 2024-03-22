import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css"
import { cn } from "../lib/utils"


interface RootLayoutProps {
  children: React.ReactNode;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background text-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
