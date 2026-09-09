import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  unit,
  icon: Icon,
  trend,
  tone = "primary",
}: {
  label: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: number;
  tone?: "primary" | "accent" | "success" | "warning";
}) {
  const toneClass = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/15 text-accent-foreground",
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning-foreground",
  }[tone];

  return (
    <Card className="border-border">
      <CardContent className="flex items-center gap-4 p-5">
        <span className={cn("grid size-12 shrink-0 place-items-center rounded-xl", toneClass)}>
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="font-display text-2xl font-semibold">
            {value}
            {unit ? <span className="ml-1 text-base font-normal">{unit}</span> : null}
          </p>
          {typeof trend === "number" ? (
            <p
              className={cn(
                "text-sm font-medium",
                trend >= 0 ? "text-success" : "text-destructive",
              )}
            >
              {trend >= 0 ? "+" : ""}
              {trend} vs last week
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
