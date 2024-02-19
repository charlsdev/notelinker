import { authOptions } from '@/libs/authOptions'
import NextAuth, { AuthOptions } from 'next-auth'

const handler = NextAuth(authOptions as never as AuthOptions)

export { handler as GET, handler as POST }
