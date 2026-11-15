export const TEST_APP_VIDEO_BASE =
  "https://videos.thedinkhousepb.com/tutorials";

export const TEST_APP_GUIDE_PDF = "/player-test-guide.pdf";

export type TestAppLesson = {
  file: string;
  title: string;
  body: string;
};

export const TEST_APP_LESSONS: TestAppLesson[] = [
  {
    file: "01-sign-in-and-account.mp4",
    title: "Sign in and account",
    body: "Sign in, create an account, claim a player, or reset a password. After you sign in the tabs are Home, Book, Schedule, Bookings, and Profile.",
  },
  {
    file: "02-home.mp4",
    title: "Home",
    body: "Home shows your name, email, and membership, plus shortcuts to check in, book a court, and see the schedule.",
  },
  {
    file: "03-check-in.mp4",
    title: "Check-in",
    body: "The desk QR brightens the screen and refreshes on its own. Leaving the app clears it, and a new code appears when you come back.",
  },
  {
    file: "04-book-a-court.mp4",
    title: "Book a court",
    body: "Pick a date, a court, and an hour. The screen names the court, the time, and the price before you confirm. A free hour says Book for free. A paid hour says Pay and book.",
  },
  {
    file: "05-bookings.mp4",
    title: "Bookings",
    body: "Bookings lists upcoming courts and sessions. Keep it leaves a reservation in place. Yes, cancel it removes it.",
  },
  {
    file: "06-schedule-and-sessions.mp4",
    title: "Schedule and sessions",
    body: "Open a session to see the title, time, seats, and price, then book it. Cancel from Bookings.",
  },
  {
    file: "07-competition.mp4",
    title: "Competition",
    body: "A league or ladder shows standings, the round schedule, and the court board.",
  },
  {
    file: "08-open-play.mp4",
    title: "Open play",
    body: "Before open play starts, the screen says it has not started. During a session you can see your place in line, take a break, and send a score.",
  },
  {
    file: "09-door.mp4",
    title: "The door",
    body: "At the club, unlock with the door sticker or the door QR. The phone asks for Face ID or a fingerprint. The passcode alone does not unlock the door.",
  },
  {
    file: "10-devices-membership-account.mp4",
    title: "Devices, membership, and account",
    body: "Only one phone can unlock the door. Membership shows your level, the end date, and the one-time registration fee. Delete account stays unavailable until the email you type matches. Sign out returns you to Sign in.",
  },
];

export function testAppVideoUrl(file: string): string {
  return `${TEST_APP_VIDEO_BASE}/${file}`;
}
