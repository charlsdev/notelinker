import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

   const url = req.nextUrl.clone();
   const pathname = url.pathname;

   // Lista de rutas que requieren autenticación
   const protectedRoutes = ['/dashboard'];

   // Verificar si la ruta actual está protegida y si el usuario no está autenticado
   if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
      url.pathname = '/';
      return NextResponse.redirect(url);
   }

   return NextResponse.next();
}

export const config = {
   matcher: [
      "/dashboard/:path*",
      // "/cursos/:path*"
   ]
}