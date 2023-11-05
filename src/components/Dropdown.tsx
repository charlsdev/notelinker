'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logout from './Logout'

interface Session {
   session: {
      user: {
         name: string
         email: string
         image: string
      }
   }
}

const Dropdown = ({ session }: Session) => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen)
   }

   return (
      <>
         <button
            type="button"
            className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={toggleDropdown}
         >
            <span className="sr-only">Open user menu</span>
            <Image
               className="h-8 w-8 rounded-full"
               src={session?.user?.image}
               alt="UserProfile"
               width={32}
               height={32}
            />
         </button>
         <div
            className={`z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700 ${
               isDropdownOpen ? 'block' : 'hidden'
            }`}
            id="user-dropdown"
         >
            <div className="px-4 py-3">
               <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
               </span>
               <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                  name@flowbite.com
               </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
               <li>
                  <Link
                     href="/dashboard"
                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                     Dashboard
                  </Link>
               </li>
               <li>
                  <Link
                     href="/settings"
                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                     Settings
                  </Link>
               </li>
               <li>
                  <span className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                     <Logout />
                  </span>
               </li>
            </ul>
         </div>
      </>
   )
}

export default Dropdown
