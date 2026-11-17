import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/staff";

export const STAFF_CHAPTER: TutorialChapter = {
  id: "staff",
  label: "Staff",
  intro:
    "For staff accounts: the front desk, player chat, the court board, walk-ins, cameras, and the door.",
  steps: [
    {
      id: "desk",
      label: "Front desk",
      frames: [
        {
          id: "desk",
          label: "Front desk",
          image: `${MEDIA}/01-desk.png`,
          audio: `${MEDIA}/01-desk.mp3`,
          narration:
            "Staff accounts open on Front desk. It counts today's check-ins. Type a player's check-in code and tap Check in, or tap Scan a code. Along the bottom: Desk, Chat, Courts, Cameras, Door, and Account.",
          hotspots: [
            {
              id: "title",
              label: "Front desk",
              insight:
                "Staff accounts open on Front desk. It counts today's check-ins.",
              top: 8.1,
              left: 4.1,
              width: 30.0,
              height: 7.6,
            },
            {
              id: "code",
              label: "Check-in code",
              insight:
                "Type a player's check-in code and tap Check in, or tap Scan a code.",
              top: 15.9,
              left: 4.0,
              width: 90.5,
              height: 23.4,
            },
            {
              id: "tabs",
              label: "Desk to Account",
              insight:
                "Along the bottom: Desk, Chat, Courts, Cameras, Door, and Account.",
              top: 92.0,
              left: 1.0,
              width: 98.0,
              height: 5.8,
            },
          ],
        },
        {
          id: "checked-in",
          label: "Checked in",
          image: `${MEDIA}/02-desk-check-in.png`,
          audio: `${MEDIA}/02-desk-check-in.mp3`,
          narration:
            "After a check-in, the player shows in the list. Here it's Maria Garcia, Sunday at 12:31, Premium, for Sunday Open Play.",
          hotspots: [
            {
              id: "player",
              label: "Maria Garcia",
              insight:
                "After a check-in, the player shows in the list. Here it's Maria Garcia, Sunday at 12:31, Premium, for Sunday Open Play.",
              top: 39.8,
              left: 3.9,
              width: 90.6,
              height: 5.6,
            },
          ],
        },
        {
          id: "bad-code",
          label: "Bad code",
          image: `${MEDIA}/03-desk-bad-code.png`,
          audio: `${MEDIA}/03-desk-bad-code.mp3`,
          narration:
            "If the code isn't one of ours, it says so. That is not a Dink House check-in code.",
          hotspots: [
            {
              id: "code",
              label: "The code",
              insight: "If the code isn't one of ours, it says so.",
              top: 19.0,
              left: 5.8,
              width: 88.4,
              height: 5.3,
            },
            {
              id: "error",
              label: "Not a Dink House code",
              insight: "That is not a Dink House check-in code.",
              top: 39.8,
              left: 3.9,
              width: 63.2,
              height: 3.0,
            },
          ],
        },
        {
          id: "scan",
          label: "Scan",
          image: `${MEDIA}/04-desk-scan.png`,
          audio: `${MEDIA}/04-desk-scan.mp3`,
          narration:
            "Tap Scan a code and the camera opens. Point it at the code on the player's phone.",
          hotspots: [
            {
              id: "camera",
              label: "Camera is open",
              insight: "Tap Scan a code and the camera opens.",
              top: 33.7,
              left: 5.5,
              width: 89.0,
              height: 5.3,
            },
            {
              id: "preview",
              label: "The camera",
              insight: "Point it at the code on the player's phone.",
              top: 40.1,
              left: 5.8,
              width: 88.4,
              height: 26.4,
            },
          ],
        },
      ],
    },
    {
      id: "chat",
      label: "Chat",
      frames: [
        {
          id: "inbox",
          label: "Inbox",
          image: `${MEDIA}/05-chat-inbox-p1.png`,
          audio: `${MEDIA}/05-chat-inbox-p1.mp3`,
          narration:
            "Chat holds messages from players, and the club's group chats. Players are at the top. Here Maria asked a question. Group chats are under that. Message a player starts a new one.",
          hotspots: [
            {
              id: "title",
              label: "Chat",
              insight:
                "Chat holds messages from players, and the club's group chats.",
              top: 16.9,
              left: 4.0,
              width: 81.2,
              height: 6.5,
            },
            {
              id: "new",
              label: "Message a player",
              insight: "Message a player starts a new one.",
              top: 24.6,
              left: 5.5,
              width: 89.0,
              height: 5.2,
            },
            {
              id: "players",
              label: "Players",
              insight: "Players are at the top. Here Maria asked a question.",
              top: 20.1,
              left: 4.1,
              width: 90.4,
              height: 21.7,
            },
            {
              id: "groups",
              label: "Group chats",
              insight: "Group chats are under that.",
              top: 20.1,
              left: 4.1,
              width: 90.4,
              height: 70.2,
            },
          ],
        },
        {
          id: "groups",
          label: "Group chats",
          image: `${MEDIA}/05-chat-inbox-p2.png`,
          audio: `${MEDIA}/05-chat-inbox-p2.mp3`,
          narration: "Keep scrolling. Every session has its own group chat.",
          hotspots: [
            {
              id: "groups",
              label: "Session chats",
              insight: "Keep scrolling. Every session has its own group chat.",
              top: 9.0,
              left: 5.5,
              width: 89.0,
              height: 77.7,
            },
          ],
        },
        {
          id: "bottom",
          label: "Near the bottom",
          image: `${MEDIA}/05-chat-inbox-p3.png`,
          audio: `${MEDIA}/05-chat-inbox-p3.mp3`,
          narration:
            "Same list, near the bottom. The session chats keep going.",
          hotspots: [
            {
              id: "groups",
              label: "Session chats",
              insight:
                "Same list, near the bottom. The session chats keep going.",
              top: 8.2,
              left: 5.5,
              width: 89.0,
              height: 77.6,
            },
          ],
        },
        {
          id: "thread",
          label: "Maria's message",
          image: `${MEDIA}/06-support-thread.png`,
          audio: `${MEDIA}/06-support-thread.mp3`,
          narration:
            "Open Maria's message. She's asking if she can bring a guest to the ladder on Tuesday. You reply as the club. Any staff member can see this chat.",
          hotspots: [
            {
              id: "message",
              label: "Bring a guest?",
              insight:
                "Open Maria's message. She's asking if she can bring a guest to the ladder on Tuesday.",
              top: 76.5,
              left: 2.8,
              width: 79.0,
              height: 9.9,
            },
            {
              id: "reply",
              label: "Reply as the club",
              insight:
                "You reply as the club. Any staff member can see this chat.",
              top: 88.6,
              left: 1.5,
              width: 97.0,
              height: 8.4,
            },
          ],
        },
        {
          id: "reply",
          label: "Reply",
          image: `${MEDIA}/07-support-reply-sent.png`,
          audio: `${MEDIA}/07-support-reply-sent.mp3`,
          narration:
            "Type your reply and send it. It shows on the right, with the time.",
          hotspots: [
            {
              id: "reply",
              label: "Your reply",
              insight:
                "Type your reply and send it. It shows on the right, with the time.",
              top: 78.2,
              left: 17.8,
              width: 79.3,
              height: 8.5,
            },
          ],
        },
        {
          id: "message-player",
          label: "Message a player",
          image: `${MEDIA}/08-message-a-player.png`,
          audio: `${MEDIA}/08-message-a-player.mp3`,
          narration:
            "Tap Message a player to start a chat. Type at least two letters of a name or email. Cancel closes the search.",
          hotspots: [
            {
              id: "search",
              label: "Search players",
              insight: "Tap Message a player to start a chat.",
              top: 23.6,
              left: 4.1,
              width: 90.4,
              height: 8.7,
            },
            {
              id: "hint",
              label: "Two letters",
              insight: "Type at least two letters of a name or email.",
              top: 32.1,
              left: 3.9,
              width: 67.1,
              height: 3.2,
            },
            {
              id: "cancel",
              label: "Cancel",
              insight: "Cancel closes the search.",
              top: 36.6,
              left: 5.5,
              width: 89.0,
              height: 4.2,
            },
          ],
        },
      ],
    },
    {
      id: "courts",
      label: "Courts",
      frames: [
        {
          id: "today",
          label: "Today",
          image: `${MEDIA}/09-courts-p1.png`,
          audio: `${MEDIA}/09-courts-p1.mp3`,
          narration:
            "Courts shows one day at a time. The arrows change the day. The top line counts holds, events, and open slots. Colors mark held, awaiting payment, event, and open.",
          hotspots: [
            {
              id: "date",
              label: "The day",
              insight:
                "Courts shows one day at a time. The arrows change the day.",
              top: 13.5,
              left: 5.8,
              width: 88.4,
              height: 5.8,
            },
            {
              id: "counts",
              label: "Holds, events, open",
              insight: "The top line counts holds, events, and open slots.",
              top: 20.3,
              left: 4.0,
              width: 55.8,
              height: 3.3,
            },
            {
              id: "legend",
              label: "Colors",
              insight: "Colors mark held, awaiting payment, event, and open.",
              top: 24.0,
              left: 4.5,
              width: 75.0,
              height: 2.4,
            },
          ],
        },
        {
          id: "rest",
          label: "Rest of the day",
          image: `${MEDIA}/09-courts-p2.png`,
          audio: `${MEDIA}/09-courts-p2.mp3`,
          narration:
            "Scroll for the rest of the day. Tap an open slot to book a walk-in, or a booking to see it.",
          hotspots: [
            {
              id: "hint",
              label: "Tap a slot",
              insight:
                "Scroll for the rest of the day. Tap an open slot to book a walk-in, or a booking to see it.",
              top: 84.5,
              left: 3.9,
              width: 77.9,
              height: 3.1,
            },
          ],
        },
        {
          id: "next-day",
          label: "Next day",
          image: `${MEDIA}/10-courts-next-day-p1.png`,
          audio: `${MEDIA}/10-courts-next-day-p1.mp3`,
          narration:
            "Here's the next day, November 16. One hold, 31 events, and 80 of 96 slots open.",
          hotspots: [
            {
              id: "date",
              label: "November 16",
              insight: "Here's the next day, November 16.",
              top: 13.5,
              left: 5.8,
              width: 88.4,
              height: 5.8,
            },
            {
              id: "counts",
              label: "1 hold, 31 events",
              insight: "One hold, 31 events, and 80 of 96 slots open.",
              top: 20.7,
              left: 4.1,
              width: 53.9,
              height: 3.3,
            },
          ],
        },
        {
          id: "evening",
          label: "Evening",
          image: `${MEDIA}/10-courts-next-day-p2.png`,
          audio: `${MEDIA}/10-courts-next-day-p2.mp3`,
          narration: "Scroll down that day for the evening events.",
          hotspots: [
            {
              id: "events",
              label: "Evening events",
              insight: "Scroll down that day for the evening events.",
              top: 63.8,
              left: 20.6,
              width: 41.0,
              height: 9.6,
            },
          ],
        },
        {
          id: "booking",
          label: "A booking",
          image: `${MEDIA}/11-court-booking-detail.png`,
          audio: `${MEDIA}/11-court-booking-detail.mp3`,
          narration:
            "Tap a booking to see it. Maria Garcia, Court 1, 10 to noon, 20 dollars, paid. Cancel hold is at the bottom.",
          hotspots: [
            {
              id: "detail",
              label: "Maria's booking",
              insight:
                "Tap a booking to see it. Maria Garcia, Court 1, 10 to noon, 20 dollars, paid.",
              top: 61.3,
              left: 5.5,
              width: 89.0,
              height: 17.9,
            },
            {
              id: "cancel",
              label: "Cancel hold",
              insight: "Cancel hold is at the bottom.",
              top: 79.7,
              left: 5.5,
              width: 89.0,
              height: 5.0,
            },
          ],
        },
      ],
    },
    {
      id: "walk-in",
      label: "Walk-in",
      frames: [
        {
          id: "walk-in",
          label: "Walk-in",
          image: `${MEDIA}/12-walk-in-booking.png`,
          audio: `${MEDIA}/12-walk-in-booking.mp3`,
          narration:
            "Tap an open slot for a walk-in. This one is Court 2 at 2 PM. Search for the player, choose 1 hour or 2, then Hold the court.",
          hotspots: [
            {
              id: "slot",
              label: "Open slot",
              insight: "Tap an open slot for a walk-in.",
              top: 8.4,
              left: 41.6,
              width: 19.4,
              height: 4.4,
            },
            {
              id: "court",
              label: "Court 2 at 2 PM",
              insight: "This one is Court 2 at 2 PM.",
              top: 53.7,
              left: 8.0,
              width: 47.6,
              height: 6.6,
            },
            {
              id: "player",
              label: "Search for the player",
              insight: "Search for the player.",
              top: 60.6,
              left: 5.5,
              width: 89.0,
              height: 9.3,
            },
            {
              id: "length",
              label: "1 hour or 2",
              insight: "Choose 1 hour or 2.",
              top: 70.0,
              left: 8.5,
              width: 48.0,
              height: 8.3,
            },
            {
              id: "hold",
              label: "Hold the court",
              insight: "Then Hold the court.",
              top: 79.5,
              left: 10.0,
              width: 80.0,
              height: 5.3,
            },
          ],
        },
        {
          id: "search",
          label: "Search",
          image: `${MEDIA}/13a-walk-in-player-search.png`,
          audio: `${MEDIA}/13a-walk-in-player-search.mp3`,
          narration:
            "Search by name or email. Type Devon, then pick the right player.",
          hotspots: [
            {
              id: "search",
              label: "Devon",
              insight:
                "Search by name or email. Type Devon, then pick the right player.",
              top: 56.1,
              left: 5.5,
              width: 89.0,
              height: 5.7,
            },
          ],
        },
        {
          id: "picked",
          label: "Picked",
          image: `${MEDIA}/13b-walk-in-player-selected.png`,
          audio: `${MEDIA}/13b-walk-in-player-selected.mp3`,
          narration:
            "Devon King is picked, and one hour is set. Tap Hold the court.",
          hotspots: [
            {
              id: "player",
              label: "Devon King",
              insight: "Devon King is picked.",
              top: 62.8,
              left: 10.0,
              width: 80.0,
              height: 6.2,
            },
            {
              id: "length",
              label: "One hour",
              insight: "And one hour is set.",
              top: 73.2,
              left: 10.0,
              width: 21.5,
              height: 4.8,
            },
            {
              id: "hold",
              label: "Hold the court",
              insight: "Tap Hold the court.",
              top: 79.5,
              left: 10.0,
              width: 80.0,
              height: 5.3,
            },
          ],
        },
        {
          id: "held",
          label: "Held",
          image: `${MEDIA}/14-walk-in-held.png`,
          audio: `${MEDIA}/14-walk-in-held.mp3`,
          narration:
            "The hold shows on the board in lime. Devon has Court 2 at 2, and Maria has Court 1 at 10.",
          hotspots: [
            {
              id: "devon",
              label: "Devon",
              insight:
                "The hold shows on the board in lime. Devon has Court 2 at 2.",
              top: 49.0,
              left: 41.5,
              width: 19.6,
              height: 4.5,
            },
            {
              id: "maria",
              label: "Maria",
              insight: "And Maria has Court 1 at 10.",
              top: 29.8,
              left: 21.1,
              width: 19.6,
              height: 9.2,
            },
          ],
        },
      ],
    },
    {
      id: "cameras",
      label: "Cameras",
      frames: [
        {
          id: "live",
          label: "Live view",
          image: `${MEDIA}/15-cameras-p1.png`,
          audio: `${MEDIA}/15-cameras-p1.mp3`,
          narration:
            "Cameras shows a live view. Pick a court under All cameras. Use the arrows to pan and tilt, and the slider to zoom. Press and hold an arrow to keep moving.",
          hotspots: [
            {
              id: "live",
              label: "Live view",
              insight: "Cameras shows a live view.",
              top: 13.5,
              left: 5.8,
              width: 88.4,
              height: 22.4,
            },
            {
              id: "controls",
              label: "Pan, tilt, zoom",
              insight:
                "Use the arrows to pan and tilt, and the slider to zoom. Press and hold an arrow to keep moving.",
              top: 37.2,
              left: 5.8,
              width: 88.4,
              height: 37.2,
            },
            {
              id: "all",
              label: "All cameras",
              insight: "Pick a court under All cameras.",
              top: 76.0,
              left: 5.8,
              width: 88.4,
              height: 15.5,
            },
          ],
        },
        {
          id: "all",
          label: "All cameras",
          image: `${MEDIA}/15-cameras-p2.png`,
          audio: `${MEDIA}/15-cameras-p2.mp3`,
          narration: "Scroll for all cameras. Tap one to switch the view.",
          hotspots: [
            {
              id: "all",
              label: "All cameras",
              insight: "Scroll for all cameras. Tap one to switch the view.",
              top: 48.0,
              left: 5.8,
              width: 88.4,
              height: 43.5,
            },
          ],
        },
      ],
    },
    {
      id: "door",
      label: "Door and account",
      frames: [
        {
          id: "door",
          label: "Door",
          image: `${MEDIA}/16a-door.png`,
          audio: `${MEDIA}/16a-door.mp3`,
          narration:
            "Door is the staff override. Open Front unlocks it, and records who did it.",
          hotspots: [
            {
              id: "override",
              label: "Staff override",
              insight: "Door is the staff override.",
              top: 12.4,
              left: 3.9,
              width: 85.5,
              height: 3.3,
            },
            {
              id: "open",
              label: "Open Front",
              insight: "Open Front unlocks it, and records who did it.",
              top: 16.7,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
          ],
        },
        {
          id: "logged",
          label: "Logged",
          image: `${MEDIA}/16b-door-override.png`,
          audio: `${MEDIA}/16b-door-override.mp3`,
          narration:
            "After an override, it says the override was logged. Here, the lock isn't connected yet.",
          hotspots: [
            {
              id: "logged",
              label: "Override logged",
              insight:
                "After an override, it says the override was logged. Here, the lock isn't connected yet.",
              top: 15.9,
              left: 3.9,
              width: 87.9,
              height: 3.3,
            },
          ],
        },
        {
          id: "account",
          label: "Account",
          image: `${MEDIA}/17-account.png`,
          audio: `${MEDIA}/17-account.mp3`,
          narration:
            "Account shows your staff name, email, and role. Push notifications covers check-in, door, and court alerts on this phone. Sign out is under that.",
          hotspots: [
            {
              id: "you",
              label: "Name, email, role",
              insight: "Account shows your staff name, email, and role.",
              top: 8.1,
              left: 3.8,
              width: 51.7,
              height: 10.8,
            },
            {
              id: "push",
              label: "Push notifications",
              insight:
                "Push notifications covers check-in, door, and court alerts on this phone.",
              top: 19.9,
              left: 5.5,
              width: 89.0,
              height: 9.2,
            },
            {
              id: "sign-out",
              label: "Sign out",
              insight: "Sign out is under that.",
              top: 31.0,
              left: 5.5,
              width: 89.0,
              height: 5.3,
            },
          ],
        },
      ],
    },
  ],
};
