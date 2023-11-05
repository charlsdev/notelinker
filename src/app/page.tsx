import ModeBtn from '@/components/ModeBtn'
// import Image from 'next/image'

export default function Home() {
   return (
      <>
         <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <ModeBtn />

            <div className="mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
               {/* <a
                  href="#"
                  className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
               >
                  <Image
                     src="/next.svg"
                     alt="NoteDev'S"
                     width={32}
                     height={32}
                  />
               </a> */}
               <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
                  <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                        Iniciar sesión
                     </h1>
                     <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                           <label
                              htmlFor="email"
                              className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                           >
                              Email
                           </label>
                           <input
                              type="email"
                              name="email"
                              id="email"
                              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                              placeholder="name@developers.dev"
                              required
                           />
                        </div>
                        <div>
                           <label
                              htmlFor="password"
                              className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                           >
                              Contraseña
                           </label>
                           <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="••••••••"
                              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                              required
                           />
                        </div>

                        <div className="flex justify-end">
                           <div className="text-xs">
                              <a
                                 className="font-bold text-gray-500 hover:underline dark:text-gray-300"
                                 href="/"
                              >
                                 Recuperar contraseña
                              </a>
                           </div>
                        </div>

                        <button
                           type="submit"
                           className="w-full rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                        >
                           Iniciar sesión
                        </button>

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                           No tienes una cuenta?{' '}
                           <a
                              href="/register"
                              className="font-bold text-blue-600 hover:underline dark:text-blue-500"
                           >
                              Registrarse
                           </a>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
