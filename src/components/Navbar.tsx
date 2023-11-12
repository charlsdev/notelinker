import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Dropdown from './Dropdown'
import ItemsUI from './Items'
import { Session } from '@/interface/interface'

async function NavbarUI() {
   const session = (await getServerSession(authOptions as any)) as Session

   const menuItems = [
      'Profile',
      'Dashboard',
      'Activity',
      'Analytics',
      'System',
      'Deployments',
      'My Settings',
      'Team Settings',
      'Help & Feedback',
      'Log Out',
   ]

   return (
      <ItemsUI menuItems={menuItems} session={session} />

      // <nav className="flex items-center justify-between bg-gray-950 px-24 py-3 text-white">
      //    <h1 className="text-xl font-bold">NextAuth</h1>

      //    <ul className="flex gap-x-2">
      //       {!session?.user ? (
      //          <>
      //             <li>
      //                <Link href="/">Home</Link>
      //             </li>
      //             <li>
      //                <Link href="/">Login</Link>
      //             </li>
      //             <li>
      //                <Link href="/register">Register</Link>
      //             </li>
      //          </>
      //       ) : (
      //          <>
      //             <li>
      //                <Link href="/dashboard">Dashboard</Link>
      //             </li>
      //             <li className='cursor-pointer'>
      //                <Logout />
      //             </li>
      //          </>
      //       )}
      //    </ul>
      // </nav>
   )
}

export default NavbarUI
