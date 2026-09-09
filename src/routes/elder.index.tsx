import { Link, createFileRoute } from "@tanstack/react-router";
import { Flame, Gamepad2, Sparkles, Timer, Trophy } from "lucide-react";

import { PageHeader } from "@/components/common/page-header";
import { StatCard } from "@/components/common/stat-card";
import { GameCard } from "@/components/elder/game-card";
import { ReminderList } from "@/components/elder/reminder-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  elder,
  games,
  getWeeklyAverage,
  getWeeklyMinutes,
  memoryItems,
  reminders,
} from "@/lib/demo-data";

export const Route = createFileRoute("/elder/")({
  head: () => ({
    meta: [
      { title: "My day — SmritiPlay" },
      {
        name: "description",
        content: "Today's brain games, reminders and memory helpers for Ravi Kumar.",
      },
      { property: "og:title", content: "My day — SmritiPlay" },
      {
        property: "og:description",
        content: "Today's brain games, reminders and memory helpers.",
      },
    ],
  }),
  component: ElderHome,
});

function ElderHome() {
  const featured = games.filter((g) => g.status === "ready").slice(0, 3);
  const hour = new Date().getUTCHours() + 5;
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <>
      <PageHeader
        title={`${greeting}, ${elder.name.split(" ")[0]}!`}
        description="Here is your day at a glance. Take it one small step at a time."
      />

      <section aria-label="Your numbers" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Day streak" value={elder.streakDays} unit="days" icon={Flame} tone="accent" />
        <StatCard label="This week's average" value={getWeeklyAverage()} unit="/100" icon={Trophy} trend={4} />
        <StatCard label="Time played" value={getWeeklyMinutes()} unit="min" icon={Timer} tone="success" />
        <StatCard
          label="Games left today"
          value={reminders.filter((r) => !r.done && r.kind === "activity").length}
          icon={Gamepad2}
          tone="warning"
        />
      </section>

      <section className="mt-8" aria-labelledby="play-heading">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 id="play-heading" className="font-display text-2xl font-semibold">
            Play today
          </h2>
          <Link
            to="/elder/games"
            className="min-h-11 rounded-lg px-2 py-2 font-medium text-primary underline underline-offset-4"
          >
            See all games
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ReminderList initial={reminders} title="Next reminders" compact />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-xl">
              <Sparkles className="size-5 text-primary" aria-hidden="true" />
              People to remember
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {memoryItems.map((m) => (
                <li key={m.id} className="rounded-xl border border-border p-4">
                  <span className="text-3xl" aria-hidden="true">
                    {m.emoji}
                  </span>
                  <p className="mt-2 font-semibold">
                    {m.label} <span className="font-normal text-muted-foreground">· {m.relation}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{m.note}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
