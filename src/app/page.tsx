'use client'

import { signIn, useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

// const LoaderUI = dynamic(() => import('@/components/Loader'), { ssr: false })

export default function LoginPage() {
   const router = useRouter()
   const [disabled, setDisabled] = useState(false)
   const { data: session, status } = useSession()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const onSubmit = handleSubmit(async data => {
      setDisabled(true)

      try {
         const resp = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
         })

         if (resp?.error) {
            toast.warning(resp.error)
         } else {
            toast.success('Bienvenido a NoteLinker 🎉')

            router.push('/dashboard')
         }
      } catch (e) {
         console.error(e)

         toast.error('Error del server. Intentelo más luego x_x 🤯')
      } finally {
         setDisabled(false)
      }
   })

   //    return <LoaderUI />
   useEffect(() => {
      if (status === 'loading') return

      if (session) {
         router.push('/dashboard')
      }
   }, [session, status, router])

   return (
      <>
         <div className="mx-auto flex min-h-screen flex-1 items-center justify-center px-6 lg:py-0">
            <div className="my-6 w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md">
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
                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
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
                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
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
                        className="w-full rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                        disabled={disabled}
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
      </>
   )
}
