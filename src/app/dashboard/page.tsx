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
         <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-2 border-b-2 border-zinc-700 dark:border-zinc-400">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            <Button
               size="sm"
               onPress={onOpen}
               // color="danger"
               className="px-5 font-bold text-white bg-red-600 rounded-md hover:bg-red-700 dark:bg-green-600 dark:hover:bg-green-700"
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
               Añadir
            </Button>
         </div>

         <div className="container mx-auto px-4 md:px-2 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="bg-white dark:bg-gray-700 shadow rounded-md p-4">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center">
                        <div className="flex flex-col">
                           <span className="text-xs font-medium text-gray-500 uppercase">
                              Total
                           </span>
                           <span className="text-lg font-bold text-gray-700 dark:text-white">
                              $ 46,760.89
                           </span>
                        </div>
                     </div>
                     <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="15"
                           height="15"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="1.5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
               <div className="bg-white dark:bg-gray-700 shadow rounded-md p-4">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center">
                        <div className="flex flex-col">
                           <span className="text-xs font-medium text-gray-500 uppercase">
                              Total
                           </span>
                           <span className="text-lg font-bold text-gray-700 dark:text-white">
                              $ 46,760.89
                           </span>
                        </div>
                     </div>
                     <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="15"
                           height="15"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="1.5"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <ModalAddUI isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
      </>
   )
}
