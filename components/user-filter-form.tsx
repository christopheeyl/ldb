"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "@prisma/client"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { userFilterSchema } from "@/lib/validations/user"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserFilterFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "email">
}

type FormData = z.infer<typeof userFilterSchema>

export function UserFilterForm({ user, className, ...props }: UserFilterFormProps) {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userFilterSchema),
    defaultValues: {
      email: user?.email || "",
    },
  })

  return (
    <div>
      <div className="grid gap-1">
        <Label className="sr-only" htmlFor="email">
          Adresse email
        </Label>
        <Input
          id="email"
          className="w-[300px]"
          size={32}
          {...register("email")}
        />
        {errors?.email && (
          <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={cn(buttonVariants(), className)}
      >
        <span>Admin</span>
      </button>

      <button
        type="submit"
        className={cn(buttonVariants(), className)}
      >
        <span>Chauffeur</span>
      </button>

      <button
        type="submit"
        className={cn(buttonVariants(), className)}
      >
        <span>Client</span>
      </button>      
    </div>
  )
}
