// Mock data layer. Swap these functions for real API/database calls later —
// keep the return types identical so UI modules need no changes.

import type {
  AiInsight,
  Caregiver,
  CaregiverAlert,
  DailyPoint,
  DomainScore,
  Game,
  GameSession,
  MemoryItem,
  Reminder,
  UserProfile,
} from "./types";

export const elder: UserProfile = {
  id: "user-ravi",
  name: "Ravi Kumar",
  age: 72,
  avatarInitials: "RK",
  language: "English / Hindi",
  city: "Lucknow",
  conditionSummary: "Mild cognitive impairment, reviewed quarterly",
  caregiverId: "care-anita",
  streakDays: 12,
  joinedOn: "2026-05-14",
};

export const caregiver: Caregiver = {
  id: "care-anita",
  name: "Anita Kumar",
  relation: "Daughter",
  phone: "+91 98200 41122",
  avatarInitials: "AK",
};

export const games: Game[] = [
  {
    id: "game-face-names",
    title: "Faces & Names",
    description: "Match familiar faces with their names and relationships.",
    domain: "memory",
    difficulty: "easy",
    minutes: 5,
    icon: "Users",
    status: "ready",
  },
  {
    id: "game-word-recall",
    title: "Word Recall",
    description: "Remember a short list of everyday words, then recall them.",
    domain: "language",
    difficulty: "medium",
    minutes: 6,
    icon: "BookOpen",
    status: "ready",
  },
  {
    id: "game-spot-shape",
    title: "Spot the Shape",
    description: "Find the matching shape before the timer runs out.",
    domain: "attention",
    difficulty: "easy",
    minutes: 4,
    icon: "Shapes",
    status: "ready",
  },
  {
    id: "game-daily-order",
    title: "Daily Order",
    description: "Arrange the steps of a familiar routine in order.",
    domain: "problem-solving",
    difficulty: "medium",
    minutes: 7,
    icon: "ListOrdered",
    status: "ready",
  },
  {
    id: "game-today-quiz",
    title: "Today Quiz",
    description: "Gentle questions about the day, date and season.",
    domain: "orientation",
    difficulty: "easy",
    minutes: 3,
    icon: "CalendarDays",
    status: "coming-soon",
  },
  {
    id: "game-number-path",
    title: "Number Path",
    description: "Tap the numbers in order across the board.",
    domain: "attention",
    difficulty: "hard",
    minutes: 8,
    icon: "Hash",
    status: "coming-soon",
  },
];

export const weeklyProgress: DailyPoint[] = [
  { date: "2026-09-03", label: "Thu", score: 64, minutes: 12 },
  { date: "2026-09-04", label: "Fri", score: 68, minutes: 15 },
  { date: "2026-09-05", label: "Sat", score: 61, minutes: 8 },
  { date: "2026-09-06", label: "Sun", score: 72, minutes: 18 },
  { date: "2026-09-07", label: "Mon", score: 75, minutes: 16 },
  { date: "2026-09-08", label: "Tue", score: 71, minutes: 11 },
  { date: "2026-09-09", label: "Wed", score: 78, minutes: 14 },
];

export const domainScores: DomainScore[] = [
  { domain: "memory", score: 74, changeVsLastWeek: 5 },
  { domain: "attention", score: 68, changeVsLastWeek: -3 },
  { domain: "language", score: 81, changeVsLastWeek: 2 },
  { domain: "problem-solving", score: 63, changeVsLastWeek: 4 },
  { domain: "orientation", score: 77, changeVsLastWeek: 1 },
];

export const recentSessions: GameSession[] = [
  {
    id: "s-1",
    gameId: "game-face-names",
    playedOn: "2026-09-09",
    score: 82,
    accuracy: 86,
    durationMinutes: 5,
    domain: "memory",
  },
  {
    id: "s-2",
    gameId: "game-word-recall",
    playedOn: "2026-09-09",
    score: 74,
    accuracy: 78,
    durationMinutes: 6,
    domain: "language",
  },
  {
    id: "s-3",
    gameId: "game-spot-shape",
    playedOn: "2026-09-08",
    score: 69,
    accuracy: 71,
    durationMinutes: 4,
    domain: "attention",
  },
  {
    id: "s-4",
    gameId: "game-daily-order",
    playedOn: "2026-09-07",
    score: 77,
    accuracy: 80,
    durationMinutes: 7,
    domain: "problem-solving",
  },
];

export const reminders: Reminder[] = [
  {
    id: "r-1",
    title: "Blood pressure tablet",
    detail: "One tablet after breakfast",
    time: "08:30",
    kind: "medicine",
    done: true,
  },
  {
    id: "r-2",
    title: "Morning walk",
    detail: "20 minutes in the park with Anita",
    time: "09:15",
    kind: "activity",
    done: true,
  },
  {
    id: "r-3",
    title: "Drink water",
    detail: "One full glass",
    time: "12:00",
    kind: "hydration",
    done: false,
  },
  {
    id: "r-4",
    title: "Brain game session",
    detail: "Faces & Names, 5 minutes",
    time: "17:00",
    kind: "activity",
    done: false,
  },
  {
    id: "r-5",
    title: "Doctor Sharma visit",
    detail: "Memory clinic, Gomti Nagar",
    time: "18:30",
    kind: "appointment",
    done: false,
  },
];

export const memoryItems: MemoryItem[] = [
  { id: "m-1", label: "Anita", relation: "Daughter", note: "Calls every evening at 7", emoji: "👩" },
  { id: "m-2", label: "Sunita", relation: "Wife", note: "Loves the garden roses", emoji: "🌹" },
  { id: "m-3", label: "Arjun", relation: "Grandson", note: "Plays cricket on Sundays", emoji: "🏏" },
  { id: "m-4", label: "Dr. Sharma", relation: "Doctor", note: "Memory clinic, Wednesdays", emoji: "🩺" },
];

export const caregiverAlerts: CaregiverAlert[] = [
  {
    id: "a-1",
    level: "attention",
    title: "Attention scores dipped",
    detail: "Attention is down 3 points this week across two sessions.",
    at: "2026-09-09T07:10:00Z",
  },
  {
    id: "a-2",
    level: "urgent",
    title: "Evening medicine missed twice",
    detail: "The 18:30 reminder was not marked done on Sunday and Monday.",
    at: "2026-09-08T14:40:00Z",
  },
  {
    id: "a-3",
    level: "info",
    title: "12-day streak reached",
    detail: "Ravi has played at least one game every day for 12 days.",
    at: "2026-09-09T04:05:00Z",
  },
];

export const aiInsights: AiInsight[] = [
  {
    id: "i-1",
    headline: "Mornings are the strongest time to play",
    body: "Sessions before 11 AM score about 11 points higher than evening sessions. Try moving the daily game to the morning routine.",
    confidence: 0.82,
  },
  {
    id: "i-2",
    headline: "Language skills are steadily improving",
    body: "Word Recall accuracy rose from 66% to 78% over three weeks. Increasing difficulty to hard is likely to be comfortable.",
    confidence: 0.74,
  },
  {
    id: "i-3",
    headline: "Shorter, more frequent sessions help attention",
    body: "Attention scores drop after 6 minutes of continuous play. Two 4-minute sessions may work better than one long one.",
    confidence: 0.68,
  },
];

// --- Accessors (async-ready shape for a future backend) -------------------

export function getElder(): UserProfile {
  return elder;
}
export function getCaregiver(): Caregiver {
  return caregiver;
}
export function getGames(): Game[] {
  return games;
}
export function getGameById(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}
export function getTodayReminders(): Reminder[] {
  return reminders;
}
export function getWeeklyAverage(): number {
  return Math.round(weeklyProgress.reduce((a, p) => a + p.score, 0) / weeklyProgress.length);
}
export function getWeeklyMinutes(): number {
  return weeklyProgress.reduce((a, p) => a + p.minutes, 0);
}
