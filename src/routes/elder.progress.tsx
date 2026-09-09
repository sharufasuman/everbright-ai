import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/common/page-header";
import { ProgressOverview } from "@/components/common/progress-overview";

export const Route = createFileRoute("/elder/progress")({
  head: () => ({
    meta: [
      { title: "My progress — SmritiPlay" },
      {
        name: "description",
        content: "Weekly scores, skill areas and recent game sessions for Ravi Kumar.",
      },
      { property: "og:title", content: "My progress — SmritiPlay" },
      { property: "og:description", content: "Weekly scores, skill areas and recent sessions." },
    ],
  }),
  component: ElderProgress,
});

function ElderProgress() {
  return (
    <>
      <PageHeader
        title="My progress"
        description="A gentle look at how the week has gone. Every session counts."
      />
      <ProgressOverview />
    </>
  );
}
