import Link from 'next/link'
import Image from 'next/image'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Dropdown from './Dropdown'

interface Session {
   user: {
      name: string
      email: string
      image: string
   }
}

async function Navbar() {
   const session = (await getServerSession(authOptions as any)) as Session

   return (
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

      <nav className="border-gray-200 bg-white dark:bg-gray-900">
         <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <Link href="https://flowbite.com/" className="flex items-center">
               <Image
                  src="/next.svg"
                  alt="NoteDev'S"
                  className="mr-3 h-8"
                  width={32}
                  height={32}
               />
               <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Flowbite
               </span>
            </Link>

            {!session?.user && (
               <>
                  <div
                     className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                     id="navbar-user"
                  >
                     <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                        <li>
                           <Link
                              href="/register"
                              className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                           >
                              Registrarse
                           </Link>
                        </li>
                     </ul>
                  </div>
               </>
            )}

            <div className="flex items-center md:order-2">
               {session?.user && <Dropdown session={session} />}

               <button
                  data-collapse-toggle="navbar-user"
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                  aria-controls="navbar-user"
                  aria-expanded="false"
               >
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="h-5 w-5"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 17 14"
                  >
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                     />
                  </svg>
               </button>
            </div>

            <div
               className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
               id="navbar-user"
            ></div>
         </div>
      </nav>
   )
}

export default Navbar
