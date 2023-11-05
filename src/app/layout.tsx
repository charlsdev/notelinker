import NextAuthProvider from '../context/session'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Navbar from '@/components/Navbar'
import ModeBtn from '@/components/ModeBtn'

const inter = Noto_Sans({ style: 'normal', weight: '300', preload: false })

export const metadata: Metadata = {
   title: "NoteDev'S",
   description: 'Aplicación de notas',
   keywords: 'notas, app, aplicacion, note, notes, noteapp, notedevs',
   authors: [
      {
         name: 'charlsdev',
         url: 'https://github.com/charlsdev',
      },
   ],
}

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html>
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/charlsdev.ico" />
         </head>

         <body className={inter.className}>
            <NextAuthProvider>
               <Toaster position="top-right" expand={true} richColors />

               <Navbar />
               <ModeBtn />

               {children}
            </NextAuthProvider>
         </body>
      </html>
   )
}
