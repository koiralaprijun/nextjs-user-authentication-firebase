"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import "./css/Navbar.css"
import Navbar from "./Navbar.jsx"

import { AuthProvider } from "./context/auth"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
