import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/home";

export const HOME_CHAPTER: TutorialChapter = {
  id: "home",
  label: "Home",
  intro:
    "Once you are signed in, this is home. Your member card, the shortcuts, and the tabs along the bottom.",
  steps: [
    {
      id: "home",
      label: "Home",
      frames: [
        {
          id: "home-top",
          label: "Top",
          image: `${MEDIA}/01-home.png`,
          audio: `${MEDIA}/01-home.mp3`,
          narration:
            "Once you are signed in, this is home. Tuesday Night Ladder is open, Tuesdays at 6:30. Tap Sign up if you want in. Your member card shows your name, your email, your DHL rating, and your membership through date. Unlock the door works while the club is open. Check in shows your code at the desk. Book a court reserves your next game.",
          hotspots: [
            {
              id: "ladder",
              label: "Tuesday Night Ladder",
              insight:
                "Tuesday Night Ladder is open, Tuesdays at 6:30. Tap Sign up if you want in.",
              top: 15.2,
              left: 5.5,
              width: 89,
              height: 21,
            },
            {
              id: "member-card",
              label: "Member card",
              insight:
                "Your member card shows your name, your email, your DHL rating, and your membership through date.",
              top: 37.3,
              left: 5.9,
              width: 88.2,
              height: 17,
            },
            {
              id: "unlock",
              label: "Unlock the door",
              insight: "Unlock the door works while the club is open.",
              top: 55.5,
              left: 5.8,
              width: 88.2,
              height: 14.7,
            },
            {
              id: "check-in",
              label: "Check in",
              insight: "Check in shows your code at the desk.",
              top: 71.5,
              left: 5.9,
              width: 42.4,
              height: 16,
            },
            {
              id: "book",
              label: "Book a court",
              insight: "Book a court reserves your next game.",
              top: 71.5,
              left: 51.5,
              width: 42.6,
              height: 16,
            },
          ],
        },
        {
          id: "home-more",
          label: "More",
          image: `${MEDIA}/02-home-scrolled.png`,
          audio: `${MEDIA}/02-home-scrolled.mp3`,
          narration:
            "Keep going. Schedule is clinics, leagues, and events. Open play shows what is live right now. If nothing is live, it says so. Along the bottom: Home, Play, Social, and Profile. The rest of this tour is the shortcuts on this screen, and Play.",
          hotspots: [
            {
              id: "schedule",
              label: "Schedule",
              insight: "Schedule is clinics, leagues, and events.",
              top: 70,
              left: 5.9,
              width: 42.4,
              height: 16,
            },
            {
              id: "open-play",
              label: "Open play",
              insight:
                "Open play shows what is live right now. If nothing is live, it says so.",
              top: 70,
              left: 51.5,
              width: 42.6,
              height: 16,
            },
            {
              id: "tabs",
              label: "Home, Play, Social, and Profile",
              insight:
                "Along the bottom: Home, Play, Social, and Profile. The rest of this tour is the shortcuts on this screen, and Play.",
              top: 91.5,
              left: 2,
              width: 96,
              height: 7,
            },
          ],
        },
      ],
    },
  ],
};
