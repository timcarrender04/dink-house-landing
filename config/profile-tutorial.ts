import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/profile";

export const PROFILE_CHAPTER: TutorialChapter = {
  id: "profile",
  label: "Profile",
  intro:
    "Your member card, your DHL timeline, automatic check-in, membership, payment details, My deals, devices, Face ID or fingerprint sign-in, and your account.",
  steps: [
    {
      id: "you",
      label: "Profile",
      frames: [
        {
          id: "profile",
          label: "Profile",
          image: `${MEDIA}/01-profile.png`,
          audio: `${MEDIA}/01-profile.mp3`,
          narration:
            "Profile is the last tab. This is you, Maria Garcia. Your email, DHL 3.2 Intermediate, and Premium through July 18, 2027. From here, you can open your check-in code, automatic check-in, membership, devices, and account. Sign out is at the bottom. On a phone with face or fingerprint unlock enrolled, Sign in with Face ID or fingerprint is a switch between Devices and Account. Turn it on to skip the password on this phone. It stays hidden on the web, and when nothing is enrolled.",
          hotspots: [
            {
              id: "you",
              label: "Maria Garcia",
              insight:
                "Profile is the last tab. This is you, Maria Garcia. Your email, DHL 3.2 Intermediate, and Premium through July 18, 2027.",
              top: 16.9,
              left: 4.0,
              width: 49.3,
              height: 14.5,
            },
            {
              id: "menu",
              label: "Check-in code to account",
              insight:
                "Check-in code, automatic check-in, membership, devices, and account. With face or fingerprint unlock enrolled, Sign in with Face ID or fingerprint is a switch between Devices and Account.",
              top: 32.1,
              left: 5.5,
              width: 89.0,
              height: 35.9,
            },
            {
              id: "sign-out",
              label: "Sign out",
              insight: "Sign out is at the bottom.",
              top: 69.3,
              left: 5.5,
              width: 89.0,
              height: 6.0,
            },
          ],
        },
        {
          id: "level",
          label: "Level and deals",
          image: `${MEDIA}/09-level-and-deals.png`,
          audio: `${MEDIA}/09-level-and-deals.mp3`,
          narration:
            "The DHL pill on your card opens your level timeline. Payment details is where you keep Cash App, Venmo, PayPal, and Zelle for marketplace sales. My deals is what you bought and sold.",
          hotspots: [
            {
              id: "pill",
              label: "DHL 2.9 Beginner",
              insight: "The DHL pill opens your level timeline.",
              top: 24.5,
              left: 42,
              width: 32,
              height: 4,
            },
            {
              id: "pay",
              label: "Payment details",
              insight:
                "Cash App, Venmo, PayPal, and Zelle for marketplace sales.",
              top: 63.5,
              left: 5,
              width: 90,
              height: 7.5,
            },
            {
              id: "deals",
              label: "My deals",
              insight: "My deals is what you bought and sold.",
              top: 71.6,
              left: 5,
              width: 90,
              height: 6.4,
            },
          ],
        },
        {
          id: "auto-check-in",
          label: "Automatic check-in",
          image: `${MEDIA}/02-automatic-check-in.png`,
          audio: `${MEDIA}/02-automatic-check-in.mp3`,
          narration:
            "Automatic check-in is on. When you arrive within 150 meters of the club on a day you're signed up for an event, you're checked in automatically, even if the app is closed. Location settings is right here.",
          hotspots: [
            {
              id: "on",
              label: "On",
              insight: "Automatic check-in is on.",
              top: 27.6,
              left: 4.7,
              width: 89.8,
              height: 5.6,
            },
            {
              id: "rule",
              label: "150 meters",
              insight:
                "When you arrive within 150 meters of the club on a day you're signed up for an event, you're checked in automatically, even if the app is closed.",
              top: 33.0,
              left: 3.9,
              width: 91.0,
              height: 8.6,
            },
            {
              id: "location",
              label: "Location settings",
              insight: "Location settings is right here.",
              top: 43.2,
              left: 5.5,
              width: 89.0,
              height: 5.3,
            },
          ],
        },
        {
          id: "devices",
          label: "Devices",
          image: `${MEDIA}/05-devices.png`,
          audio: `${MEDIA}/05-devices.mp3`,
          narration:
            "Your account can be signed in on one device at a time. Signing in on another device signs this one out. This Android phone is the current device. It can unlock the door, and it was added Sunday, November 15.",
          hotspots: [
            {
              id: "rule",
              label: "One device",
              insight:
                "Your account can be signed in on one device at a time. Signing in on another device signs this one out.",
              top: 14.0,
              left: 3.9,
              width: 85.9,
              height: 5.1,
            },
            {
              id: "phone",
              label: "This device",
              insight:
                "This Android phone is the current device. It can unlock the door, and it was added Sunday, November 15.",
              top: 20.2,
              left: 5.5,
              width: 89.0,
              height: 9.7,
            },
          ],
        },
      ],
    },
    {
      id: "membership",
      label: "Membership",
      frames: [
        {
          id: "membership",
          label: "Membership",
          image: `${MEDIA}/03-membership.png`,
          audio: `${MEDIA}/03-membership.mp3`,
          narration:
            "Membership shows Premium, 109 dollars a month, paid through July 18, 2027. It is not billed automatically. Upgrades start now. You pay only the difference for the rest of this month. Downgrades start when your membership renews. Choosing a plan also turns on monthly renewal from your paid-through date. You can switch to Basic at 59 dollars a month, or keep Premium and renew monthly.",
          hotspots: [
            {
              id: "current",
              label: "Premium",
              insight:
                "Membership shows Premium, 109 dollars a month, paid through July 18, 2027. It is not billed automatically.",
              top: 15.2,
              left: 5.5,
              width: 89.0,
              height: 8.4,
            },
            {
              id: "rules",
              label: "Change plan",
              insight:
                "Upgrades start now. You pay only the difference for the rest of this month. Downgrades start when your membership renews. Choosing a plan also turns on monthly renewal from your paid-through date.",
              top: 25.9,
              left: 3.8,
              width: 81.7,
              height: 11.4,
            },
            {
              id: "basic",
              label: "Basic",
              insight: "You can switch to Basic at 59 dollars a month.",
              top: 37.9,
              left: 5.5,
              width: 89.0,
              height: 5.3,
            },
            {
              id: "keep",
              label: "Keep Premium",
              insight: "Or keep Premium and renew monthly.",
              top: 44.6,
              left: 5.5,
              width: 89.0,
              height: 5.4,
            },
          ],
        },
        {
          id: "switch",
          label: "Switch to Basic",
          image: `${MEDIA}/04-membership-change-plan.png`,
          audio: `${MEDIA}/04-membership-change-plan.mp3`,
          narration:
            "Switch to Basic. Nothing is due today. Billing starts on July 18, 2027, at 59 dollars a month, and your card is saved for then. Confirm with Switch to Basic on July 18, 2027, or tap Back.",
          hotspots: [
            {
              id: "due",
              label: "Nothing due today",
              insight:
                "Switch to Basic. Nothing is due today. Billing starts on July 18, 2027, at 59 dollars a month, and your card is saved for then.",
              top: 25.9,
              left: 3.9,
              width: 90.6,
              height: 12.3,
            },
            {
              id: "confirm",
              label: "Switch on July 18",
              insight: "Confirm with Switch to Basic on July 18, 2027.",
              top: 39.8,
              left: 5.9,
              width: 88.1,
              height: 5.3,
            },
            {
              id: "back",
              label: "Back",
              insight: "Or tap Back.",
              top: 46.9,
              left: 5.5,
              width: 89.0,
              height: 4.6,
            },
          ],
        },
      ],
    },
    {
      id: "account",
      label: "Account",
      frames: [
        {
          id: "account",
          label: "Account",
          image: `${MEDIA}/06-account.png`,
          audio: `${MEDIA}/06-account.mp3`,
          narration:
            "Deleting this account signs this phone out and cancels a paid membership at the end of the period. This cannot be undone. Delete account is the button.",
          hotspots: [
            {
              id: "warning",
              label: "Cannot be undone",
              insight:
                "Deleting this account signs this phone out and cancels a paid membership at the end of the period. This cannot be undone.",
              top: 14.0,
              left: 3.9,
              width: 88.9,
              height: 6.6,
            },
            {
              id: "delete",
              label: "Delete account",
              insight: "Delete account is the button.",
              top: 22.3,
              left: 5.5,
              width: 89.0,
              height: 4.6,
            },
          ],
        },
        {
          id: "confirm",
          label: "Confirm",
          image: `${MEDIA}/07-delete-account-confirm.png`,
          audio: `${MEDIA}/07-delete-account-confirm.mp3`,
          narration:
            "Type your email to confirm. It's filled in. Delete my account finishes it. Keep my account leaves everything as it is.",
          hotspots: [
            {
              id: "email",
              label: "Type your email",
              insight: "Type your email to confirm. It's filled in.",
              top: 20.4,
              left: 3.9,
              width: 90.6,
              height: 9.1,
            },
            {
              id: "delete",
              label: "Delete my account",
              insight: "Delete my account finishes it.",
              top: 31.7,
              left: 5.5,
              width: 89.0,
              height: 4.9,
            },
            {
              id: "keep",
              label: "Keep my account",
              insight: "Keep my account leaves everything as it is.",
              top: 39.0,
              left: 5.5,
              width: 89.0,
              height: 4.8,
            },
          ],
        },
        {
          id: "signed-out",
          label: "Signed out",
          image: `${MEDIA}/08-after-sign-out.png`,
          audio: `${MEDIA}/08-after-sign-out.mp3`,
          narration:
            "You're signed out. You're back at sign in. Enter your email and password, create an account, email yourself a code, see the schedule, or reset a forgotten password.",
          hotspots: [
            {
              id: "sign-in",
              label: "Sign in",
              insight: "You're signed out. You're back at sign in.",
              top: 31.8,
              left: 4.0,
              width: 20.1,
              height: 4.1,
            },
            {
              id: "fields",
              label: "Email and password",
              insight: "Enter your email and password.",
              top: 36.5,
              left: 5.5,
              width: 89.0,
              height: 17.5,
            },
            {
              id: "create",
              label: "Create an account",
              insight: "Create an account.",
              top: 62.7,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
            {
              id: "links",
              label: "Code, schedule, password",
              insight:
                "Email yourself a code, see the schedule, or reset a forgotten password.",
              top: 70.5,
              left: 4.1,
              width: 90.4,
              height: 17.4,
            },
          ],
        },
      ],
    },
  ],
};
