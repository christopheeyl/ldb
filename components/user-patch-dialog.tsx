"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { toast } from "@/components/ui/use-toast"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/react-hook-form/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { db } from "@/lib/db"

interface UserPatchDialogProps extends ButtonProps {
  params: {
    userId: string
  }
}

const FormSchema = z.object({
  id: z
  .string({
    required_error: "Saisissez un identifiant",
  })
  .email(),
  email: z
    .string({
      required_error: "Saisissez une adresse email",
    })
    .email(),
  name: z
    .string({
      required_error: "Complétez le champ",
    }),
  role: z
    .string({
      required_error: "Sélectionnez un role",
    }),
})

async function getUser(userId: string) {
  const response = await fetch(`/api/users/${userId}`, {
    method: "GET",
  })

  return response.json()
}

export function UserPatchDialog({
  className,
  variant,
  ...props
}: UserPatchDialogProps) {
  const router = useRouter()
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "1",
      email: "christophe.eyl@gmail.com",
      name: "CE",
      role: "ADMIN",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSaving(true)

    const response = await fetch(`/api/user/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        role: data.role
      }),
    })

    setIsSaving(false)

    if (!response?.ok) {
      return toast({
        title: "Erreur !",
        description: "L'utilisateur n'a pas été modifié. Merci de réessayer.",
        variant: "destructive",
      })
    }
    
    router.refresh()
    
    setOpen(false)

    return toast({
      description: "L'utilisateur a été modifié.",
    })
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className={cn(
            buttonVariants({ variant }),
            className
          )}
          {...props}
        >
          Nouveau
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Modifier un utilisateur</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Nom</Label>
                    <Input id="name" onChange={field.onChange} value={field.value} className="col-span-3" />                          
                  </div>
                  <div className="grid grid-cols-4 mx-2">
                    <div className="col-start-2 col-end-6">
                      <FormMessage />
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Email</Label>
                    <Input id="email" onChange={field.onChange} value={field.value} className="col-span-3" />                          
                  </div>
                  <div className="grid grid-cols-4 mx-2">
                    <div className="col-start-2 col-end-6">
                      <FormMessage />
                    </div>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Role</Label>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Sélectionner un role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="ADMIN">Admin</SelectItem>
                          <SelectItem value="CHAUFFEUR">Chauffeur</SelectItem>
                          <SelectItem value="CLIENT">Client</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 mx-2">
                    <div className="col-start-2 col-end-6">
                      <FormMessage />
                    </div>
                  </div>
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button 
                className={cn(
                  buttonVariants({ variant }),
                  {
                    "cursor-not-allowed opacity-60": isSaving,
                  },
                  className
                )}
                disabled={isSaving}
                type="submit"
              >
                {isSaving ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <></>
                )}
                Modifier
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
