import { Link, createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, HeartHandshake, LineChart, ShieldCheck, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { elder } from "@/lib/demo-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmritiPlay — AI cognitive games & memory care for elders" },
      {
        name: "description",
        content:
          "SmritiPlay pairs elderly-friendly brain games with caregiver insights, reminders and progress tracking in one accessible platform.",
      },
      { property: "og:title", content: "SmritiPlay — AI cognitive games & memory care" },
      {
        property: "og:description",
        content:
          "Brain games, reminders and AI caregiver insights designed for elderly users and their families.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: BrainCircuit,
    title: "Adaptive brain games",
    body: "Short, gentle games across memory, attention, language, problem solving and orientation.",
  },
  {
    icon: LineChart,
    title: "Progress you can trust",
    body: "Daily scores roll up into weekly trends and skill-area breakdowns anyone can read.",
  },
  {
    icon: Sparkles,
    title: "AI caregiver insights",
    body: "Patterns, alerts and practical suggestions surfaced for the family caregiver.",
  },
  {
    icon: ShieldCheck,
    title: "Accessible by design",
    body: "Large type, high contrast, big tap targets, keyboard and screen-reader friendly.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-5 sm:px-6">
        <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
          <BrainCircuit className="size-6" aria-hidden="true" />
        </span>
        <span className="font-display text-xl font-semibold">SmritiPlay</span>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <section className="py-10 sm:py-16">
          <p className="mb-3 inline-flex rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
            SIH26003 · Cognitive gaming & memory assistance
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Keep memory active, keep families close.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            One unified platform: playful daily brain training for elders, and clear AI-supported
            insight for the person who cares for them.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <Link
              to="/elder"
              className="group rounded-2xl border-2 border-primary bg-primary p-6 text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="size-8" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-semibold">I am {elder.name}</h2>
              <p className="mt-1 opacity-90">Play today's games, see reminders and progress.</p>
              <span className="mt-4 inline-block font-semibold underline underline-offset-4">
                Open my home screen
              </span>
            </Link>

            <Link
              to="/caregiver"
              className="group rounded-2xl border-2 border-border bg-card p-6 transition-transform hover:-translate-y-0.5"
            >
              <Sparkles className="size-8 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-semibold">I am the caregiver</h2>
              <p className="mt-1 text-muted-foreground">
                Track wellbeing, review alerts and AI insights.
              </p>
              <span className="mt-4 inline-block font-semibold text-primary underline underline-offset-4">
                Open caregiver dashboard
              </span>
            </Link>
          </div>
        </section>

        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="font-display text-2xl font-semibold">
            What's inside
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="h-full">
                <CardContent className="p-5">
                  <f.icon className="size-7 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Demo data shown for Ravi Kumar. Built as the shared MVP foundation for SIH26003.
      </footer>
    </div>
  );
}
