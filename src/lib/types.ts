// Shared domain model for the cognitive gaming & memory assistance platform.
// Teammates should extend these types rather than inventing parallel shapes.

export type Role = "elder" | "caregiver";

export type CognitiveDomain =
  | "memory"
  | "attention"
  | "language"
  | "problem-solving"
  | "orientation";

export type Difficulty = "easy" | "medium" | "hard";

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  avatarInitials: string;
  language: string;
  city: string;
  conditionSummary: string;
  caregiverId: string;
  streakDays: number;
  joinedOn: string; // ISO date
}

export interface Caregiver {
  id: string;
  name: string;
  relation: string;
  phone: string;
  avatarInitials: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  domain: CognitiveDomain;
  difficulty: Difficulty;
  minutes: number;
  icon: string; // lucide icon name
  status: "ready" | "coming-soon";
}

export interface GameSession {
  id: string;
  gameId: string;
  playedOn: string; // ISO date
  score: number; // 0-100
  accuracy: number; // 0-100
  durationMinutes: number;
  domain: CognitiveDomain;
}

export type ReminderKind = "medicine" | "activity" | "appointment" | "hydration";

export interface Reminder {
  id: string;
  title: string;
  detail: string;
  time: string; // HH:mm 24h
  kind: ReminderKind;
  done: boolean;
}

export interface MemoryItem {
  id: string;
  label: string;
  relation: string;
  note: string;
  emoji: string;
}

export interface DomainScore {
  domain: CognitiveDomain;
  score: number; // 0-100
  changeVsLastWeek: number;
}

export interface DailyPoint {
  date: string; // ISO date
  label: string; // Mon, Tue...
  score: number;
  minutes: number;
}

export type AlertLevel = "info" | "attention" | "urgent";

export interface CaregiverAlert {
  id: string;
  level: AlertLevel;
  title: string;
  detail: string;
  at: string; // ISO datetime
}

export interface AiInsight {
  id: string;
  headline: string;
  body: string;
  confidence: number; // 0-1
}
