import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "LDB - Contrats",
  description: "Gérer les contrats du livre de bord.",
}

export default async function IndexPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Contrats" text="Créer et gérer les contrats">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="scroll" />
          <EmptyPlaceholder.Title>Aucun contrat de créé</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Vous n&apos;avez aucun contrat de configuré.
          </EmptyPlaceholder.Description>
          <PostCreateButton variant="outline" />
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
