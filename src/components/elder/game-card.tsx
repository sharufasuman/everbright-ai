import * as Icons from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { difficultyLabels, domainLabels } from "@/lib/format";
import type { Game } from "@/lib/types";

export function GameCard({ game }: { game: Game }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[game.icon] ?? Icons.Gamepad2;
  const ready = game.status === "ready";

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-start gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent-foreground">
            <Icon className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold">{game.title}</h3>
            <p className="text-sm text-muted-foreground">{game.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{domainLabels[game.domain]}</Badge>
          <Badge variant="outline">{difficultyLabels[game.difficulty]}</Badge>
          <Badge variant="outline">{game.minutes} min</Badge>
        </div>
        <Button
          className="mt-auto min-h-12 w-full text-base"
          disabled={!ready}
          onClick={() =>
            toast(`${game.title} is ready for the game module`, {
              description: "Gameplay will be plugged in by the games team.",
            })
          }
        >
          {ready ? "Play now" : "Coming soon"}
        </Button>
      </CardContent>
    </Card>
  );
}
