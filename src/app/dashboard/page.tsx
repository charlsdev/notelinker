// import { authOptions } from '../api/auth/[...nextauth]/route'
// import { getServerSession } from 'next-auth/next'

'use client'

import LoaderUI from '@/components/Loader'
import { useSession } from 'next-auth/react'

export default function WelcomePage() {
   // const session = await getServerSession(authOptions as any)
   const { data: session, status } = useSession()

   // console.log(session)
   // console.log(status)

   if (status === 'loading') {
      return <LoaderUI />
   }

   return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-slate-600 dark:text-white">
         <div>
            <h1 className="text-accent text-[5rem] font-extrabold leading-loose">
               Hi {session?.user?.name}!
            </h1>
         </div>
         <div>
            <p>Protected client page</p>
            <button className="btn btn-primary">Toggle</button>
            <pre>{JSON.stringify(session, null, 2)}</pre>
         </div>
      </div>
   )
}
