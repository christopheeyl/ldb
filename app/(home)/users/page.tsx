import { Metadata } from "next"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserCreateDialog } from "@/components/user-create-dialog"
import { db } from "@/lib/db"
import { UserPatchDialog } from "@/components/user-patch-dialog"

export const metadata: Metadata = {
  title: "LDB - Utilisateurs",
  description: "Gérer les utilisateurs du livre de bord.",
}

async function getUsers() {
  return await db.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      loggedAt: true,
    }
  })
}

export default async function UserPage() {
  const users = await getUsers()

  return (
    <div className="flex min-h-[400px] flex-col space-y-8 animate-in fade-in-50 m-1">
      <div className="flex items-center justify-between">
        <div className="grid">
          <h2 className="text-2xl font-bold tracking-tight">Utilisateurs</h2>
          <p className="text-muted-foreground">
            Gérer et créer des utilisateurs
          </p>
        </div>
        <UserCreateDialog />
      </div>
      <DataTable data={users} columns={columns} />
    </div>
  )
}
