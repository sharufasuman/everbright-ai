import { Link, createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, BellRing, CheckCircle2, Flame, Info, Target } from "lucide-react";

import { DomainBreakdown } from "@/components/common/domain-breakdown";
import { PageHeader } from "@/components/common/page-header";
import { ProgressChart } from "@/components/common/progress-chart";
import { StatCard } from "@/components/common/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  caregiverAlerts,
  domainScores,
  elder,
  getWeeklyAverage,
  reminders,
  weeklyProgress,
} from "@/lib/demo-data";
import { formatDateTime, formatTime } from "@/lib/format";
import type { AlertLevel } from "@/lib/types";

export const Route = createFileRoute("/caregiver/")({
  head: () => ({
    meta: [
      { title: "Caregiver overview — SmritiPlay" },
      {
        name: "description",
        content:
          "Daily wellbeing snapshot: engagement, alerts, reminder adherence and cognitive trends.",
      },
      { property: "og:title", content: "Caregiver overview — SmritiPlay" },
      {
        property: "og:description",
        content: "Engagement, alerts, reminder adherence and cognitive trends at a glance.",
      },
    ],
  }),
  component: CaregiverHome,
});

const levelStyle: Record<AlertLevel, { icon: typeof Info; badge: string; label: string }> = {
  info: { icon: Info, badge: "bg-info/10 text-info", label: "Info" },
  attention: { icon: AlertTriangle, badge: "bg-warning/20 text-warning-foreground", label: "Attention" },
  urgent: { icon: BellRing, badge: "bg-destructive/10 text-destructive", label: "Urgent" },
};

function CaregiverHome() {
  const done = reminders.filter((r) => r.done).length;
  const adherence = Math.round((done / reminders.length) * 100);

  return (
    <>
      <PageHeader
        title="Caregiver overview"
        description={`How ${elder.name} is doing today, and what may need your attention.`}
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Weekly average" value={getWeeklyAverage()} unit="/100" icon={Target} trend={4} />
        <StatCard label="Engagement streak" value={elder.streakDays} unit="days" icon={Flame} tone="accent" />
        <StatCard label="Reminder adherence" value={adherence} unit="%" icon={CheckCircle2} tone="success" />
        <StatCard
          label="Open alerts"
          value={caregiverAlerts.filter((a) => a.level !== "info").length}
          icon={BellRing}
          tone="warning"
        />
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-xl">Cognitive trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressChart data={weeklyProgress} />
            <Link
              to="/caregiver/progress"
              className="mt-2 inline-block font-medium text-primary underline underline-offset-4"
            >
              Open the full progress report
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-display text-xl">Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {caregiverAlerts.map((a) => {
                const style = levelStyle[a.level];
                return (
                  <li key={a.id} className="rounded-xl border border-border p-4">
                    <div className="flex items-center gap-2">
                      <span className={`grid size-8 place-items-center rounded-lg ${style.badge}`}>
                        <style.icon className="size-4" aria-hidden="true" />
                      </span>
                      <p className="font-semibold">{a.title}</p>
                      <Badge variant="outline" className="ml-auto">
                        {style.label}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{formatDateTime(a.at)}</p>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <DomainBreakdown scores={domainScores} />
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-xl">Today's reminder log</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-border">
              {reminders.map((r) => (
                <li key={r.id} className="flex items-center gap-3 py-3">
                  <span className="w-20 shrink-0 text-sm text-muted-foreground">
                    {formatTime(r.time)}
                  </span>
                  <span className="flex-1 font-medium">{r.title}</span>
                  <Badge variant={r.done ? "secondary" : "outline"}>
                    {r.done ? "Done" : "Pending"}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
