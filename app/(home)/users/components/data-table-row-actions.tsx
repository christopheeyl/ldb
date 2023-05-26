"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { Row } from "@tanstack/react-table"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserPatchDialog } from "@/components/user-patch-dialog"

async function deleteUser(userId: string) {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE",
  })

  if (!response?.ok) {
    console.log(response)
    toast({
      title: "Erreur",
      description: "L'utilisateur n'a pas été supprimé. Merci de réessayer",
      variant: "destructive",
    })

    return false
  }

  return true
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter()

  return (
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Ouvrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>
          <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Modifier
        </DropdownMenuItem>
        <DropdownMenuItem
            onClick={async (event) => {
              event.preventDefault()

              //TODO
              const deleted = await deleteUser(row.original.id)

              if (deleted) {
                router.refresh()

                return toast({
                  description: "L'utilisateur a été supprimé.",
                })
              }
            }}
          >
          <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Supprimer
        </DropdownMenuItem>
      </DropdownMenuContent>

    </DropdownMenu>
  </div>
  )
}
