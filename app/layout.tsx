import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './Providers/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'

const inter = Inter({ subsets: ['latin'] })
const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          {/* <Modal actionLabel='Submit' title='Title Prop' isOpen  /> */}
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
