import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/account-recovery";

export const ACCOUNT_RECOVERY_CHAPTER: TutorialChapter = {
  id: "account-recovery",
  label: "Account recovery",
  intro:
    "Set a new password from an email link, or set one for an account the club made for you.",
  steps: [
    {
      id: "reset",
      label: "Reset",
      frames: [
        {
          id: "new-password",
          label: "New password",
          image: `${MEDIA}/01-reset-from-link.png`,
          audio: `${MEDIA}/01-reset-from-link.mp3`,
          narration:
            "Open the reset link from your email and the app asks you to choose a new password. Type it, then tap Save password.",
          hotspots: [
            {
              id: "title",
              label: "Choose a new password",
              insight:
                "Open the reset link from your email and the app asks you to choose a new password.",
              top: 16.9,
              left: 4.0,
              width: 61.9,
              height: 4.1,
            },
            {
              id: "field",
              label: "New password",
              insight: "Type it.",
              top: 21.5,
              left: 5.8,
              width: 88.4,
              height: 8.3,
            },
            {
              id: "save",
              label: "Save password",
              insight: "Then tap Save password.",
              top: 31.3,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
          ],
        },
        {
          id: "not-valid",
          label: "Not valid",
          image: `${MEDIA}/02-reset-invalid-link.png`,
          audio: `${MEDIA}/02-reset-invalid-link.mp3`,
          narration:
            "If the link doesn't work, it says that code is not valid. Ask for a new one from sign in, or from the front desk.",
          hotspots: [
            {
              id: "error",
              label: "Code is not valid",
              insight:
                "If the link doesn't work, it says that code is not valid. Ask for a new one from sign in, or from the front desk.",
              top: 30.5,
              left: 3.9,
              width: 36.8,
              height: 3.0,
            },
          ],
        },
        {
          id: "not-sent",
          label: "Email not sent",
          image: `${MEDIA}/04-email-code-not-sent-email-off-in-test.png`,
          audio: `${MEDIA}/04-email-code-not-sent-email-off-in-test.mp3`,
          narration:
            "If the app can't send the email, sign in says the email could not be sent. Ask the front desk for a code instead.",
          hotspots: [
            {
              id: "error",
              label: "Email could not be sent",
              insight:
                "If the app can't send the email, sign in says the email could not be sent. Ask the front desk for a code instead.",
              top: 54.7,
              left: 3.9,
              width: 46.4,
              height: 3.0,
            },
          ],
        },
      ],
    },
    {
      id: "set-up",
      label: "Set up",
      frames: [
        {
          id: "set-password",
          label: "Set your password",
          image: `${MEDIA}/03-claim-account.png`,
          audio: `${MEDIA}/03-claim-account.mp3`,
          narration:
            "If the club set up your account for you, your invite link opens Set your password. Choose one and tap Save password.",
          hotspots: [
            {
              id: "title",
              label: "Set your password",
              insight:
                "If the club set up your account for you, your invite link opens Set your password.",
              top: 16.9,
              left: 4.0,
              width: 48.3,
              height: 4.2,
            },
            {
              id: "save",
              label: "Save password",
              insight: "Choose one and tap Save password.",
              top: 31.3,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
          ],
        },
      ],
    },
  ],
};
