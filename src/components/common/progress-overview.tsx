import { CalendarCheck, Target, Timer } from "lucide-react";

import { DomainBreakdown } from "@/components/common/domain-breakdown";
import { ProgressChart } from "@/components/common/progress-chart";
import { StatCard } from "@/components/common/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  domainScores,
  games,
  getWeeklyAverage,
  getWeeklyMinutes,
  recentSessions,
  weeklyProgress,
} from "@/lib/demo-data";
import { domainLabels, formatDate } from "@/lib/format";

export function ProgressOverview() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Weekly average" value={getWeeklyAverage()} unit="/100" icon={Target} trend={4} />
        <StatCard label="Minutes played" value={getWeeklyMinutes()} unit="min" icon={Timer} tone="success" />
        <StatCard label="Active days" value={`${weeklyProgress.length}/7`} icon={CalendarCheck} tone="accent" />
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-xl">Last 7 days</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressChart data={weeklyProgress} />
          </CardContent>
        </Card>
        <DomainBreakdown scores={domainScores} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-display text-xl">Recent sessions</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Game</TableHead>
                <TableHead>Skill area</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Accuracy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSessions.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">
                    {games.find((g) => g.id === s.gameId)?.title ?? s.gameId}
                  </TableCell>
                  <TableCell>{domainLabels[s.domain]}</TableCell>
                  <TableCell>{formatDate(s.playedOn)}</TableCell>
                  <TableCell className="text-right">{s.score}</TableCell>
                  <TableCell className="text-right">{s.accuracy}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
