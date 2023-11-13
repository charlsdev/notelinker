'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

import { NextUIProvider } from '@nextui-org/react'

export default function NextAuthProvider({
   children,
}: {
   children: ReactNode
}) {
   return (
      <NextUIProvider>
         <SessionProvider>{children}</SessionProvider>
      </NextUIProvider>
   )
}
