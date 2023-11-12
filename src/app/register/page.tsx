'use client'

import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const months = [
   'Enero',
   'Febrero',
   'Marzo',
   'Abril',
   'Mayo',
   'Junio',
   'Julio',
   'Agosto',
   'Septiembre',
   'Octubre',
   'Noviembre',
   'Diciembre',
]

interface IFormInput {
   name: string
   lastname: string
   day: string
   month: string
   year: string
   email: string
   password: string
   confPass: string
   terms: boolean
}

const LoaderUI = dynamic(() => import('@/components/Loader'), { ssr: false })

export default function RegisterPage() {
   const router = useRouter()
   const { data: session, status } = useSession()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IFormInput>()

   const [disabled, setDisabled] = useState(false)

   const onSubmit = handleSubmit(async (data: IFormInput) => {
      if (data.password !== data.confPass) {
         toast.info('Las contraseñas no coinciden 😕')
         return
      }

      setDisabled(true)

      try {
         const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
               'Content-Type': 'application/json',
            },
         })

         if (res.ok && res.status === 201) {
            toast.success('Cuenta creada exitosamente 🎉')
            router.replace('/')
         }

         if (res.status === 400) {
            toast.warning('El email ya está en uso 😕')
         }
      } catch (e) {
         console.error(e)

         toast.error('Error del server. Intentelo más luego x_x 🤯')
      } finally {
         setDisabled(false)
      }
   })



   if (status === 'loading') {
      return <LoaderUI />
   }

   if (session) {
      router.push('/dashboard')
      return
   }

   return (
      <>
         <div className="mx-auto flex min-h-screen items-center justify-center px-6 lg:py-0">
            <div className="my-6 w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md">
               <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                     Crear cuenta
                  </h1>

                  <form className="space-y-4" onSubmit={onSubmit}>
                     <div className="mb-2 grid gap-4 md:grid-cols-2">
                        <div>
                           <label
                              htmlFor="name"
                              className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                           >
                              Nombres
                           </label>
                           <input
                              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                              type="text"
                              id="name"
                              placeholder="Carlos"
                              {...register('name', {
                                 required: {
                                    value: true,
                                    message: 'El nombre es requerido',
                                 },
                                 maxLength: {
                                    value: 20,
                                    message:
                                       'El nombre debe tener menos de 20 caracteres',
                                 },
                                 minLength: {
                                    value: 3,
                                    message:
                                       'El nombre debe tener al menos 3 caracteres',
                                 },
                              })}
                           />
                           {errors.name && (
                              <span className="text-xs font-normal text-red-500">
                                 {errors.name?.message as string}
                              </span>
                           )}
                        </div>

                        <div>
                           <label
                              htmlFor="lastname"
                              className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                           >
                              Apellidos
                           </label>
                           <input
                              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                              type="text"
                              id="lastname"
                              {...register('lastname', {
                                 required: {
                                    value: true,
                                    message: 'El apellido es requerido',
                                 },
                                 maxLength: {
                                    value: 20,
                                    message:
                                       'El apellido debe tener menos de 20 caracteres',
                                 },
                                 minLength: {
                                    value: 3,
                                    message:
                                       'El apellido debe tener al menos 3 caracteres',
                                 },
                              })}
                              placeholder="Villacreses"
                           />
                           {errors.lastname && (
                              <span className="text-xs font-normal text-red-500">
                                 {errors.lastname?.message as string}
                              </span>
                           )}
                        </div>
                     </div>

                     <div>
                        <label className="mb-2 block text-sm font-bold text-gray-900 dark:text-white">
                           Fecha de Nacimiento
                        </label>
                        <div className="mb-2 grid grid-cols-3 gap-2">
                           <div>
                              <select
                                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                 id="day"
                                 {...register('day', {
                                    required: {
                                       value: true,
                                       message: 'El día es requerido',
                                    },
                                 })}
                              >
                                 <option value="">Día</option>
                                 {[...Array(31)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                       {i + 1}
                                    </option>
                                 ))}
                              </select>
                              {errors.day && (
                                 <span className="text-xs font-normal text-red-500">
                                    {errors.day?.message as string}
                                 </span>
                              )}
                           </div>

                           <div>
                              <select
                                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                 id="month"
                                 {...register('month', {
                                    required: {
                                       value: true,
                                       message: 'El mes es requerido',
                                    },
                                 })}
                              >
                                 <option value="">Mes</option>
                                 {[...Array(12)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                       {months[i]}
                                    </option>
                                 ))}
                              </select>
                              {errors.month && (
                                 <span className="text-xs font-normal text-red-500">
                                    {errors.month?.message as string}
                                 </span>
                              )}
                           </div>

                           <div>
                              <select
                                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                 id="year"
                                 {...register('year', {
                                    required: {
                                       value: true,
                                       message: 'El año es requerido',
                                    },
                                 })}
                              >
                                 <option value="">Año</option>
                                 {[...Array(65)].map((_, i) => (
                                    <option
                                       key={i}
                                       value={new Date().getFullYear() - i}
                                    >
                                       {new Date().getFullYear() - i}
                                    </option>
                                 ))}
                              </select>
                              {errors.year && (
                                 <span className="text-xs font-normal text-red-500">
                                    {errors.year?.message as string}
                                 </span>
                              )}
                           </div>
                        </div>
                     </div>

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

                     <div className="mb-2 grid gap-6 md:grid-cols-2">
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
                                 minLength: {
                                    value: 8,
                                    message:
                                       'La contraseña debe tener al menos 8 caracteres',
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
                        <div>
                           <label
                              htmlFor="confPass"
                              className="mb-2 block text-sm font-bold text-gray-900 dark:text-white"
                           >
                              Confirmar contraseña
                           </label>
                           <input
                              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                              type="password"
                              id="confPass"
                              {...register('confPass', {
                                 required: {
                                    value: true,
                                    message: 'La contraseña es requerida',
                                 },
                                 minLength: {
                                    value: 8,
                                    message:
                                       'La contraseña debe tener al menos 8 caracteres',
                                 },
                              })}
                              placeholder="••••••••"
                           />
                           {errors.confPass && (
                              <span className="text-xs font-normal text-red-500">
                                 {errors.confPass?.message as string}
                              </span>
                           )}
                        </div>
                     </div>

                     <div className="flex items-start">
                        <div className="flex h-5 items-center">
                           <input
                              className="h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 cursor-pointer"
                              id="terms"
                              type="checkbox"
                              {...register('terms', {
                                 required: {
                                    value: true,
                                    message:
                                       'Debes aceptar los términos y condiciones',
                                 },
                              })}
                           />
                        </div>
                        <div className="ml-3 text-sm">
                           <label
                              htmlFor="terms"
                              className="font-light text-gray-500 dark:text-gray-300"
                           >
                              Acepto los{' '}
                              <Link
                                 className="font-bold text-blue-700 hover:underline dark:text-blue-500"
                                 href="/terms"
                              >
                                 Términos y Condiciones
                              </Link>
                           </label>
                        </div>
                     </div>
                     {errors.terms && (
                        <span className="text-xs font-normal text-red-500">
                           {errors.terms?.message as string}
                        </span>
                     )}

                     <button
                        className="w-full rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                        type="submit"
                        disabled={disabled}
                     >
                        Crear cuenta
                     </button>

                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Ya tienes una cuenta?{' '}
                        <Link
                           href="/"
                           className="font-bold text-blue-600 hover:underline dark:text-blue-500"
                        >
                           Iniciar sesion
                        </Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}
