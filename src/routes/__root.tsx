import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import clinicRoom from "@/assets/clinic-room.jpg";
import clinicLobby from "@/assets/clinic-lobby.jpg";
import clinicHall from "@/assets/clinic-hall.jpg";
import clinicSterilization from "@/assets/clinic-sterilization.jpg";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Just Smile Dental Care & Maxillofacial Clinic — Surat" },
      {
        name: "description",
        content:
          "Just Smile Dental Care & Maxillofacial Clinic in Dindoli, Surat. Painless dental treatments, implants, smile makeover, root canal, braces & kids dentistry by Dr. Nikunj Patel.",
      },
      { name: "author", content: "Just Smile Dental Care & Maxillofacial Clinic" },
      { name: "theme-color", content: "#0ea5e9" },
      { property: "og:title", content: "Just Smile Dental Care & Maxillofacial Clinic — Surat" },
      {
        property: "og:description",
        content:
          "Painless dental treatments, implants, smile makeover & more in Dindoli, Surat. Book your appointment today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Just Smile Dental Care & Maxillofacial Clinic — Surat" },
      {
        name: "twitter:description",
        content:
          "Painless dental treatments, implants, smile makeover & more in Dindoli, Surat. Book your appointment today.",
      },
      { name: "twitter:image", content: logo },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logo },
      { rel: "apple-touch-icon", href: logo },
      { rel: "preload", as: "image", href: heroBg, fetchpriority: "high" },
      { rel: "preload", as: "image", href: logo },
      { rel: "preload", as: "image", href: clinicRoom },
      { rel: "preload", as: "image", href: clinicLobby },
      { rel: "preload", as: "image", href: clinicHall },
      { rel: "preload", as: "image", href: clinicSterilization },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
