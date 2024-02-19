import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/libs/db'
import * as argon2 from 'argon2'

interface SessionItf {
   id: number
   name: string
   lastname: string
   email: string
   image: string
   date: Date
}

interface CustomSession {
   user: SessionItf
   session: {
      user: SessionItf
   }
   token: SessionItf
}

export const authOptions = {
   pages: {
      signIn: '/',
   },
   providers: [
      CredentialsProvider({
         name: 'Credentials',
         credentials: {
            email: {
               label: 'Correo',
               type: 'text',
               placeholder: 'charsldev@developers.dev',
            },
            password: {
               label: 'Contraseña',
               type: 'password',
               placeholder: '**********',
            },
         },
         async authorize(credentials /*, req */) {
            const userFound = await prisma.user.findUnique({
               where: {
                  email: credentials?.email as string,
               },
            })

            if (!userFound) throw new Error('Email o contraseña incorrectos 🤯')

            const matchPassword = await argon2.verify(
               userFound.password,
               credentials?.password as string,
            )

            if (!matchPassword)
               throw new Error('Email o contraseña incorrectos 🤯')

            return {
               id: userFound.id,
               email: userFound.email,
               name: userFound.name,
               lastname: userFound.lastname,
               date: userFound.date,
            }
         },
      }),
   ],
   callbacks: {
      async session({ token, session }: CustomSession) {
         if (token) {
            session.user.id = token.id
            session.user.name = token.name
            session.user.lastname = token.lastname
            session.user.email = token.email
            session.user.image = token.image
         }

         return session
      },
      async jwt({ token, user: usuario }: CustomSession) {
         const dbUser = await prisma.user.findFirst({
            where: {
               email: token.email,
            },
         })

         if (!dbUser) {
            if (usuario) {
               token.id = usuario?.id
            }

            return token
         }

         return {
            id: dbUser.id,
            name: dbUser.name,
            lastname: dbUser.lastname,
            email: dbUser.email,
            image: dbUser.profile,
            date: dbUser.date,
         }
      },
   },
   session: {
      strategy: 'jwt',
   },
}
