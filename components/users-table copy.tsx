import { columns } from "@/components/users/components/columns"
import { DataTable } from "@/components/users/components/data-table"
import { users } from "./users/data/data"

export function UsersTable() {
  return <DataTable columns={columns} data={users} />
}