import type {
  TutorialChapter,
  TutorialHotspot,
} from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/book-a-court";

const SUMMARY_TOP = 81;

function summary(insight: string): TutorialHotspot {
  return {
    id: "pay-and-book",
    label: "Pay and book",
    insight,
    top: SUMMARY_TOP,
    left: 5.9,
    width: 88.2,
    height: 9,
  };
}

export const BOOK_A_COURT_CHAPTER: TutorialChapter = {
  id: "book-a-court",
  label: "Book a court",
  intro:
    "Pick a day, a court, and a start time, choose how long, then pay and book.",
  steps: [
    {
      id: "pick",
      label: "Pick a court",
      frames: [
        {
          id: "courts",
          label: "Courts",
          image: `${MEDIA}/01-courts.png`,
          audio: `${MEDIA}/01-courts.mp3`,
          narration:
            "Open Play, then Courts. Your rate is on the screen. Here it is 10 dollars an hour, with 3 free hours left that day. Book 1 to 3 hours, up to 30 days ahead. Pick the day, then the court.",
          hotspots: [
            {
              id: "courts-tab",
              label: "Courts",
              insight: "Open Play, then Courts.",
              top: 17.6,
              left: 36,
              width: 28,
              height: 4.9,
            },
            {
              id: "rate",
              label: "Your rate",
              insight:
                "Your rate is on the screen. Here it is 10 dollars an hour, with 3 free hours left that day.",
              top: 28.4,
              left: 5.5,
              width: 82,
              height: 3,
            },
            {
              id: "limits",
              label: "1 to 3 hours",
              insight: "Book 1 to 3 hours, up to 30 days ahead.",
              top: 32,
              left: 5.5,
              width: 60,
              height: 2.8,
            },
            {
              id: "day",
              label: "The day",
              insight: "Pick the day.",
              top: 35.6,
              left: 5.5,
              width: 89,
              height: 5.6,
            },
            {
              id: "court",
              label: "The court",
              insight: "Then the court.",
              top: 42.3,
              left: 5.5,
              width: 78,
              height: 12,
            },
          ],
        },
        {
          id: "start-time",
          label: "Start time",
          image: `${MEDIA}/02-slot-selected.png`,
          audio: `${MEDIA}/02-slot-selected.mp3`,
          narration:
            "Tap a start time. Court 1 at 10 AM is one hour, so the button says pay 10 dollars and book.",
          hotspots: [
            {
              id: "start",
              label: "10:00 AM",
              insight: "Tap a start time. Court 1 at 10 AM is one hour.",
              top: 61.7,
              left: 5.5,
              width: 22,
              height: 5.7,
            },
            summary("So the button says pay 10 dollars and book."),
          ],
        },
      ],
    },
    {
      id: "how-long",
      label: "How long",
      frames: [
        {
          id: "one-hour",
          label: "1 hour",
          image: `${MEDIA}/03-slot-selected-scrolled.png`,
          audio: `${MEDIA}/03-slot-selected-scrolled.mp3`,
          narration:
            "Scroll to How long. One hour is selected. Your court is held for 15 minutes while you pay. Cancel at least 24 hours before the start for a full refund. After that, cancelling is not refunded.",
          hotspots: [
            {
              id: "how-long",
              label: "How long",
              insight: "Scroll to How long. One hour is selected.",
              top: 58.4,
              left: 5.5,
              width: 58,
              height: 9.2,
            },
            {
              id: "refund",
              label: "Hold and refund",
              insight:
                "Your court is held for 15 minutes while you pay. Cancel at least 24 hours before the start for a full refund. After that, cancelling is not refunded.",
              top: 68.6,
              left: 5.5,
              width: 89,
              height: 6,
            },
          ],
        },
        {
          id: "two-hours",
          label: "2 hours",
          image: `${MEDIA}/04-two-hours.png`,
          audio: `${MEDIA}/04-two-hours.mp3`,
          narration:
            "Tap 2 hours. The time and the price both update. Court 1, 10 AM to noon, 20 dollars.",
          hotspots: [
            {
              id: "two-hours",
              label: "2 hours",
              insight: "Tap 2 hours.",
              top: 62,
              left: 25.2,
              width: 18.3,
              height: 5.5,
            },
            summary(
              "The time and the price both update. Court 1, 10 AM to noon, 20 dollars.",
            ),
          ],
        },
      ],
    },
    {
      id: "pay",
      label: "Pay",
      frames: [
        {
          id: "payment",
          label: "Payment",
          image: `${MEDIA}/05-payment.png`,
          audio: `${MEDIA}/05-payment.mp3`,
          narration:
            "Tap Pay and book. Choose how you want to pay. Card is the usual one.",
          hotspots: [
            {
              id: "card",
              label: "Card",
              insight: "Choose how you want to pay. Card is the usual one.",
              top: 49.5,
              left: 4.8,
              width: 90.4,
              height: 6,
            },
          ],
        },
        {
          id: "card-entered",
          label: "Card",
          image: `${MEDIA}/06-card-entered.png`,
          audio: `${MEDIA}/06-card-entered.mp3`,
          narration:
            "Enter your card and your billing ZIP, then pay. You can save the card for next time.",
          hotspots: [
            {
              id: "card-info",
              label: "Your card",
              insight: "Enter your card.",
              top: 37.7,
              left: 4.8,
              width: 90.4,
              height: 12.2,
            },
            {
              id: "zip",
              label: "Billing ZIP",
              insight: "And your billing ZIP.",
              top: 60.2,
              left: 4.8,
              width: 90.4,
              height: 6.2,
            },
            {
              id: "pay",
              label: "Pay",
              insight: "Then pay.",
              top: 87.5,
              left: 4.8,
              width: 90.4,
              height: 5.6,
            },
            {
              id: "save",
              label: "Save the card",
              insight: "You can save the card for next time.",
              top: 67.7,
              left: 4.8,
              width: 78,
              height: 4,
            },
          ],
        },
        {
          id: "booked",
          label: "Booked",
          image: `${MEDIA}/07-booked.png`,
          audio: `${MEDIA}/07-booked.mp3`,
          narration:
            "When it goes through, the screen says your court is booked. That time comes off the list.",
          hotspots: [
            {
              id: "booked",
              label: "Your court is booked",
              insight:
                "When it goes through, the screen says your court is booked.",
              top: 42.2,
              left: 5.2,
              width: 34,
              height: 2.8,
            },
            {
              id: "times",
              label: "Start times",
              insight: "That time comes off the list.",
              top: 58.8,
              left: 5.5,
              width: 89,
              height: 18.4,
            },
          ],
        },
      ],
    },
  ],
};
