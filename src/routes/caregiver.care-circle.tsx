import { createFileRoute } from "@tanstack/react-router";
import { Phone, Stethoscope, UserRound } from "lucide-react";

import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caregiver, elder, memoryItems } from "@/lib/demo-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/caregiver/care-circle")({
  head: () => ({
    meta: [
      { title: "Care circle — SmritiPlay caregiver" },
      {
        name: "description",
        content: "The people around Ravi Kumar: family, caregiver and clinical contacts.",
      },
      { property: "og:title", content: "Care circle — SmritiPlay caregiver" },
      { property: "og:description", content: "Family, caregiver and clinical contacts." },
    ],
  }),
  component: CareCircle,
});

function CareCircle() {
  return (
    <>
      <PageHeader
        title="Care circle"
        description="Who is involved in daily care, and the profile everything is built around."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-xl">
              <UserRound className="size-5 text-primary" aria-hidden="true" />
              {elder.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Age</dt>
                <dd className="font-medium">{elder.age}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">City</dt>
                <dd className="font-medium">{elder.city}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Languages</dt>
                <dd className="font-medium">{elder.language}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Using SmritiPlay since</dt>
                <dd className="font-medium">{formatDate(elder.joinedOn)}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted-foreground">Clinical summary</dt>
                <dd className="font-medium">{elder.conditionSummary}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-xl">
              <Phone className="size-5 text-primary" aria-hidden="true" />
              Primary caregiver
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-lg font-semibold">{caregiver.name}</p>
            <p className="text-muted-foreground">{caregiver.relation}</p>
            <a
              href={`tel:${caregiver.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center font-medium text-primary underline underline-offset-4"
            >
              {caregiver.phone}
            </a>
            <div className="pt-2">
              <Badge variant="secondary">Receives alerts and weekly reports</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display text-xl">
            <Stethoscope className="size-5 text-primary" aria-hidden="true" />
            Familiar people & memory prompts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {memoryItems.map((m) => (
              <li key={m.id} className="rounded-xl border border-border p-4">
                <span className="text-3xl" aria-hidden="true">
                  {m.emoji}
                </span>
                <p className="mt-2 font-semibold">{m.label}</p>
                <p className="text-sm text-muted-foreground">
                  {m.relation} · {m.note}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
