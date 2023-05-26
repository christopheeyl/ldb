import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "layoutDashboard",
    },
    {
      title: "Statut des services",
      href: "/statutservices",
      icon: "barChart4",
    },
    {
      title: "Vue chauffeur",
      href: "/vuechauffeur",
      icon: "eye",
    },
    {
      title: "Décompte mensuel",
      href: "/decompte",
      icon: "calendarDays",
    },
    {
      title: "Transferts techniques",
      href: "/transferts",
      icon: "arrowLeftRight",
    },
    {
      title: "Kilométrages",
      href: "/kilometrages",
      icon: "fuel",
    },
    {
      title: "Synthèse hebdomadaire",
      href: "/synthese",
      icon: "pencil",
    },
    {
      title: "Export mensuel facturation",
      href: "/facturation",
      icon: "euro",
    },
    {
      title: "PDF chauffeurs",
      href: "/pdfchauffeurs",
      icon: "fileDownload",
    },
    {
      title: "Contrats",
      href: "/contrats",
      icon: "scroll",
    },
    {
      title: "Utilisateurs",
      href: "/users",
      icon: "users",
    },
    {
      title: "Paramètres",
      href: "/settings",
      icon: "settings",
    }
  ],  
  footerSideBarNav: [
    {
      title: "Se déconnecter",
      href: "/logout",
      icon: "logout",
    },
  ],
}
