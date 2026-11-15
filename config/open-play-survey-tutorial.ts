import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/open-play-survey";

export const OPEN_PLAY_SURVEY_CHAPTER: TutorialChapter = {
  id: "open-play-survey",
  label: "Open play survey",
  intro:
    "The short survey after open play: the paddle stack first, then your level.",
  steps: [
    {
      id: "start",
      label: "Start",
      frames: [
        {
          id: "banner",
          label: "Home banner",
          image: `${MEDIA}/00-home-survey-banner.png`,
          audio: `${MEDIA}/00-home-survey-banner.mp3`,
          narration:
            "After open play, home can ask how it went. This one is for DUPR Open Play. It takes about two minutes, on the paddle stack and your level. Tap Take the survey.",
          hotspots: [
            {
              id: "banner",
              label: "How it went",
              insight:
                "After open play, home can ask how it went. This one is for DUPR Open Play. It takes about two minutes, on the paddle stack and your level.",
              top: 18.4,
              left: 5.5,
              width: 89.0,
              height: 11.5,
            },
            {
              id: "take",
              label: "Take the survey",
              insight: "Tap Take the survey.",
              top: 30.5,
              left: 10.0,
              width: 80.0,
              height: 5.3,
            },
          ],
        },
        {
          id: "paddle-stack",
          label: "Paddle stack",
          image: `${MEDIA}/01-survey-start-p1.png`,
          audio: `${MEDIA}/01-survey-start.mp3`,
          narration:
            "It's 1 of 4, and it names the session. First is the paddle stack. Rate whether the rotation felt fair, from not at all to completely. Say if the wait between games felt too long, about right, or short. Say whether you felt skipped. Then rate how often you knew when you were up.",
          hotspots: [
            {
              id: "progress",
              label: "1 of 4",
              insight:
                "It's 1 of 4, and it names the session. First is the paddle stack.",
              top: 28.3,
              left: 4.1,
              width: 57.2,
              height: 7.3,
            },
            {
              id: "fair",
              label: "Rotation felt fair",
              insight:
                "Rate whether the rotation felt fair, from not at all to completely.",
              top: 37.9,
              left: 5.5,
              width: 89.0,
              height: 12.5,
            },
            {
              id: "wait",
              label: "Wait between games",
              insight:
                "Say if the wait between games felt too long, about right, or short.",
              top: 53.9,
              left: 5.5,
              width: 89.0,
              height: 8.1,
            },
            {
              id: "skipped",
              label: "Felt skipped",
              insight: "Say whether you felt skipped.",
              top: 66.7,
              left: 5.5,
              width: 89.0,
              height: 7.8,
            },
            {
              id: "knew",
              label: "Knew when you were up",
              insight: "Then rate how often you knew when you were up.",
              top: 79.4,
              left: 5.5,
              width: 89.0,
              height: 12.6,
            },
          ],
        },
        {
          id: "more",
          label: "More questions",
          image: `${MEDIA}/01-survey-start-p2.png`,
          audio: `${MEDIA}/01-survey-start-2.mp3`,
          narration:
            "Keep going. Rate how easy it was to report and confirm scores. Say whether playing with friends worked, or that you didn't use it. Last on this page: digital stack, or paddles on the rack. The button stays quiet until every question has an answer.",
          hotspots: [
            {
              id: "scores",
              label: "Reporting scores",
              insight: "Rate how easy it was to report and confirm scores.",
              top: 48.5,
              left: 5.5,
              width: 89.0,
              height: 12.2,
            },
            {
              id: "friends",
              label: "Playing with friends",
              insight:
                "Say whether playing with friends worked, or that you didn't use it.",
              top: 64.3,
              left: 5.5,
              width: 89.0,
              height: 7.9,
            },
            {
              id: "stack",
              label: "Digital or paddles",
              insight:
                "Last on this page: digital stack, or paddles on the rack.",
              top: 77.3,
              left: 5.5,
              width: 89.0,
              height: 3.5,
            },
            {
              id: "next",
              label: "Next",
              insight:
                "The button stays quiet until every question has an answer.",
              top: 89.3,
              left: 5.9,
              width: 88.1,
              height: 5.3,
            },
          ],
        },
      ],
    },
    {
      id: "answer",
      label: "Answer",
      frames: [
        {
          id: "answered",
          label: "Answered",
          image: `${MEDIA}/02-step1-answered.png`,
          audio: `${MEDIA}/02-step1-answered.mp3`,
          narration: "Answers light up as you tap them.",
          hotspots: [
            {
              id: "answers",
              label: "Your answers",
              insight: "Answers light up as you tap them.",
              top: 37.9,
              left: 5.5,
              width: 89.0,
              height: 38.4,
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
              id: "filled",
              label: "Filled in",
              insight: "When the page is filled in.",
              top: 19.6,
              left: 5.5,
              width: 89.0,
              height: 61.2,
            },
            {
              id: "next",
              label: "Next",
              insight: "Next turns on. Tap it.",
              top: 89.3,
              left: 5.9,
              width: 88.1,
              height: 5.3,
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
              id: "level",
              label: "3.2 Intermediate",
              insight:
                "Step 2 of 4 is your level. Yours shows here, 3.2 Intermediate.",
              top: 28.2,
              left: 3.8,
              width: 57.6,
              height: 10.8,
            },
            {
              id: "feels",
              label: "Level feels",
              insight: "Say if that feels too low, about right, or too high.",
              top: 41.1,
              left: 5.5,
              width: 89.0,
              height: 7.8,
            },
            {
              id: "even",
              label: "Even games",
              insight: "Rate how even your games were, from lopsided to even.",
              top: 53.9,
              left: 5.5,
              width: 89.0,
              height: 12.5,
            },
            {
              id: "moved",
              label: "Level moved",
              insight:
                "Then say whether the way your level moved today made sense.",
              top: 69.9,
              left: 5.5,
              width: 89.0,
              height: 7.8,
            },
            {
              id: "back",
              label: "Back",
              insight: "Back returns to the paddle stack.",
              top: 90.3,
              left: 5.5,
              width: 89.0,
              height: 3.3,
            },
          ],
        },
        {
          id: "level-answered",
          label: "Answered",
          image: `${MEDIA}/05-step2-answered.png`,
          audio: `${MEDIA}/05-step2-answered.mp3`,
          narration: "Fill those in and Next turns on again.",
          hotspots: [
            {
              id: "answers",
              label: "Filled in",
              insight: "Fill those in.",
              top: 41.1,
              left: 5.5,
              width: 89.0,
              height: 40.2,
            },
            {
              id: "next",
              label: "Next",
              insight: "And Next turns on again.",
              top: 81.8,
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
