import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  BrainCircuit,
  Gamepad2,
  Heart,
  Home,
  LineChart,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { Role } from "@/lib/types";
import { caregiver, elder } from "@/lib/demo-data";

type NavItem = { to: string; label: string; icon: typeof Home };

const elderNav: NavItem[] = [
  { to: "/elder", label: "Home", icon: Home },
  { to: "/elder/games", label: "Games", icon: Gamepad2 },
  { to: "/elder/reminders", label: "Reminders", icon: Bell },
  { to: "/elder/progress", label: "Progress", icon: LineChart },
];

const caregiverNav: NavItem[] = [
  { to: "/caregiver", label: "Overview", icon: Home },
  { to: "/caregiver/insights", label: "AI insights", icon: Sparkles },
  { to: "/caregiver/progress", label: "Progress", icon: LineChart },
  { to: "/caregiver/care-circle", label: "Care circle", icon: Users },
];

export function AppShell({ role, children }: { role: Role; children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const nav = role === "elder" ? elderNav : caregiverNav;
  const isElder = role === "elder";
  const person = isElder ? elder : caregiver;
  const subtitle = isElder ? "Your daily brain workout" : `Caring for ${elder.name}`;

  const isActive = (to: string) =>
    to === "/elder" || to === "/caregiver" ? pathname === to : pathname.startsWith(to);

  return (
    <div className={cn("min-h-screen bg-background pb-24 md:pb-0", isElder && "elder-scale")}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2 rounded-md" aria-label="SmritiPlay home">
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <BrainCircuit className="size-6" aria-hidden="true" />
            </span>
            <span className="hidden font-display text-xl font-semibold sm:block">SmritiPlay</span>
          </Link>

          <nav aria-label="Main" className="ml-auto hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-lg px-3 text-base font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary",
                  )}
                >
                  <item.icon className="size-5" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 md:ml-4">
            <Link
              to={isElder ? "/caregiver" : "/elder"}
              className="hidden min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium hover:bg-secondary sm:flex"
            >
              <Heart className="size-4" aria-hidden="true" />
              {isElder ? "Caregiver view" : "Elder view"}
            </Link>
            <div className="flex items-center gap-2">
              <span
                className="grid size-10 place-items-center rounded-full bg-accent font-semibold text-accent-foreground"
                aria-hidden="true"
              >
                {person.avatarInitials}
              </span>
              <span className="hidden text-sm leading-tight lg:block">
                <span className="block font-semibold">{person.name}</span>
                <span className="block text-muted-foreground">{subtitle}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        {children}
      </main>

      <nav
        aria-label="Main"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface md:hidden"
      >
        <ul className="mx-auto flex max-w-lg">
          {nav.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.to} className="flex-1">
                <Link
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-xs font-medium",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <item.icon className="size-6" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
