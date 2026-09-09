import { Outlet, createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/app-shell";

export const Route = createFileRoute("/caregiver")({
  component: () => (
    <AppShell role="caregiver">
      <Outlet />
    </AppShell>
  ),
});
