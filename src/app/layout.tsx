import NextAuthProvider from '@/context/session'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Toaster } from 'sonner'
import './globals.css'
import Provider from '@/context/Provider'

const inter = Noto_Sans({ style: 'normal', weight: '300', preload: false })

export const metadata: Metadata = {
   title: 'NoteLinker',
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
            <link rel="icon" href="/NoteLinker.ico" />
         </head>

         <body className={inter.className}>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
               <NextAuthProvider>
                  <Toaster position="top-right" expand={true} richColors />

                  <section className="app">
                     <Provider>
                        <Navbar />
                        {children}
                     </Provider>
                  </section>
               </NextAuthProvider>
            </div>
         </body>
      </html>
   )
}
