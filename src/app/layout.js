import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/layout/WhatsAppButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Flash Prime Media Institute | Easy Way To Excellence",
  description: "Ghana's premier media and creative arts school.",
  keywords: "media school Ghana, broadcast journalism Accra, film school Ghana, FPMI",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://js.paystack.co/v1/inline.js" async />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}