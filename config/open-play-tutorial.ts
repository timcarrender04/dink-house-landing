import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/open-play";

export const OPEN_PLAY_CHAPTER: TutorialChapter = {
  id: "open-play",
  label: "Open play",
  intro:
    "Check in to join the line, play with friends, take a break, and report your scores.",
  steps: [
    {
      id: "line",
      label: "The line",
      frames: [
        {
          id: "not-checked-in",
          label: "Not checked in",
          image: `${MEDIA}/01-not-checked-in.png`,
          audio: `${MEDIA}/01-not-checked-in.mp3`,
          narration:
            "Open Open play from home. If you haven't checked in, it hasn't started for you yet. Check in at the front desk and you'll join the line. We'll send a notification when you're up.",
          hotspots: [
            {
              id: "check-in",
              label: "Check in at the desk",
              insight:
                "If you haven't checked in, it hasn't started for you yet. Check in at the front desk and you'll join the line.",
              top: 24.0,
              left: 5.5,
              width: 89.0,
              height: 6.1,
            },
            {
              id: "notify",
              label: "Notification",
              insight: "We'll send a notification when you're up.",
              top: 28.7,
              left: 5.5,
              width: 89.0,
              height: 3.8,
            },
          ],
        },
        {
          id: "in-line",
          label: "In line",
          image: `${MEDIA}/02-in-line.png`,
          audio: `${MEDIA}/02-in-line.mp3`,
          narration:
            "Once you're in, you see your place. Here you're number 1, so you're next. Watch for your court. You can take a 20-minute break, see who's in line and who's playing, play with friends, or leave the line.",
          hotspots: [
            {
              id: "place",
              label: "Your place",
              insight:
                "Once you're in, you see your place. Here you're number 1, so you're next. Watch for your court.",
              top: 22.6,
              left: 5.5,
              width: 89.0,
              height: 13.7,
            },
            {
              id: "break",
              label: "Take a break",
              insight: "You can take a 20-minute break.",
              top: 36.9,
              left: 5.5,
              width: 89.0,
              height: 3.8,
            },
            {
              id: "who",
              label: "Who's in line",
              insight: "See who's in line and who's playing.",
              top: 59.2,
              left: 3.9,
              width: 90.6,
              height: 24.3,
            },
            {
              id: "friends",
              label: "Play with friends",
              insight: "Play with friends.",
              top: 52.8,
              left: 5.5,
              width: 89.0,
              height: 3.8,
            },
            {
              id: "leave",
              label: "Leave the line",
              insight: "Or leave the line.",
              top: 87.0,
              left: 5.5,
              width: 89.0,
              height: 3.2,
            },
          ],
        },
        {
          id: "break",
          label: "Break",
          image: `${MEDIA}/05-on-break.png`,
          audio: `${MEDIA}/05-on-break.mp3`,
          narration:
            "On a break, a timer counts down. Your spot is held until the time on the screen. Tap I'm back when you're ready to play.",
          hotspots: [
            {
              id: "timer",
              label: "Timer",
              insight: "On a break, a timer counts down.",
              top: 22.6,
              left: 5.5,
              width: 89.0,
              height: 8.5,
            },
            {
              id: "held",
              label: "Spot held",
              insight: "Your spot is held until the time on the screen.",
              top: 31.8,
              left: 5.5,
              width: 89.0,
              height: 5.5,
            },
            {
              id: "back",
              label: "I'm back",
              insight: "Tap I'm back when you're ready to play.",
              top: 37.8,
              left: 10.0,
              width: 80.0,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "friends",
      label: "Play with friends",
      frames: [
        {
          id: "friends",
          label: "Friends",
          image: `${MEDIA}/03-play-with-friends-p1.png`,
          audio: `${MEDIA}/03-play-with-friends.mp3`,
          narration:
            "Tap Play with friends. Pick 1 partner, or 3 if you want a four. They can be on a court right now. You'll go up together once you're all off.",
          hotspots: [
            {
              id: "panel",
              label: "Play with friends",
              insight:
                "Tap Play with friends. They can be on a court right now. You'll go up together once you're all off.",
              top: 52.8,
              left: 5.5,
              width: 89.0,
              height: 8.1,
            },
            {
              id: "pick",
              label: "Pick 1 or 3",
              insight: "Pick 1 partner, or 3 if you want a four.",
              top: 62.1,
              left: 5.5,
              width: 89.0,
              height: 33.6,
            },
          ],
        },
        {
          id: "more-friends",
          label: "More",
          image: `${MEDIA}/03-play-with-friends-p2.png`,
          audio: `${MEDIA}/03-play-with-friends-2.mp3`,
          narration:
            "Here's the rest of the list. Pick one partner, or three for a four. Cancel if you change your mind.",
          hotspots: [
            {
              id: "list",
              label: "The rest of the list",
              insight: "Here's the rest of the list.",
              top: 15.1,
              left: 5.5,
              width: 89.0,
              height: 70.1,
            },
            {
              id: "pick",
              label: "Pick 1 or 3",
              insight: "Pick one partner, or three for a four.",
              top: 87.5,
              left: 10.0,
              width: 80.0,
              height: 5.5,
            },
            {
              id: "cancel",
              label: "Cancel",
              insight: "Cancel if you change your mind.",
              top: 94.3,
              left: 10.0,
              width: 80.0,
              height: 5.0,
            },
          ],
        },
        {
          id: "partner",
          label: "Partner",
          image: `${MEDIA}/04-friend-picked.png`,
          audio: `${MEDIA}/04-friend-picked.mp3`,
          narration: "Tap a name, then Invite as my partner.",
          hotspots: [
            {
              id: "name",
              label: "Aisha Bello",
              insight: "Tap a name.",
              top: 15.6,
              left: 10.0,
              width: 80.0,
              height: 5.2,
            },
            {
              id: "invite",
              label: "Invite as my partner",
              insight: "Then Invite as my partner.",
              top: 46.5,
              left: 10.0,
              width: 80.0,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "score",
      label: "Your game",
      frames: [
        {
          id: "on-court",
          label: "On court",
          image: `${MEDIA}/06-youre-on-court.png`,
          audio: `${MEDIA}/06-youre-on-court.mp3`,
          narration:
            "When it's your game, the card turns green. You're on Court 1, with your partner and the other pair. When the game is over, tap Report the score.",
          hotspots: [
            {
              id: "card",
              label: "Court 1",
              insight:
                "When it's your game, the card turns green. You're on Court 1, with your partner and the other pair.",
              top: 22.6,
              left: 5.5,
              width: 89.0,
              height: 23.4,
            },
            {
              id: "report",
              label: "Report the score",
              insight: "When the game is over, tap Report the score.",
              top: 47.4,
              left: 10.0,
              width: 80.0,
              height: 5.7,
            },
          ],
        },
        {
          id: "score-pad",
          label: "Score pad",
          image: `${MEDIA}/07-report-score-p1.png`,
          audio: `${MEDIA}/07-report-score.mp3`,
          narration:
            "Enter the final score for both sides. Plus and minus change the numbers.",
          hotspots: [
            {
              id: "sides",
              label: "Both sides",
              insight:
                "Enter the final score for both sides. Plus and minus change the numbers.",
              top: 22.7,
              left: 5.5,
              width: 89.0,
              height: 16.5,
            },
          ],
        },
        {
          id: "leave",
          label: "Leave",
          image: `${MEDIA}/07-report-score-p2.png`,
          audio: `${MEDIA}/07-report-score-2.mp3`,
          narration:
            "Same score pad. Leave the line is at the bottom if you're done for the day.",
          hotspots: [
            {
              id: "pad",
              label: "Score pad",
              insight: "Same score pad.",
              top: 15.9,
              left: 5.5,
              width: 89.0,
              height: 27.7,
            },
            {
              id: "leave",
              label: "Leave the line",
              insight:
                "Leave the line is at the bottom if you're done for the day.",
              top: 90.3,
              left: 5.5,
              width: 89.0,
              height: 3.2,
            },
          ],
        },
        {
          id: "entered",
          label: "11 to 7",
          image: `${MEDIA}/08-score-entered.png`,
          audio: `${MEDIA}/08-score-entered.mp3`,
          narration: "At 11 to 7, Send score lights up. Tap it.",
          hotspots: [
            {
              id: "score",
              label: "11 to 7",
              insight: "At 11 to 7.",
              top: 15.9,
              left: 5.5,
              width: 89.0,
              height: 16.4,
            },
            {
              id: "send",
              label: "Send score",
              insight: "Send score lights up. Tap it.",
              top: 32.3,
              left: 10.0,
              width: 80.0,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "next",
      label: "Next game",
      frames: [
        {
          id: "next-game",
          label: "Next game",
          image: `${MEDIA}/09-score-sent-p1.png`,
          audio: `${MEDIA}/09-score-sent.mp3`,
          narration:
            "Once the score is sent, the next game is up. Same court, new partners. Report that score the same way when you're done.",
          hotspots: [
            {
              id: "card",
              label: "Next game",
              insight:
                "Once the score is sent, the next game is up. Same court, new partners.",
              top: 15.7,
              left: 5.5,
              width: 89.0,
              height: 23.5,
            },
            {
              id: "report",
              label: "Report the score",
              insight: "Report that score the same way when you're done.",
              top: 40.5,
              left: 10.0,
              width: 80.0,
              height: 5.7,
            },
          ],
        },
        {
          id: "courts",
          label: "Courts",
          image: `${MEDIA}/09-score-sent-p2.png`,
          audio: `${MEDIA}/09-score-sent-2.mp3`,
          narration:
            "Same next game. You can see the other courts, and leave the line when you're finished.",
          hotspots: [
            {
              id: "courts",
              label: "Other courts",
              insight: "You can see the other courts.",
              top: 62.6,
              left: 4.0,
              width: 90.5,
              height: 24.3,
            },
            {
              id: "leave",
              label: "Leave the line",
              insight: "And leave the line when you're finished.",
              top: 90.3,
              left: 5.5,
              width: 89.0,
              height: 3.2,
            },
          ],
        },
        {
          id: "left",
          label: "Left the line",
          image: `${MEDIA}/10-left-line-survey-offered.png`,
          audio: `${MEDIA}/10-left-line-survey-offered.mp3`,
          narration:
            "Leave the line when you're finished for the day. The app says you've left, and you can check in at the desk again to rejoin. If it's asking how the night went, the survey takes about two minutes. Tap Take the survey.",
          hotspots: [
            {
              id: "left",
              label: "You've left",
              insight:
                "The app says you've left, and you can check in at the desk again to rejoin.",
              top: 77.7,
              left: 5.5,
              width: 89.0,
              height: 6.1,
            },
            {
              id: "survey",
              label: "Survey",
              insight:
                "If it's asking how the night went, the survey takes about two minutes.",
              top: 22.6,
              left: 5.5,
              width: 89.0,
              height: 9.2,
            },
            {
              id: "take",
              label: "Take the survey",
              insight: "Tap Take the survey.",
              top: 32.3,
              left: 10.0,
              width: 80.0,
              height: 5.5,
            },
          ],
        },
      ],
    },
  ],
};
