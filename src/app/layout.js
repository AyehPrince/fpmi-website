import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/layout/WhatsAppButton"
import PageTransition from "@/components/layout/PageTransition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Flash Prime Media Institute | Easy Way To Excellence",
  description: "Ghana's premier media and creative arts institute in Accra. Study Broadcast Journalism, Film, Graphic Design, Fashion Design, Cosmetology and more.",
  keywords: "media school Ghana, broadcast journalism Accra, film school Ghana, FPMI, Flash Prime Media Institute, fashion design school Accra, graphic design Ghana",
  verification: {
    google: "0CZaai3hRJH3KPb3qHARKetuyJJeMalRE5N-QmBoaOU",
  },
  openGraph: {
    title: "Flash Prime Media Institute | Easy Way To Excellence",
    description: "Ghana's premier media and creative arts institute in Accra.",
    url: "https://flashmediainstitute.com",
    siteName: "Flash Prime Media Institute",
    images: [{ url: "/logo.png" }],
    locale: "en_GH",
    type: "website",
  },
  icons: {
  icon: [
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
  shortcut: "/favicon.ico",
},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://js.paystack.co/v1/inline.js" async />
      </head>
      <body className={inter.className}>
        <PageTransition>
          {children}
        </PageTransition>
        <WhatsAppButton />
      </body>
    </html>
  )
}