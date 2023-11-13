'use client'

import ModalAddUI from '@/components/AddModal'
import { Button, useDisclosure } from '@nextui-org/react'
// import { authOptions } from '../api/auth/[...nextauth]/route'
// import { getServerSession } from 'next-auth/next'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'

const LoaderUI = dynamic(() => import('@/components/Loader'), { ssr: false })

export default function WelcomePage() {
   // const session = await getServerSession(authOptions as any)
   const { data: session, status } = useSession()

   const { isOpen, onOpen, onOpenChange } = useDisclosure()

   if (status === 'loading') {
      return <LoaderUI />
   }

   return (
      <>
         <div className="min-h-screen bg-gray-50 text-slate-600 dark:bg-gray-800 dark:text-white">
            <div className="mt-1 border-b-2 border-zinc-800">
               <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-2">
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <Button
                     size="sm"
                     onPress={onOpen}
                     color="warning"
                     className="px-4 font-bold"
                     startContent={
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="15"
                           height="15"
                           viewBox="0 0 24 24"
                        >
                           <g fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592c-.146.188-.271.39-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558c-.188.146-.39.271-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938" />
                              <path
                                 strokeLinecap="round"
                                 d="M8 13h2.5M8 9h6.5M8 17h1.5M3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172M21 14c0 3.771 0 5.657-1.172 6.828m-15.656 0C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172m0 0c.944-.943 1.127-2.348 1.163-4.828"
                              />
                           </g>
                        </svg>
                     }
                  >
                     Nuevo
                  </Button>
               </div>

               <div className="container mx-auto px-4 md:px-2">

               </div>
            </div>
         </div>

         <ModalAddUI isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
      </>
   )
}
