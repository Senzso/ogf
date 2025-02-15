"use client"

import type React from "react"

// Add AOS (Animate On Scroll) library for number animations
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

