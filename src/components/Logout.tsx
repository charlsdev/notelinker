'use client'

import { signOut } from 'next-auth/react'
import { toast } from 'sonner'

const Logout = () => {
   const closeSession = () => {
      toast.success('Cerrando la sesión 👋')

      signOut({
         callbackUrl: '/',
         redirect: true
      })
   }

   return <span onClick={closeSession}>Logout</span>
}

export default Logout
