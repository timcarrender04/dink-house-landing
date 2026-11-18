// The ambassador program's public API lives on the club backend
// (dink-house-backend docs/ambassadors.md). The forms post to it straight from the
// browser (its CORS list includes this site), so its per-IP throttle sees each
// visitor rather than this server.

export const BACKEND_URL = (
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.thedinkhousepb.com"
).replace(/\/$/, "");

export type GoalKey =
  | "new_players"
  | "first_time_guests"
  | "shift_hours"
  | "waitlist_signups"
  | "conversions";

export const GOAL_LABELS: Record<GoalKey, string> = {
  new_players: "New players",
  first_time_guests: "First-time guests",
  shift_hours: "Shift hours",
  waitlist_signups: "Waitlist sign-ups",
  conversions: "Paying conversions",
};

export type ProgramInfo = {
  phase: 0 | 1;
  openingDate: string | null;
  tenureMonths: number;
  goals: Partial<Record<GoalKey, number>>;
  period: "month" | "quarter";
  rewardFullPct: number;
  rewardPartialPct: number;
  keyGoal: GoalKey;
};

export async function backendJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${BACKEND_URL}${path}`);

    return response.ok ? ((await response.json()) as T) : null;
  } catch {
    return null;
  }
}
