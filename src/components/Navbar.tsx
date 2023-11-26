'use client'

// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { NavItemsItf, Session } from '@/interface/interface'
import { useSession } from 'next-auth/react'
import ItemsUI from './Items'

function NavbarUI() {
   // const session = (await getServerSession(authOptions as any)) as Session
   const { data: session, status } = useSession()

   const menuItems: NavItemsItf[] = [
      {
         title: 'Inicio',
         link: '/dashboard',
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715c.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521Z" /><path strokeLinecap="round" d="M15 14h-3m0 0H9m3 0v-3m0 3v3" /></g></svg>,
         auth: true,
      }
   ]

   if (status === 'loading') {
      return <ItemsUI menuItems={menuItems} session={session} show={false} />
   }

   return (
      <ItemsUI menuItems={menuItems} session={session} show={true} />
   )
}

export default NavbarUI
