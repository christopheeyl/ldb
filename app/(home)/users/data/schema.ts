import { z } from "zod"
import { userSchema } from "@/lib/validations/user"

export type User = z.infer<typeof userSchema>