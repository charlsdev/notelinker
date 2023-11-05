import { NextResponse } from "next/server";
import * as argon2 from 'argon2'
import prisma from "@/libs/db";
import daysjs from "dayjs";

export async function POST(req: Request, res: Response) {
   try {
      const data = await req.json()

      const userFound = await prisma.user.findUnique({
         where: {
            email: data.email,
         },
      });

      if (userFound) {
         return NextResponse.json({
            msg: "Email registrado 📧",
         }, {
            status: 400,
         })
      }

      const hashedPassword = await argon2.hash(data.password)
      const date = daysjs(`${data.year}-${data.month}-${data.day}`).toISOString()

      const newUser = await prisma.user.create({
         data: {
            email: data.email,
            name: data.name,
            lastname: data.lastname,
            terminos: data.terms,
            date: date,
            password: hashedPassword,
         },
         select: {
            id: true,
            email: true,
            name: true,
            lastname: true,
            date: true,
         },
      })

      return NextResponse.json({
         msg: "Usuario creado con éxito 🗝️",
         data: newUser
      }, { status: 201 });
   } catch (e) {
      console.error(e)

      return NextResponse.json({ msg: (e as Error).message }, { status: 500 });
   }
}