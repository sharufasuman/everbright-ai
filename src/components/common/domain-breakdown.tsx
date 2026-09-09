import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { domainLabels } from "@/lib/format";
import type { DomainScore } from "@/lib/types";
import { cn } from "@/lib/utils";

export function DomainBreakdown({ scores }: { scores: DomainScore[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display text-xl">Skill areas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {scores.map((s) => (
          <div key={s.domain}>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <span className="font-medium">{domainLabels[s.domain]}</span>
              <span className="text-sm text-muted-foreground">
                {s.score}/100{" "}
                <span
                  className={cn(
                    "font-medium",
                    s.changeVsLastWeek >= 0 ? "text-success" : "text-destructive",
                  )}
                >
                  ({s.changeVsLastWeek >= 0 ? "+" : ""}
                  {s.changeVsLastWeek})
                </span>
              </span>
            </div>
            <Progress
              value={s.score}
              aria-label={`${domainLabels[s.domain]} score ${s.score} out of 100`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
