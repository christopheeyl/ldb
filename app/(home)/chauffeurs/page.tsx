import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"
import { DashboardShell } from "@/components/shell"

export default async function IndexPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Chauffeurs" text="Créer et gérer les chauffeurs">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="graduationCap" />
          <EmptyPlaceholder.Title>Aucun chauffeur de créé</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Vous n&apos;avez aucun chauffeur de configuré.
          </EmptyPlaceholder.Description>
          <PostCreateButton variant="outline" />
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
