import * as z from "zod"

export const userFilterSchema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().min(3).max(32),
})

export const userNameSchema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().min(3).max(32),
})

export const userPatchSchema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().min(3).max(32),
  role: z.enum(["ADMIN", "CLIENT", "CHAUFFEUR"]),
})

export const userCreateSchema = z.object({
  email: z.string(),
  name: z.string(),
  role: z.enum(["ADMIN", "CLIENT", "CHAUFFEUR"]),
})

export const userSchema = z.object({
  email: z.string(),
  name: z.string(),
  role: z.enum(["ADMIN", "CLIENT", "CHAUFFEUR"]),
  loggedAt: z.date(),
})