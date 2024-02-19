'use client'

import { signOut } from 'next-auth/react'
import { toast } from 'sonner'

const Logout = () => {
   const closeSession = () => {
      toast.info('Cerrando la sesión 👋')

      signOut({
         callbackUrl: '/',
         redirect: true,
      })
   }

   return <span onClick={closeSession}>Sign Out</span>
}

export default Logout
