import { Outlet, createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/app-shell";

export const Route = createFileRoute("/elder")({
  component: () => (
    <AppShell role="elder">
      <Outlet />
    </AppShell>
  ),
});
