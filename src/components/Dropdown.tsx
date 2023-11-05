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
      <div className="flex items-center md:order-2">
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
            className={`z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700 ${isDropdownOpen ? 'block' : 'hidden'}`}
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
   )
}

export default Dropdown
