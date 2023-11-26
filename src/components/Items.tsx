import Link from 'next/link'
import React, { useState } from 'react'
import { NavItemsItf, Session } from '@/interface/interface'
import ModeBtn from './ModeBtn'
import ProfileUI from './ProfileUI'

interface Props {
   menuItems: NavItemsItf[]
   session: Session | null
   show: boolean
}

const ItemsUI = ({ menuItems, session, show }: Props) => {
   const [open, setOpen] = useState(false)

   return (
      <div>
         <div className="mx-auto bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-slate-100">
            <div className="mx-auto flex w-5/6 items-center justify-between">
               <div className="my-5 flex items-center gap-16">
                  <div>
                     <Link
                        href="/"
                        className="flex items-center gap-1 font-bold text-gray-800"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           className="h-6 w-6 text-red-600"
                           viewBox="0 0 24 24"
                        >
                           <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 2v4m0 16V10m-6 2h2m-2 4h2M2 8h2m7.5-1.5h5m-5 3.5h5"
                           />
                        </svg>
                        <span className="ml-2 font-bold dark:text-slate-50">
                           NoteLinker
                        </span>
                     </Link>
                  </div>

                  <div className="hidden gap-8 lg:flex">
                     {
                        show && (
                           <>
                              {!session?.user ? (
                                 <>
                                    {menuItems.filter(itm => !itm.auth).map((menu, i) => (
                                       <Link
                                          href={menu?.link}
                                          key={i}
                                          className="group flex items-center gap-3.5 rounded-md p-2 text-sm font-medium hover:border-b-2 hover:border-red-600"
                                       >
                                          <div>{menu?.icon}</div>
                                          <h2
                                             style={{
                                                transitionDelay: `${i + 3}00ms`,
                                             }}
                                             className={`whitespace-pre duration-500`}
                                          >
                                             {menu?.title}
                                          </h2>
                                       </Link>
                                    ))}
                                 </>
                              ) : (
                                 <>
                                    {menuItems.filter(itm => itm.auth).map((menu, i) => (
                                       <Link
                                          href={menu?.link}
                                          key={i}
                                          className="group flex items-center gap-3.5 rounded-md p-2 text-sm font-medium hover:border-b-2 hover:border-red-600"
                                       >
                                          <div>{menu?.icon}</div>
                                          <h2
                                             style={{
                                                transitionDelay: `${i + 3}00ms`,
                                             }}
                                             className={`whitespace-pre duration-500`}
                                          >
                                             {menu?.title}
                                          </h2>
                                       </Link>
                                    ))}
                                 </>
                              )}
                           </>
                        )
                     }
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="items-center gap-10 md:flex">
                     <ModeBtn />

                     <div>
                        {
                           show && (
                              <>
                                 {!session?.user ? (
                                    <Link
                                       href="/register"
                                       className="group flex items-center justify-center gap-3.5 rounded-md p-2 text-sm font-medium"
                                    >
                                       <div>
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="20"
                                             height="20"
                                             viewBox="0 0 24 24"
                                          >
                                             <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                             >
                                                <path d="M8 16c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862M8 8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121c-.768.769-1.946.865-4.121.877M3 9.5v5c0 2.357 0 3.535.732 4.268c.732.732 1.911.732 4.268.732M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5" />
                                                <path
                                                   strokeLinejoin="round"
                                                   d="M6 12h9m0 0l-2.5 2.5M15 12l-2.5-2.5"
                                                />
                                             </g>
                                          </svg>
                                       </div>
                                       <h2 className="font-semibold">Sign In</h2>
                                    </Link>
                                 ) : (
                                    <ProfileUI session={session} />
                                 )}
                              </>
                           )
                        }
                     </div>
                  </div>

                  {/* Mobile navigation toggle */}
                  <div className="flex items-center lg:hidden">
                     <button onClick={() => setOpen(!open)}>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                        >
                           <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="1.5"
                           >
                              <path
                                 strokeLinejoin="round"
                                 d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"
                              />
                              <path d="M11 14H3m8 4H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25" />
                           </g>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* mobile navigation */}
         <div
            className={`fixed z-40 flex w-full origin-top flex-col gap-12 overflow-hidden bg-gray-100 duration-700 dark:bg-gray-900 dark:text-slate-100 lg:hidden ${!open ? 'h-0' : 'h-full'
               }`}
         >
            <div className="p-5">
               <div className="flex flex-col gap-8 font-bold tracking-wider">
                  {menuItems?.map((menu, i) => (
                     <Link
                        href={menu?.link}
                        key={i}
                        className="group flex items-center gap-3.5 rounded-md p-2 text-sm font-medium"
                     >
                        <div>{menu?.icon}</div>
                        <h2
                           style={{
                              transitionDelay: `${i + 3}00ms`,
                           }}
                           className={`whitespace-pre duration-500 ${!open &&
                              'translate-x-28 overflow-hidden opacity-0'
                              }`}
                        >
                           {menu?.title}
                        </h2>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ItemsUI
