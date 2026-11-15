export type TutorialHotspot = {
  id: string;
  label: string;
  insight: string;
  /** Percentages of the screenshot, so the box scales with the phone. */
  top: number;
  left: number;
  width: number;
  height: number;
};

export type TutorialFrame = {
  id: string;
  label: string;
  image: string;
  audio: string;
  narration: string;
  hotspots: TutorialHotspot[];
};

export type TutorialStep = {
  id: string;
  label: string;
  frames: TutorialFrame[];
};

export type TutorialChapter = {
  id: string;
  label: string;
  intro: string;
  steps: TutorialStep[];
};

const MEDIA = "/tutorials/getting-in";

const GUEST_FEE =
  "Guests sign up free. Memberships include a one-time registration fee.";

export const GETTING_IN_STEPS: TutorialStep[] = [
  {
    id: "sign-in",
    label: "Sign in",
    frames: [
      {
        id: "sign-in",
        label: "Sign in",
        image: `${MEDIA}/01-sign-in.png`,
        audio: `${MEDIA}/01-sign-in.mp3`,
        narration:
          "This is The Dink House app. Enter your email and password, then tap Sign in. If this phone says you were signed in somewhere else, that is fine. Sign in again here. From this screen you can also create an account, email yourself a code, look at the schedule, or reset a password.",
        hotspots: [
          {
            id: "email-password",
            label: "Email and password",
            insight: "Enter your email and password.",
            top: 36.5,
            left: 5.9,
            width: 88.2,
            height: 17.5,
          },
          {
            id: "other-device",
            label: "Signed in elsewhere",
            insight:
              "If this phone says you were signed in somewhere else, that is fine. Sign in again here.",
            top: 55.2,
            left: 5.9,
            width: 87,
            height: 4.2,
          },
          {
            id: "sign-in",
            label: "Sign in",
            insight: "Then tap Sign in.",
            top: 60.8,
            left: 5.9,
            width: 88.2,
            height: 5.6,
          },
          {
            id: "create",
            label: "Create an account",
            insight: "From this screen you can also create an account.",
            top: 68,
            left: 5.9,
            width: 88.2,
            height: 5.5,
          },
          {
            id: "email-code",
            label: "Email me a code",
            insight: "Or email yourself a code.",
            top: 75,
            left: 5.9,
            width: 88.2,
            height: 5.8,
          },
          {
            id: "schedule",
            label: "See the schedule",
            insight: "Or look at the schedule.",
            top: 82.4,
            left: 5.9,
            width: 88.2,
            height: 5.8,
          },
          {
            id: "forgot",
            label: "Forgot password",
            insight: "Or reset a password.",
            top: 89.6,
            left: 5.9,
            width: 40,
            height: 3,
          },
        ],
      },
    ],
  },
  {
    id: "create-account",
    label: "Create an account",
    frames: [
      {
        id: "create-fields",
        label: "Fields",
        image: `${MEDIA}/02-create-account.png`,
        audio: `${MEDIA}/02-create-account.mp3`,
        narration: `Tap Create an account. ${GUEST_FEE} Add your first name, last name, and email. Your password needs at least 10 characters. Phone is optional. Then add your date of birth.`,
        hotspots: [
          {
            id: "guest-fee",
            label: "Guest signup",
            insight: GUEST_FEE,
            top: 20.5,
            left: 5.9,
            width: 88,
            height: 7,
          },
          {
            id: "name-email",
            label: "Name and email",
            insight: "Add your first name, last name, and email.",
            top: 28.5,
            left: 5.9,
            width: 88.2,
            height: 27.3,
          },
          {
            id: "password",
            label: "Password",
            insight: "Your password needs at least 10 characters.",
            top: 56.5,
            left: 5.9,
            width: 88.2,
            height: 11.5,
          },
          {
            id: "phone",
            label: "Phone",
            insight: "Phone is optional.",
            top: 68.5,
            left: 5.9,
            width: 88.2,
            height: 8.5,
          },
          {
            id: "dob",
            label: "Date of birth",
            insight: "Then add your date of birth.",
            top: 77.5,
            left: 5.9,
            width: 88.2,
            height: 9,
          },
        ],
      },
      {
        id: "create-submit",
        label: "Finish",
        image: `${MEDIA}/02b-create-account-bottom.png`,
        audio: `${MEDIA}/02b-create-account-bottom.mp3`,
        narration:
          "Choose Female or Male, and tap Create an account. Confirm the email, then sign in to finish. If you already have an account, that button takes you back.",
        hotspots: [
          {
            id: "gender",
            label: "Female or Male",
            insight: "Choose Female or Male.",
            top: 74.3,
            left: 5.8,
            width: 88.3,
            height: 6,
          },
          {
            id: "submit",
            label: "Create an account",
            insight:
              "Tap Create an account. Confirm the email, then sign in to finish.",
            top: 82,
            left: 5.9,
            width: 88.2,
            height: 5.4,
          },
          {
            id: "have-account",
            label: "I already have an account",
            insight:
              "If you already have an account, that button takes you back.",
            top: 88.8,
            left: 5.9,
            width: 88.2,
            height: 6.2,
          },
        ],
      },
    ],
  },
  {
    id: "reset",
    label: "Reset password",
    frames: [
      {
        id: "reset",
        label: "Reset password",
        image: `${MEDIA}/03-forgot-password.png`,
        audio: `${MEDIA}/03-forgot-password.mp3`,
        narration:
          "Forgot your password? A code from the front desk works here. It expires in 10 minutes. Or tap Email me a code. That replaces any code already sent. Enter your email, the 6-digit code, and a new password, then tap Save password.",
        hotspots: [
          {
            id: "desk-code",
            label: "Front desk code",
            insight:
              "A code from the front desk works here. It expires in 10 minutes.",
            top: 21,
            left: 5.9,
            width: 88,
            height: 7,
          },
          {
            id: "reset-fields",
            label: "Email, code, and new password",
            insight: "Enter your email, the 6-digit code, and a new password.",
            top: 28.8,
            left: 5.9,
            width: 88.2,
            height: 26.9,
          },
          {
            id: "email-code",
            label: "Email me a code",
            insight:
              "Or tap Email me a code. That replaces any code already sent.",
            top: 57,
            left: 5.9,
            width: 88.2,
            height: 5.5,
          },
          {
            id: "save",
            label: "Save password",
            insight: "Then tap Save password.",
            top: 64.3,
            left: 5.9,
            width: 88.2,
            height: 5.4,
          },
        ],
      },
    ],
  },
  {
    id: "schedule",
    label: "Schedule",
    frames: [
      {
        id: "schedule",
        label: "Schedule",
        image: `${MEDIA}/04-public-schedule.png`,
        audio: `${MEDIA}/04-public-schedule.mp3`,
        narration:
          "You can look at the schedule before you have an account. These are the sessions for the next two weeks. Every day is selected, or tap one day to narrow the list. Each row shows the time, the session, the level, and how many seats are left.",
        hotspots: [
          {
            id: "every-day",
            label: "Every day",
            insight:
              "Every day is selected. These are the sessions for the next two weeks.",
            top: 23.8,
            left: 5.5,
            width: 18,
            height: 6,
          },
          {
            id: "one-day",
            label: "One day",
            insight: "Or tap one day to narrow the list.",
            top: 23.8,
            left: 25,
            width: 73,
            height: 6,
          },
          {
            id: "row",
            label: "A session",
            insight:
              "Each row shows the time, the session, the level, and how many seats are left.",
            top: 50.1,
            left: 5.8,
            width: 88.4,
            height: 11.5,
          },
        ],
      },
    ],
  },
  {
    id: "session",
    label: "Session",
    frames: [
      {
        id: "session",
        label: "Session",
        image: `${MEDIA}/05-public-session-detail.png`,
        audio: `${MEDIA}/05-public-session-detail.mp3`,
        narration:
          "Tap a session to open it. Beginner Open Play is Monday, 9 to 11, on courts 6 and 7. Members play free. Guests pay 15 dollars. To book it, create an account.",
        hotspots: [
          {
            id: "details",
            label: "Beginner Open Play",
            insight:
              "Beginner Open Play is Monday, 9 to 11, on courts 6 and 7.",
            top: 14.8,
            left: 5.5,
            width: 88.7,
            height: 20,
          },
          {
            id: "price",
            label: "Price",
            insight: "Members play free. Guests pay 15 dollars.",
            top: 39,
            left: 5.8,
            width: 88.4,
            height: 5.5,
          },
          {
            id: "create",
            label: "Create an account",
            insight: "To book it, create an account.",
            top: 90.7,
            left: 5.9,
            width: 88.2,
            height: 5.5,
          },
        ],
      },
    ],
  },
];

export const GETTING_IN_CHAPTER: TutorialChapter = {
  id: "getting-in",
  label: "Getting in",
  intro:
    "Sign in, create an account, reset a password, and look at the schedule before you start the tests.",
  steps: GETTING_IN_STEPS,
};
