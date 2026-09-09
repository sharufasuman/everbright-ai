import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/common/page-header";
import { ReminderList } from "@/components/elder/reminder-list";
import { reminders } from "@/lib/demo-data";

export const Route = createFileRoute("/elder/reminders")({
  head: () => ({
    meta: [
      { title: "Reminders — SmritiPlay" },
      {
        name: "description",
        content: "Medicines, activities and appointments for today, in one simple list.",
      },
      { property: "og:title", content: "Reminders — SmritiPlay" },
      {
        property: "og:description",
        content: "Medicines, activities and appointments for today.",
      },
    ],
  }),
  component: RemindersPage,
});

function RemindersPage() {
  return (
    <>
      <PageHeader
        title="Reminders"
        description="Tap 'Mark done' as you finish each one. Your caregiver can see this too."
      />
      <ReminderList initial={reminders} title="Today" />
    </>
  );
}
