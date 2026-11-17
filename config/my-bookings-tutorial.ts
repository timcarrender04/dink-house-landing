import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/my-bookings";

export const MY_BOOKINGS_CHAPTER: TutorialChapter = {
  id: "my-bookings",
  label: "My bookings",
  intro:
    "Your courts and sessions in one list, and how cancelling a court works.",
  steps: [
    {
      id: "list",
      label: "Your bookings",
      frames: [
        {
          id: "courts",
          label: "Courts",
          image: `${MEDIA}/01-my-bookings-p1.png`,
          audio: `${MEDIA}/01-my-bookings.mp3`,
          narration:
            "Play, then My bookings. Courts are at the top. This one is Court 1, 20 dollars, Monday from 10 to noon. Your sessions are listed under that.",
          hotspots: [
            {
              id: "tab",
              label: "My bookings",
              insight: "Play, then My bookings.",
              top: 17.5,
              left: 64.8,
              width: 28.1,
              height: 4.8,
            },
            {
              id: "court",
              label: "Court 1",
              insight:
                "Courts are at the top. This one is Court 1, 20 dollars, Monday from 10 to noon.",
              top: 33.9,
              left: 3.9,
              width: 90.6,
              height: 13.2,
            },
            {
              id: "sessions",
              label: "Sessions",
              insight: "Your sessions are listed under that.",
              top: 51.2,
              left: 3.9,
              width: 90.6,
              height: 23.6,
            },
          ],
        },
        {
          id: "more",
          label: "More",
          image: `${MEDIA}/01-my-bookings-p2.png`,
          audio: `${MEDIA}/01-my-bookings-2.mp3`,
          narration:
            "Keep scrolling. More open play, both clinics, and Saturday Round Robin. Everything here is booked.",
          hotspots: [
            {
              id: "clinics",
              label: "Both clinics",
              insight: "More open play, both clinics.",
              top: 30.6,
              left: 3.9,
              width: 90.6,
              height: 29.7,
            },
            {
              id: "round-robin",
              label: "Saturday Round Robin",
              insight: "And Saturday Round Robin. Everything here is booked.",
              top: 62.9,
              left: 3.9,
              width: 90.6,
              height: 8.1,
            },
          ],
        },
        {
          id: "past",
          label: "Past",
          image: `${MEDIA}/01-my-bookings-p3.png`,
          audio: `${MEDIA}/01-my-bookings-3.mp3`,
          narration:
            "Scroll to the bottom for Past and cancelled. The session you backed out of says You cancelled.",
          hotspots: [
            {
              id: "past",
              label: "Past and cancelled",
              insight: "Scroll to the bottom for Past and cancelled.",
              top: 72.3,
              left: 4.0,
              width: 36.7,
              height: 3.2,
            },
            {
              id: "cancelled",
              label: "You cancelled",
              insight: "The session you backed out of says You cancelled.",
              top: 79.7,
              left: 3.9,
              width: 90.6,
              height: 5.6,
            },
          ],
        },
      ],
    },
    {
      id: "cancel",
      label: "Cancel a court",
      frames: [
        {
          id: "confirm",
          label: "Confirm",
          image: `${MEDIA}/02-cancel-court-confirm.png`,
          audio: `${MEDIA}/02-cancel-court-confirm.mp3`,
          narration:
            "Tap Cancel reservation. Inside 24 hours of the start, the app tells you it is not refunded. Tap Yes, cancel it, or Keep it.",
          hotspots: [
            {
              id: "warning",
              label: "Not refunded",
              insight:
                "Inside 24 hours of the start, the app tells you it is not refunded.",
              top: 41.7,
              left: 3.9,
              width: 87.8,
              height: 3.2,
            },
            {
              id: "yes",
              label: "Yes, cancel it",
              insight: "Tap Yes, cancel it.",
              top: 46.3,
              left: 5.5,
              width: 89.0,
              height: 3.5,
            },
            {
              id: "keep",
              label: "Keep it",
              insight: "Or Keep it.",
              top: 52.8,
              left: 5.5,
              width: 89.0,
              height: 3.5,
            },
          ],
        },
      ],
    },
  ],
};
