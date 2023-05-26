import { ProfileForm } from "./profile-form"

export const metadata = {
  title: "LDB - Paramètres",
  description: "Gérer les paramètres de votre comtpe.",
}

export default async function SettingsPage() {
  return (
    <div className="flex min-h-[400px] flex-col space-y-8 animate-in fade-in-50 m-1">
      <div className="flex items-center justify-between">
        <div className="grid">
          <h2 className="text-2xl font-bold tracking-tight">Profil</h2>
          <p className="text-muted-foreground">
            Gérer votre compte
          </p>
        </div>
      </div>        
      <ProfileForm />
    </div>
  )
}