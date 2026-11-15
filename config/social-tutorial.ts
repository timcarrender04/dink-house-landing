import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/social";

export const SOCIAL_CHAPTER: TutorialChapter = {
  id: "social",
  label: "Social",
  intro:
    "Group chats for your sessions, a line to the club, friends, and alerts. Archive a chat, tap links, and tag a session with #.",
  steps: [
    {
      id: "chats",
      label: "Chats",
      frames: [
        {
          id: "chats",
          label: "Chats",
          image: `${MEDIA}/01-social-p1.png`,
          audio: `${MEDIA}/01-social.mp3`,
          narration:
            "Social is chats, friends, and alerts. Alerts shows 4. Chats are club news, a line to the staff, a chat for each session you're booked into, and groups with your friends. New group chat starts one. Hold a chat to mute it or archive it. Archived chats sit in a collapsed Archived section, and come back when someone posts. Announcements and Message the club can't be archived. In a direct message or a friend group, tap # or type # to tag a session you can join. The message shows a card, and tapping it opens that session. A cancelled session says Cancelled.",
          hotspots: [
            {
              id: "tabs",
              label: "Chats and Friends",
              insight: "Social is chats, friends, and alerts.",
              top: 17.1,
              left: 6.5,
              width: 57.0,
              height: 5.8,
            },
            {
              id: "alerts",
              label: "Alerts",
              insight: "Alerts shows 4.",
              top: 17.1,
              left: 64.8,
              width: 28.7,
              height: 5.8,
            },
            {
              id: "about",
              label: "Club news and chats",
              insight:
                "Club news, a line to the staff, a chat for each session you're booked into, and groups with your friends. New group chat starts one.",
              top: 27.1,
              left: 4.0,
              width: 86.6,
              height: 5.3,
            },
            {
              id: "list",
              label: "Your chats",
              insight:
                "Hold a chat to mute it or archive it. Archived chats sit under Archived and come back when someone posts. Announcements and Message the club stay put. In a direct message or a friend group, # tags a session.",
              top: 34.2,
              left: 5.5,
              width: 89.0,
              height: 53.0,
            },
          ],
        },
        {
          id: "more",
          label: "More chats",
          image: `${MEDIA}/01-social-p2.png`,
          audio: `${MEDIA}/01-social-2.mp3`,
          narration:
            "Keep scrolling. Every booked session has its own chat. They all say no messages yet. Say hello.",
          hotspots: [
            {
              id: "hello",
              label: "No messages yet",
              insight: "They all say no messages yet. Say hello.",
              top: 4.8,
              left: 5.5,
              width: 89.0,
              height: 5.9,
            },
            {
              id: "list",
              label: "A chat per session",
              insight: "Every booked session has its own chat.",
              top: 14.2,
              left: 5.5,
              width: 89.0,
              height: 71.8,
            },
          ],
        },
        {
          id: "bottom",
          label: "Further down",
          image: `${MEDIA}/01-social-p3.png`,
          audio: `${MEDIA}/01-social-3.mp3`,
          narration:
            "Same list, a little further down. Saturday Round Robin, DUPR Open Play, and the rest of your sessions.",
          hotspots: [
            {
              id: "list",
              label: "Your sessions",
              insight:
                "Saturday Round Robin, DUPR Open Play, and the rest of your sessions.",
              top: 41.4,
              left: 5.5,
              width: 89.0,
              height: 43.5,
            },
          ],
        },
      ],
    },
    {
      id: "group",
      label: "Group chat",
      frames: [
        {
          id: "rules",
          label: "Chat rules",
          image: `${MEDIA}/02-chat-terms.png`,
          audio: `${MEDIA}/02-chat-terms.mp3`,
          narration:
            "Open a chat, like Tuesday Night Ladder. Nothing's been said yet. Read the chat rules, then tap I agree. Be respectful. No harassment, hate, threats, or spam. Hold a message to report it or block a player. Staff can remove messages and turn off posting.",
          hotspots: [
            {
              id: "empty",
              label: "Nothing yet",
              insight:
                "Open a chat, like Tuesday Night Ladder. Nothing's been said yet.",
              top: 43.3,
              left: 25.1,
              width: 49.7,
              height: 3.4,
            },
            {
              id: "rules",
              label: "Chat rules",
              insight:
                "Be respectful. No harassment, hate, threats, or spam. Hold a message to report it or block a player. Staff can remove messages and turn off posting.",
              top: 79.1,
              left: 2.1,
              width: 94.3,
              height: 10.8,
            },
            {
              id: "agree",
              label: "I agree",
              insight: "Read the chat rules, then tap I agree.",
              top: 90.7,
              left: 3.7,
              width: 92.2,
              height: 5.3,
            },
          ],
        },
        {
          id: "ladder-chat",
          label: "Ladder chat",
          image: `${MEDIA}/03-ladder-chat.png`,
          audio: `${MEDIA}/03-ladder-chat.mp3`,
          narration:
            "After you agree, the ladder chat is the group for that session. People are sorting Tuesday. Type at the bottom and send. A web address in a message opens in the browser, an email address opens mail, and a dinkhouse link opens that screen in the app. Hold a link and the reply menu still opens. The more button next to the bell archives this chat.",
          hotspots: [
            {
              id: "messages",
              label: "The group",
              insight:
                "After you agree, the ladder chat is the group for that session. People are sorting Tuesday.",
              top: 52.5,
              left: 3.8,
              width: 90.7,
              height: 36.6,
            },
            {
              id: "message",
              label: "Message",
              insight:
                "Type at the bottom and send. Links open in the browser, mail, or the app. The more button next to the bell archives this chat.",
              top: 92.0,
              left: 3.0,
              width: 94.0,
              height: 5.0,
            },
          ],
        },
        {
          id: "typing",
          label: "Typing",
          image: `${MEDIA}/04-chat-typing.png`,
          audio: `${MEDIA}/04-chat-typing.mp3`,
          narration:
            "Type your reply. Here it's, count me in, see you at 6. The send button lights up.",
          hotspots: [
            {
              id: "reply",
              label: "Your reply",
              insight: "Type your reply. Here it's, count me in, see you at 6.",
              top: 58.5,
              left: 3.8,
              width: 49.2,
              height: 3.4,
            },
            {
              id: "send",
              label: "Send",
              insight: "The send button lights up.",
              top: 57.5,
              left: 86.3,
              width: 10.7,
              height: 4.8,
            },
          ],
        },
        {
          id: "sent",
          label: "Sent",
          image: `${MEDIA}/05-chat-sent.png`,
          audio: `${MEDIA}/05-chat-sent.mp3`,
          narration: "Tap send and your message shows in green, with the time.",
          hotspots: [
            {
              id: "sent",
              label: "Your message",
              insight:
                "Tap send and your message shows in green, with the time.",
              top: 83.3,
              left: 47.4,
              width: 49.6,
              height: 6.0,
            },
          ],
        },
        {
          id: "actions",
          label: "Hold a message",
          image: `${MEDIA}/06-message-actions.png`,
          audio: `${MEDIA}/06-message-actions.mp3`,
          narration:
            "Hold a message for reply, report to staff, or block that player. Cancel closes it. Holding a link still opens this same menu.",
          hotspots: [
            {
              id: "actions",
              label: "Reply, report, block",
              insight:
                "Hold a message for reply, report to staff, or block that player. Holding a link still opens this menu.",
              top: 42.6,
              left: 28.8,
              width: 49.2,
              height: 17.1,
            },
            {
              id: "cancel",
              label: "Cancel",
              insight: "Cancel closes it.",
              top: 63.3,
              left: 32.2,
              width: 35.6,
              height: 3.2,
            },
          ],
        },
      ],
    },
    {
      id: "club",
      label: "The club",
      frames: [
        {
          id: "announcements",
          label: "Announcements",
          image: `${MEDIA}/07-announcements.png`,
          audio: `${MEDIA}/07-announcements.mp3`,
          narration:
            "Club announcements are from staff. Only staff post here. This one covers new nets, and that ladder sign-up is open on home.",
          hotspots: [
            {
              id: "title",
              label: "Club announcements",
              insight: "Club announcements are from staff.",
              top: 7.0,
              left: 15.7,
              width: 50.3,
              height: 3.5,
            },
            {
              id: "posts",
              label: "New nets, ladder sign-up",
              insight:
                "This one covers new nets, and that ladder sign-up is open on home.",
              top: 60.3,
              left: 4.0,
              width: 90.5,
              height: 30.5,
            },
            {
              id: "only",
              label: "Only staff post here",
              insight: "Only staff post here.",
              top: 93.5,
              left: 32.9,
              width: 34.3,
              height: 3.3,
            },
          ],
        },
        {
          id: "message-club",
          label: "Message the club",
          image: `${MEDIA}/08-message-the-club.png`,
          audio: `${MEDIA}/08-message-the-club.mp3`,
          narration:
            "Message the club is a direct line to staff. Questions about bookings, membership, or anything else go here.",
          hotspots: [
            {
              id: "title",
              label: "The Dink House",
              insight: "Message the club is a direct line to staff.",
              top: 7.0,
              left: 15.6,
              width: 38.4,
              height: 3.5,
            },
            {
              id: "prompt",
              label: "Questions go here",
              insight:
                "Questions about bookings, membership, or anything else go here.",
              top: 48.4,
              left: 13.2,
              width: 73.5,
              height: 5.8,
            },
          ],
        },
        {
          id: "club-sent",
          label: "Sent",
          image: `${MEDIA}/09-message-the-club-sent.png`,
          audio: `${MEDIA}/09-message-the-club-sent.mp3`,
          narration:
            "Send it and staff see it here. This one asks if you can bring a guest to the ladder on Tuesday.",
          hotspots: [
            {
              id: "message",
              label: "Your message",
              insight:
                "Send it and staff see it here. This one asks if you can bring a guest to the ladder on Tuesday.",
              top: 80.8,
              left: 17.8,
              width: 79.3,
              height: 8.5,
            },
          ],
        },
      ],
    },
    {
      id: "friends",
      label: "Friends",
      frames: [
        {
          id: "friends",
          label: "Friends",
          image: `${MEDIA}/10-friends.png`,
          audio: `${MEDIA}/10-friends.mp3`,
          narration:
            "Friends is the middle tab. Hannah wants to be friends. Tap the check to accept or the X to decline. Search members by name. Your friends are listed under that, and you can remove one if you need to.",
          hotspots: [
            {
              id: "tab",
              label: "Friends",
              insight: "Friends is the middle tab.",
              top: 17.5,
              left: 35.9,
              width: 28.1,
              height: 4.8,
            },
            {
              id: "request",
              label: "Hannah",
              insight: "Hannah wants to be friends.",
              top: 33.1,
              left: 7.5,
              width: 33.3,
              height: 5.4,
            },
            {
              id: "accept",
              label: "Accept or decline",
              insight: "Tap the check to accept or the X to decline.",
              top: 33.1,
              left: 65.5,
              width: 23.5,
              height: 5.2,
            },
            {
              id: "search",
              label: "Search members",
              insight: "Search members by name.",
              top: 40.7,
              left: 3.9,
              width: 90.6,
              height: 10.6,
            },
            {
              id: "list",
              label: "Your friends",
              insight:
                "Your friends are listed under that, and you can remove one if you need to.",
              top: 53.3,
              left: 3.9,
              width: 90.6,
              height: 23.8,
            },
          ],
        },
        {
          id: "find",
          label: "Find members",
          image: `${MEDIA}/11-find-members.png`,
          audio: `${MEDIA}/11-find-members.mp3`,
          narration:
            "Search by name. Type Omar and Omar H shows up with an add button.",
          hotspots: [
            {
              id: "search",
              label: "Search by name",
              insight: "Search by name.",
              top: 43.5,
              left: 3.9,
              width: 90.6,
              height: 7.4,
            },
            {
              id: "result",
              label: "Omar H",
              insight: "Type Omar and Omar H shows up with an add button.",
              top: 53.8,
              left: 5.5,
              width: 89.0,
              height: 4.4,
            },
          ],
        },
        {
          id: "add",
          label: "Add friend",
          image: `${MEDIA}/12-add-friend-dialog.png`,
          audio: `${MEDIA}/12-add-friend-dialog.mp3`,
          narration:
            "Add Omar H asks you to confirm. They get a notification and can accept from there. You can add a short message like, want to play Saturday? Send request or tap Not now.",
          hotspots: [
            {
              id: "title",
              label: "Add Omar H?",
              insight:
                "Add Omar H asks you to confirm. They get a notification and can accept from there.",
              top: 36.7,
              left: 11.1,
              width: 77.7,
              height: 9.7,
            },
            {
              id: "message",
              label: "Add a message",
              insight:
                "You can add a short message like, want to play Saturday?",
              top: 47.6,
              left: 9.0,
              width: 48.8,
              height: 11.8,
            },
            {
              id: "send",
              label: "Send request",
              insight: "Send request.",
              top: 59.8,
              left: 11.9,
              width: 76.3,
              height: 5.5,
            },
            {
              id: "not-now",
              label: "Not now",
              insight: "Or tap Not now.",
              top: 68.0,
              left: 14.9,
              width: 70.2,
              height: 3.1,
            },
          ],
        },
        {
          id: "requested",
          label: "Requested",
          image: `${MEDIA}/13-friend-request-sent.png`,
          audio: `${MEDIA}/13-friend-request-sent.mp3`,
          narration:
            "The request is sent. It says, friend request sent to Omar H, and his button changes to Requested. He can accept from his notifications.",
          hotspots: [
            {
              id: "sent",
              label: "Request sent",
              insight:
                "The request is sent. It says, friend request sent to Omar H.",
              top: 28.4,
              left: 4.1,
              width: 50.9,
              height: 3.3,
            },
            {
              id: "requested",
              label: "Requested",
              insight:
                "His button changes to Requested. He can accept from his notifications.",
              top: 57.1,
              left: 5.5,
              width: 89.0,
              height: 4.4,
            },
          ],
        },
        {
          id: "accepted",
          label: "Accepted",
          image: `${MEDIA}/14-request-accepted.png`,
          audio: `${MEDIA}/14-request-accepted.mp3`,
          narration:
            "You're now friends. Hannah's request is gone, and she's on your friends list. Omar H is still requested and pending at the bottom, where you can cancel.",
          hotspots: [
            {
              id: "now",
              label: "You're now friends",
              insight: "You're now friends.",
              top: 28.4,
              left: 3.9,
              width: 32.5,
              height: 3.0,
            },
            {
              id: "hannah",
              label: "Hannah",
              insight:
                "Hannah's request is gone, and she's on your friends list.",
              top: 70.0,
              left: 5.5,
              width: 89.0,
              height: 4.5,
            },
            {
              id: "pending",
              label: "Pending",
              insight:
                "Omar H is still requested and pending at the bottom, where you can cancel.",
              top: 84.0,
              left: 5.5,
              width: 89.0,
              height: 6.0,
            },
          ],
        },
      ],
    },
    {
      id: "alerts",
      label: "Alerts",
      frames: [
        {
          id: "alerts",
          label: "Alerts",
          image: `${MEDIA}/15-alerts-p1.png`,
          audio: `${MEDIA}/15-alerts.mp3`,
          narration:
            "Alerts is the third tab. Push notifications covers open play calls, league and booking updates, and surveys on this phone. The switch is on. Recent shows your ladder court, the open play survey, and who you're up against.",
          hotspots: [
            {
              id: "tab",
              label: "Alerts",
              insight: "Alerts is the third tab.",
              top: 17.5,
              left: 64.8,
              width: 28.1,
              height: 4.8,
            },
            {
              id: "push",
              label: "Push notifications",
              insight:
                "Push notifications covers open play calls, league and booking updates, and surveys on this phone.",
              top: 29.9,
              left: 15.4,
              width: 76.2,
              height: 7.4,
            },
            {
              id: "switch",
              label: "The switch",
              insight: "The switch is on.",
              top: 31.6,
              left: 80.5,
              width: 10.5,
              height: 3.6,
            },
            {
              id: "recent",
              label: "Recent",
              insight:
                "Recent shows your ladder court, the open play survey, and who you're up against.",
              top: 39.9,
              left: 4.1,
              width: 90.4,
              height: 49.7,
            },
          ],
        },
        {
          id: "clear",
          label: "Clear history",
          image: `${MEDIA}/15-alerts-p2.png`,
          audio: `${MEDIA}/15-alerts-2.mp3`,
          narration:
            "Keep scrolling. Clear history wipes the recent list. Your push notifications stay on.",
          hotspots: [
            {
              id: "push",
              label: "Push notifications",
              insight: "Your push notifications stay on.",
              top: 17.7,
              left: 15.4,
              width: 76.2,
              height: 7.4,
            },
            {
              id: "clear",
              label: "Clear history",
              insight: "Clear history wipes the recent list.",
              top: 81.5,
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
