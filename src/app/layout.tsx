import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

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

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/charlsdev.ico" />
         </head>

         <body className={inter.className}>
            <Toaster position="top-right" expand={true} richColors />
            {children}
         </body>
      </html>
   )
}
