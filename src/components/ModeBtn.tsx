'use client'

import { useEffect, useState } from 'react'

const ModeBtn = () => {
   const [mode, setMode] = useState('light')

   useEffect(() => {
      const storedMode = localStorage.getItem('theme')

      if (storedMode) {
         setMode(storedMode)
      }
   }, [])

   useEffect(() => {
      const className = 'dark'

      if (mode === 'dark') {
         document.documentElement.classList.add(className)
      } else {
         document.documentElement.classList.remove(className)
      }
   }, [mode])

   const changeTheme = () => {
      const newMode = mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newMode)

      setMode(newMode)
   }

   return (
      <div className="flex flex-row items-center gap-2 max-md:hidden cursor-pointer">
         {mode === 'light' ? (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 24 24"
               onClick={changeTheme}
            >
               <g fill="none">
                  <path
                     stroke="currentColor"
                     className=""
                     d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274l-.43-1.095ZM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273l-.157-.4Z"
                  />
                  <path
                     fill="currentColor"
                     d="m21.067 11.857l-.642-.388l.642.388Zm-8.924-8.924l-.388-.642l.388.642Zm-4.767 17.08a.75.75 0 1 0-.752 1.298l.752-1.298Zm-4.687-2.638a.75.75 0 1 0 1.298-.75l-1.298.75ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5Zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25v-1.5Zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-1.285-.776ZM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5h1.5ZM12 2.75a.384.384 0 0 1-.268-.118a.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026v1.5Zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082a.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606l1.284.776ZM12 21.25a9.204 9.204 0 0 1-4.624-1.237l-.752 1.298A10.704 10.704 0 0 0 12 22.75v-1.5Zm-8.013-4.625A9.204 9.204 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375l1.298-.75Z"
                  />
               </g>
            </svg>
         ) : (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 24 24"
               onClick={changeTheme}
            >
               <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07l-.392.393M5.322 18.678l-.393.393m14.141-.001l-.392-.393M5.322 5.322l-.393-.393M6.341 10A6 6 0 1 0 10 6.341"
               />
            </svg>
         )}
      </div>
   )
}

export default ModeBtn
