import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/common/page-header";
import { ProgressOverview } from "@/components/common/progress-overview";
import { elder } from "@/lib/demo-data";

export const Route = createFileRoute("/caregiver/progress")({
  head: () => ({
    meta: [
      { title: "Progress report — SmritiPlay caregiver" },
      {
        name: "description",
        content: "Detailed weekly cognitive progress report for the person you care for.",
      },
      { property: "og:title", content: "Progress report — SmritiPlay caregiver" },
      { property: "og:description", content: "Detailed weekly cognitive progress report." },
    ],
  }),
  component: CaregiverProgress,
});

function CaregiverProgress() {
  return (
    <>
      <PageHeader
        title="Progress report"
        description={`Session-level detail for ${elder.name}, ready to share with the clinic.`}
      />
      <ProgressOverview />
    </>
  );
}
