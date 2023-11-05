"use client"

import { useEffect, useState } from 'react'

const ModeBtn = () => {
   const [mode, setMode] = useState('light')

   const changeTheme = () => {
      const storage = window.localStorage

      storage.setItem('theme', mode === 'light' ? 'dark' : 'light')
      setMode(mode === 'light' ? 'dark' : 'light')

      if (mode === 'light') {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }

   useEffect(() => {
      if (localStorage.theme === 'dark') {
         setMode('dark')
         document.documentElement.classList.add('dark')
      } else {
         setMode('light')
         document.documentElement.classList.remove('dark')
      }
   }, [])

   return (
      <button
         className="fixed bottom-4 right-4 rounded-full bg-slate-900 p-3 text-white shadow-lg transition duration-300 ease-in-out hover:bg-slate-600 dark:bg-slate-50 dark:text-black dark:hover:bg-slate-300"
         onClick={changeTheme}
      >
         {mode === 'light' ? (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="h-6 w-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
               />
            </svg>
         ) : (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="h-6 w-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
               />
            </svg>
         )}
      </button>
   )
}

export default ModeBtn