import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"
import { DashboardShell } from "@/components/shell"

export default async function IndexPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Clients" text="Créer et gérer les clients">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="user" />
          <EmptyPlaceholder.Title>Aucun client de créé</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Vous n&apos;avez aucun client de configuré.
          </EmptyPlaceholder.Description>
          <PostCreateButton variant="outline" />
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
