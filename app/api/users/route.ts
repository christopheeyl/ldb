import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { userCreateSchema } from "@/lib/validations/user"

export async function GET() {
  try {
/*     const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    } */

    const users = await db.user.findMany()

    return new Response(JSON.stringify(users))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
/*     const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    } */

    const json = await req.json()
    const body = userCreateSchema.parse(json)

    const user = await db.user.create({
      data: {
        email: body.email,
        name: body.name,
        role: body.role,
      },
      select: {
        id: true,
      },
    })

    return new Response(JSON.stringify(user))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}