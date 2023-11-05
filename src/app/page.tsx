'use client'

import LoaderUI from '@/components/Loader'
import ModeBtn from '@/components/ModeBtn'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
// import Image from 'next/image'

export default function LoginPage() {
   const router = useRouter()
   const { data: session, status } = useSession()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()


   const onSubmit = handleSubmit(async data => {
      const resp = await signIn('credentials', {
         email: data.email,
         password: data.password,
         redirect: true,
         callbackUrl: '/dashboard',
      })

      if (resp?.error) {
         toast.error(resp.error)
      } else {
         toast.success('Bienvenido a NoteDev\'S 🎉')

         router.push('/dashboard')
         router.refresh()
      }
   })

   if (session) {
      router.push('/dashboard')
   }

   if (status === 'loading') {
      return <LoaderUI />
   }

   return (
      <>
         <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
               <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0">
                  <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                        Iniciar sesión
                     </h1>
                     <form className="space-y-4" onSubmit={onSubmit}>
                        <div>
                           <label
                              htmlFor="email"
                              className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                           >
                              Email
                           </label>

                           <input
                              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                              type="email"
                              id="email"
                              {...register('email', {
                                 required: {
                                    value: true,
                                    message: 'El email es requerido',
                                 },
                                 pattern: /^\S+@\S+$/i,
                              })}
                              placeholder="charlsdev@developers.dev"
                           />

                           {errors.email && (
                              <span className="text-xs font-normal text-red-500">
                                 {errors.email?.message as string}
                              </span>
                           )}
                        </div>

                        <div>
                           <label
                              htmlFor="password"
                              className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                           >
                              Contraseña
                           </label>

                           <input
                              className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                              type="password"
                              id="password"
                              {...register('password', {
                                 required: {
                                    value: true,
                                    message: 'La contraseña es requerida',
                                 },
                              })}
                              placeholder="••••••••"
                           />

                           {errors.password && (
                              <span className="text-xs font-normal text-red-500">
                                 {errors.password?.message as string}
                              </span>
                           )}
                        </div>

                        <div className="flex justify-end">
                           <div className="text-xs">
                              <Link
                                 className="font-bold text-gray-500 hover:underline dark:text-gray-300"
                                 href="/"
                              >
                                 Recuperar contraseña
                              </Link>
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
                           <Link
                              href="/register"
                              className="font-bold text-blue-600 hover:underline dark:text-blue-500"
                           >
                              Registrarse
                           </Link>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
