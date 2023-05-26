import Image from "next/image";

import { DashboardNav } from "../../components/nav"
import { dashboardConfig } from "../../config/dashboard"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src={"/images/logo-small.png"} alt="chabe-logo" title="Logo Chabé" width="40" height="40"/>
            <span>Livre de Bord</span>
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[250px_1fr]">
        <aside className="hidden w-[250px] flex-col md:flex gap-8">
          <DashboardNav items={dashboardConfig.sidebarNav} />
          <DashboardNav items={dashboardConfig.footerSideBarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
