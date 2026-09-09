import { CalendarClock, Droplets, Footprints, Pill } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatTime } from "@/lib/format";
import type { Reminder, ReminderKind } from "@/lib/types";
import { cn } from "@/lib/utils";

const kindIcon: Record<ReminderKind, typeof Pill> = {
  medicine: Pill,
  activity: Footprints,
  appointment: CalendarClock,
  hydration: Droplets,
};

export function ReminderList({
  initial,
  title = "Today's reminders",
  compact = false,
}: {
  initial: Reminder[];
  title?: string;
  compact?: boolean;
}) {
  const [items, setItems] = useState<Reminder[]>(initial);
  const list = compact ? items.filter((r) => !r.done).slice(0, 3) : items;

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const next = { ...r, done: !r.done };
        toast(next.done ? `Marked done: ${r.title}` : `Marked not done: ${r.title}`);
        return next;
      }),
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {list.length === 0 ? (
          <p className="text-muted-foreground">Everything is done for today. Well done!</p>
        ) : (
          <ul className="space-y-3">
            {list.map((r) => {
              const Icon = kindIcon[r.kind];
              return (
                <li
                  key={r.id}
                  className={cn(
                    "flex flex-wrap items-center gap-4 rounded-xl border border-border p-4",
                    r.done && "bg-muted",
                  )}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="min-w-40 flex-1">
                    <p className={cn("font-semibold", r.done && "line-through opacity-70")}>
                      {r.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatTime(r.time)} · {r.detail}
                    </p>
                  </div>
                  <Button
                    variant={r.done ? "outline" : "default"}
                    className="min-h-11"
                    onClick={() => toggle(r.id)}
                  >
                    {r.done ? "Undo" : "Mark done"}
                  </Button>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
