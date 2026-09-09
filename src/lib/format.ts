import type { CognitiveDomain, Difficulty } from "./types";

export const domainLabels: Record<CognitiveDomain, string> = {
  memory: "Memory",
  attention: "Attention",
  language: "Language",
  "problem-solving": "Problem solving",
  orientation: "Orientation",
};

export const difficultyLabels: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export function formatTime(hhmm: string): string {
  const [hRaw, m] = hhmm.split(":");
  const h = Number(hRaw);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m} ${suffix}`;
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  });
}
