import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/dhl";

export const DHL_CHAPTER: TutorialChapter = {
  id: "dhl",
  label: "My DHL",
  intro:
    "Your Dink House Level, how it has moved, and the games behind each change.",
  steps: [
    {
      id: "card",
      label: "On home",
      frames: [
        {
          id: "home-card",
          label: "My DHL",
          image: `${MEDIA}/01-home-card.png`,
          audio: `${MEDIA}/01-home-card.mp3`,
          narration:
            "When you have rated games, Home shows My DHL under your member card. This level is 2.97, up 0.98 over the last 3 months. The dashed part of the line is placement. See your timeline opens the chart. The DHL pill on the member card opens the same screen, and so does the level pill on Open play. Tutorial, at the top, opens this walkthrough.",
          hotspots: [
            {
              id: "tutorial",
              label: "Tutorial",
              insight: "Tutorial, at the top, opens this walkthrough.",
              top: 10.2,
              left: 76,
              width: 16,
              height: 4,
            },
            {
              id: "pill",
              label: "DHL 2.9 Beginner",
              insight:
                "The DHL pill on the member card opens the same screen.",
              top: 28.5,
              left: 10,
              width: 28,
              height: 4,
            },
            {
              id: "card",
              label: "My DHL",
              insight:
                "2.97, up 0.98 over the last 3 months. The dashed part of the line is placement. See your timeline opens the chart.",
              top: 35,
              left: 5,
              width: 90,
              height: 22,
            },
          ],
        },
      ],
    },
    {
      id: "timeline",
      label: "The timeline",
      frames: [
        {
          id: "timeline",
          label: "Level and chart",
          image: `${MEDIA}/02-timeline.png`,
          audio: `${MEDIA}/02-timeline.mp3`,
          narration:
            "My DHL shows 2.97, Beginner, up 0.98 all time. 8 rated games, started at 2.00, the club starting level. The chips are 1 month, 3 months, 6 months, 1 year, and All. All is selected. The line draws from left to right. A dashed stretch is placement, and the faint line at 3.0 is Intermediate. Under the chart, recent changes start with a lime W 11-6, who you played with and against, the date, and the level before and after.",
          hotspots: [
            {
              id: "level",
              label: "2.97 Beginner",
              insight:
                "2.97, Beginner, up 0.98 all time. 8 rated games, started at 2.00, the club starting level.",
              top: 13,
              left: 5,
              width: 90,
              height: 16,
            },
            {
              id: "chart",
              label: "The chart",
              insight:
                "1 month, 3 months, 6 months, 1 year, and All. The dashed stretch is placement. The faint line at 3.0 is Intermediate.",
              top: 30,
              left: 5,
              width: 90,
              height: 34,
            },
            {
              id: "changes",
              label: "Recent changes",
              insight:
                "A lime W 11-6, who you played with and against, the date, and the level before and after.",
              top: 69,
              left: 5,
              width: 90,
              height: 20,
            },
          ],
        },
        {
          id: "scrub",
          label: "Drag the chart",
          image: `${MEDIA}/03-scrub.png`,
          audio: `${MEDIA}/03-scrub.mp3`,
          narration:
            "Touch and drag the chart. The big number follows your finger. This point is 2.69, Friday, September 25, a win 11 to 9. Let go and the number returns to your level now.",
          hotspots: [
            {
              id: "value",
              label: "2.69",
              insight:
                "The big number follows your finger. This point is 2.69 on Friday, September 25.",
              top: 15,
              left: 6,
              width: 50,
              height: 12,
            },
            {
              id: "point",
              label: "W 11-9",
              insight: "The point on the line reads win 11 to 9.",
              top: 32,
              left: 8,
              width: 84,
              height: 28,
            },
          ],
        },
        {
          id: "list",
          label: "Wins and losses",
          image: `${MEDIA}/04-changes.png`,
          audio: `${MEDIA}/04-changes.mp3`,
          narration:
            "Keep scrolling the list. A win is a lime score, like W 11-6. A loss is outlined, L 4-11, and the change on the right can be down. Each row names who you played with and against, the day, and the level before and after.",
          hotspots: [
            {
              id: "wins",
              label: "Lime wins",
              insight:
                "A win is a lime score, with who you played with and against.",
              top: 20,
              left: 4,
              width: 92,
              height: 24,
            },
            {
              id: "loss",
              label: "L 4-11",
              insight:
                "A loss is outlined, and the change on the right can be down.",
              top: 61,
              left: 4,
              width: 92,
              height: 8,
            },
          ],
        },
      ],
    },
  ],
};
