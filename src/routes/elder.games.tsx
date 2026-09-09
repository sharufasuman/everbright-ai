import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHeader } from "@/components/common/page-header";
import { GameCard } from "@/components/elder/game-card";
import { Button } from "@/components/ui/button";
import { games } from "@/lib/demo-data";
import { domainLabels } from "@/lib/format";
import type { CognitiveDomain } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/elder/games")({
  head: () => ({
    meta: [
      { title: "Brain games — SmritiPlay" },
      {
        name: "description",
        content: "Short, gentle cognitive games across memory, attention, language and more.",
      },
      { property: "og:title", content: "Brain games — SmritiPlay" },
      {
        property: "og:description",
        content: "Short, gentle cognitive games for memory, attention and language.",
      },
    ],
  }),
  component: GamesPage,
});

const filters: Array<CognitiveDomain | "all"> = [
  "all",
  "memory",
  "attention",
  "language",
  "problem-solving",
  "orientation",
];

function GamesPage() {
  const [active, setActive] = useState<CognitiveDomain | "all">("all");
  const list = active === "all" ? games : games.filter((g) => g.domain === active);

  return (
    <>
      <PageHeader
        title="Brain games"
        description="Pick any game. Each one takes just a few minutes."
      />

      <div role="group" aria-label="Filter games by skill area" className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f}
            variant={active === f ? "default" : "outline"}
            aria-pressed={active === f}
            className={cn("min-h-11 text-base")}
            onClick={() => setActive(f)}
          >
            {f === "all" ? "All games" : domainLabels[f]}
          </Button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="text-muted-foreground">No games in this area yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      )}
    </>
  );
}
