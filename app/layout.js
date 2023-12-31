import AlertBanner from './components/Layouts/AlertBanner'
import Header from './components/Layouts/Header'
import ShippingBanner from './components/Layouts/ShippingBanner'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aesop | Formulations for Skin, Hair & Body | Aesop Hong Kong SAR',
  description: 'Aesop offers skin, hair, body care formulations, and home fragrances. Enjoy carbon neutral shipping on all Hong Kong SAR, China and Macau SAR, China orders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AlertBanner />
        <ShippingBanner />
        <Header />
        {children}
      </body>
    </html>
  )
}
