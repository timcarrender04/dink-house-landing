import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/open-play-survey";

export const OPEN_PLAY_SURVEY_CHAPTER: TutorialChapter = {
  id: "open-play-survey",
  label: "Open play survey",
  intro:
    "After open play, home can ask how it went. About two minutes, on the paddle stack and your level. Step 3 currently stops on a render error.",
  steps: [
    {
      id: "offer",
      label: "The offer",
      frames: [
        {
          id: "banner",
          label: "Home",
          image: `${MEDIA}/00-home-survey-banner.png`,
          audio: `${MEDIA}/00-home-survey-banner.mp3`,
          narration:
            "After open play, home can ask how it went. This one is for DUPR Open Play. It takes about two minutes, on the paddle stack and your level. Tap Take the survey.",
          hotspots: [
            {
              id: "banner",
              label: "How open play went",
              insight:
                "After open play, home can ask how it went. This one is for DUPR Open Play. It takes about two minutes, on the paddle stack and your level.",
              top: 16.5,
              left: 5.5,
              width: 89,
              height: 23,
            },
            {
              id: "take",
              label: "Take the survey",
              insight: "Tap Take the survey.",
              top: 30.5,
              left: 8.5,
              width: 83,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "paddle-stack",
      label: "Paddle stack",
      frames: [
        {
          id: "start",
          label: "Questions",
          image: `${MEDIA}/01-survey-start-p1.png`,
          audio: `${MEDIA}/01-survey-start.mp3`,
          narration:
            "It's 1 of 4, and it names the session. First is the paddle stack. Rate whether the rotation felt fair, from not at all to completely. Say if the wait between games felt too long, about right, or short. Say whether you felt skipped. Then rate how often you knew when you were up.",
          hotspots: [
            {
              id: "step",
              label: "1 of 4",
              insight: "It's 1 of 4, and it names the session.",
              top: 28.6,
              left: 5.5,
              width: 80,
              height: 3,
            },
            {
              id: "title",
              label: "Paddle stack",
              insight: "First is the paddle stack.",
              top: 32.4,
              left: 5.5,
              width: 70,
              height: 3.2,
            },
            {
              id: "rotation",
              label: "Rotation",
              insight:
                "Rate whether the rotation felt fair, from not at all to completely.",
              top: 36.5,
              left: 5.5,
              width: 89,
              height: 14,
            },
            {
              id: "wait",
              label: "Wait",
              insight:
                "Say if the wait between games felt too long, about right, or short.",
              top: 52.2,
              left: 5.5,
              width: 89,
              height: 12.5,
            },
            {
              id: "skipped",
              label: "Skipped",
              insight: "Say whether you felt skipped.",
              top: 65.2,
              left: 5.5,
              width: 89,
              height: 12,
            },
            {
              id: "knew",
              label: "Knew when you were up",
              insight: "Then rate how often you knew when you were up.",
              top: 78,
              left: 5.5,
              width: 89,
              height: 14,
            },
          ],
        },
        {
          id: "rest",
          label: "Rest of the page",
          image: `${MEDIA}/01-survey-start-p2.png`,
          audio: `${MEDIA}/01-survey-start-2.mp3`,
          narration:
            "Keep going. Rate how easy it was to report and confirm scores. Say whether playing with friends worked, or that you didn't use it. Last on this page: digital stack, or paddles on the rack. The button stays quiet until every question has an answer.",
          hotspots: [
            {
              id: "scores",
              label: "Scores",
              insight: "Rate how easy it was to report and confirm scores.",
              top: 18,
              left: 5.5,
              width: 89,
              height: 13,
            },
            {
              id: "friends",
              label: "Playing with friends",
              insight:
                "Say whether playing with friends worked, or that you didn't use it.",
              top: 31,
              left: 5.5,
              width: 89,
              height: 14,
            },
            {
              id: "stack",
              label: "Digital or paddles",
              insight:
                "Last on this page: digital stack, or paddles on the rack.",
              top: 47,
              left: 5.5,
              width: 89,
              height: 14,
            },
            {
              id: "quiet",
              label: "Answer each question",
              insight:
                "The button stays quiet until every question has an answer.",
              top: 89.2,
              left: 5.9,
              width: 88.2,
              height: 5.5,
            },
          ],
        },
        {
          id: "answered",
          label: "Answered",
          image: `${MEDIA}/02-step1-answered.png`,
          audio: `${MEDIA}/02-step1-answered.mp3`,
          narration: "Answers light up as you tap them.",
          hotspots: [
            {
              id: "lit",
              label: "Selected answers",
              insight: "Answers light up as you tap them.",
              top: 36.5,
              left: 5.5,
              width: 89,
              height: 52,
            },
          ],
        },
        {
          id: "next",
          label: "Next",
          image: `${MEDIA}/03-step1-bottom.png`,
          audio: `${MEDIA}/03-step1-bottom.mp3`,
          narration: "When the page is filled in, Next turns on. Tap it.",
          hotspots: [
            {
              id: "next",
              label: "Next",
              insight: "When the page is filled in, Next turns on. Tap it.",
              top: 89.3,
              left: 5.9,
              width: 88.2,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "level",
      label: "Your level",
      frames: [
        {
          id: "level",
          label: "Your level",
          image: `${MEDIA}/04-step2.png`,
          audio: `${MEDIA}/04-step2.mp3`,
          narration:
            "Step 2 of 4 is your level. Yours shows here, 3.2 Intermediate. Say if that feels too low, about right, or too high. Rate how even your games were, from lopsided to even. Then say whether the way your level moved today made sense. Back returns to the paddle stack.",
          hotspots: [
            {
              id: "step",
              label: "2 of 4",
              insight: "Step 2 of 4 is your level.",
              top: 28.6,
              left: 5.5,
              width: 80,
              height: 7,
            },
            {
              id: "yours",
              label: "3.2 Intermediate",
              insight: "Yours shows here, 3.2 Intermediate.",
              top: 35.6,
              left: 5.5,
              width: 80,
              height: 3.5,
            },
            {
              id: "feels",
              label: "How the level feels",
              insight:
                "Say if that feels too low, about right, or too high.",
              top: 39.5,
              left: 5.5,
              width: 89,
              height: 13,
            },
            {
              id: "even",
              label: "Even games",
              insight:
                "Rate how even your games were, from lopsided to even.",
              top: 52.5,
              left: 5.5,
              width: 89,
              height: 14,
            },
            {
              id: "moved",
              label: "How the level moved",
              insight:
                "Then say whether the way your level moved today made sense.",
              top: 68.2,
              left: 5.5,
              width: 89,
              height: 13,
            },
            {
              id: "back",
              label: "Back",
              insight: "Back returns to the paddle stack.",
              top: 89.5,
              left: 5.9,
              width: 88.2,
              height: 6,
            },
          ],
        },
        {
          id: "level-answered",
          label: "Filled in",
          image: `${MEDIA}/05-step2-answered.png`,
          audio: `${MEDIA}/05-step2-answered.mp3`,
          narration: "Fill those in and Next turns on again.",
          hotspots: [
            {
              id: "next",
              label: "Next",
              insight: "Fill those in and Next turns on again.",
              top: 81.9,
              left: 5.9,
              width: 88.2,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "games",
      label: "Step 3 stops",
      frames: [
        {
          id: "crash",
          label: "Invalid time value",
          image: `${MEDIA}/06-step3-CRASH-invalid-time-value.png`,
          audio: `${MEDIA}/06-step3-CRASH-invalid-time-value.mp3`,
          narration:
            "Step 3 stops. The app shows a render error, invalid time value, instead of the next questions. Dismiss closes it. The rest of the survey isn't on screen.",
          hotspots: [
            {
              id: "error",
              label: "Invalid time value",
              insight:
                "The app shows a render error, invalid time value, instead of the next questions.",
              top: 11.2,
              left: 4,
              width: 92,
              height: 8,
            },
            {
              id: "dismiss",
              label: "Dismiss",
              insight: "Dismiss closes it. The rest of the survey isn't on screen.",
              top: 93.2,
              left: 2,
              width: 30,
              height: 4,
            },
          ],
        },
      ],
    },
  ],
};
