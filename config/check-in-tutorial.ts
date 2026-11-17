import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/check-in";

export const CHECK_IN_CHAPTER: TutorialChapter = {
  id: "check-in",
  label: "Check in",
  intro: "From home, tap Check in to show your code at the front desk.",
  steps: [
    {
      id: "check-in",
      label: "Check in",
      frames: [
        {
          id: "check-in-code",
          label: "Code",
          image: `${MEDIA}/01-check-in-code.png`,
          audio: `${MEDIA}/01-check-in-code.mp3`,
          narration:
            "From home, tap Check in. Hold this code up at the front desk. It refreshes on its own, about every 60 seconds, so a screenshot will not scan. Your name is under the code.",
          hotspots: [
            {
              id: "code",
              label: "Check-in code",
              insight: "Hold this code up at the front desk.",
              top: 19.5,
              left: 13.5,
              width: 73,
              height: 33,
            },
            {
              id: "refresh",
              label: "Refreshes automatically",
              insight:
                "It refreshes on its own, about every 60 seconds, so a screenshot will not scan.",
              top: 57.8,
              left: 25,
              width: 50,
              height: 2.6,
            },
            {
              id: "name",
              label: "Your name",
              insight: "Your name is under the code.",
              top: 53.8,
              left: 30,
              width: 40,
              height: 3.4,
            },
          ],
        },
      ],
    },
  ],
};
