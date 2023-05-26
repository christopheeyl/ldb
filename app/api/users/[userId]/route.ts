import * as z from "zod"

import { db } from "@/lib/db"
import { userPatchSchema } from "@/lib/validations/user"

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
})

export async function GET(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
/*     const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    } */
    
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    // Get the user.
    const user = await db.user.findFirst({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        loggedAt: true,
      },
      where: {
        id: params.userId as string,
      }
    })

    return new Response(JSON.stringify(user))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    // Delete the user.
    await db.user.delete({
      where: {
        id: params.userId as string,
      },
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context)

    // Get the request body and validate it.
    const json = await req.json()
    const body = userPatchSchema.parse(json)

    // Update the post.
    // TODO: Implement sanitization for content.
    await db.user.update({
      where: {
        id: params.userId,
      },
      data: {
        email: body.email,
        name: body.name,
        role: body.role,
      },
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}