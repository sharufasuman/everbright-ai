import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { aiInsights, elder } from "@/lib/demo-data";

export const Route = createFileRoute("/caregiver/insights")({
  head: () => ({
    meta: [
      { title: "AI insights — SmritiPlay caregiver" },
      {
        name: "description",
        content:
          "AI-generated patterns and practical suggestions drawn from game sessions and reminder history.",
      },
      { property: "og:title", content: "AI insights — SmritiPlay caregiver" },
      {
        property: "og:description",
        content: "Patterns and practical suggestions from game and reminder history.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHeader
        title="AI insights"
        description={`Patterns found in ${elder.name}'s recent sessions, with suggestions you can act on.`}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {aiInsights.map((i) => (
          <Card key={i.id} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-start gap-2 font-display text-lg">
                <Sparkles className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                {i.headline}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{i.body}</p>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">Confidence</span>
                  <span className="text-muted-foreground">{Math.round(i.confidence * 100)}%</span>
                </div>
                <Progress
                  value={i.confidence * 100}
                  aria-label={`Confidence ${Math.round(i.confidence * 100)} percent`}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="font-display text-xl">Integration note</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-muted-foreground">
          <p>
            These insights are generated from mock session data today. The insight engine reads
            game sessions, reminder adherence and skill-area scores, so swapping in the live model
            needs no change to this screen.
          </p>
          <Badge variant="secondary">Mock data · ready for the AI module</Badge>
        </CardContent>
      </Card>
    </>
  );
}
