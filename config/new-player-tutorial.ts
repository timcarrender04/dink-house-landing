import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/new-player";

export const NEW_PLAYER_CHAPTER: TutorialChapter = {
  id: "new-player",
  label: "New player",
  intro:
    "Create an account, confirm your email, take the skill check, and choose guest or member.",
  steps: [
    {
      id: "register",
      label: "Create an account",
      frames: [
        {
          id: "form",
          label: "The form",
          image: `${MEDIA}/01-register-filled.png`,
          audio: `${MEDIA}/01-register-filled.mp3`,
          narration:
            "New to the club? Tap Create an account. Add your first and last name, your email, and a password of at least 10 characters. Phone is optional. Then add your date of birth.",
          hotspots: [
            {
              id: "title",
              label: "Create an account",
              insight: "New to the club? Tap Create an account.",
              top: 17.0,
              left: 4.0,
              width: 47.5,
              height: 3.6,
            },
            {
              id: "names",
              label: "Name and email",
              insight: "Add your first and last name, your email.",
              top: 28.3,
              left: 4.1,
              width: 90.4,
              height: 28.0,
            },
            {
              id: "password",
              label: "Password",
              insight: "And a password of at least 10 characters.",
              top: 56.2,
              left: 3.9,
              width: 90.6,
              height: 11.5,
            },
            {
              id: "phone",
              label: "Phone",
              insight: "Phone is optional.",
              top: 68.1,
              left: 4.1,
              width: 90.4,
              height: 9.0,
            },
            {
              id: "dob",
              label: "Date of birth",
              insight: "Then add your date of birth.",
              top: 77.4,
              left: 4.1,
              width: 90.4,
              height: 9.2,
            },
          ],
        },
        {
          id: "bottom",
          label: "Gender",
          image: `${MEDIA}/02-register-filled-bottom.png`,
          audio: `${MEDIA}/02-register-filled-bottom.mp3`,
          narration:
            "Scroll down, pick Female or Male, and tap Create an account. If you already have one, I already have an account takes you back.",
          hotspots: [
            {
              id: "gender",
              label: "Female or Male",
              insight: "Scroll down, pick Female or Male.",
              top: 70.6,
              left: 4.0,
              width: 90.5,
              height: 10.6,
            },
            {
              id: "create",
              label: "Create an account",
              insight: "And tap Create an account.",
              top: 81.8,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
            {
              id: "already",
              label: "I already have an account",
              insight:
                "If you already have one, I already have an account takes you back.",
              top: 89.2,
              left: 5.5,
              width: 89.0,
              height: 5.6,
            },
          ],
        },
        {
          id: "choose-gender",
          label: "Choose a gender",
          image: `${MEDIA}/03-validation-choose-gender.png`,
          audio: `${MEDIA}/03-validation-choose-gender.mp3`,
          narration:
            "Skip the gender and the form stops you. It says, choose a gender. Pick one, then tap Create an account again.",
          hotspots: [
            {
              id: "error",
              label: "Choose a gender",
              insight:
                "Skip the gender and the form stops you. It says, choose a gender.",
              top: 81.1,
              left: 4.0,
              width: 30.0,
              height: 3.3,
            },
            {
              id: "gender",
              label: "Pick one",
              insight: "Pick one.",
              top: 70.6,
              left: 4.0,
              width: 90.5,
              height: 10.6,
            },
            {
              id: "create",
              label: "Create an account",
              insight: "Then tap Create an account again.",
              top: 85.3,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "confirm",
      label: "Confirm email",
      frames: [
        {
          id: "check-email",
          label: "Check your email",
          image: `${MEDIA}/04-check-your-email.png`,
          audio: `${MEDIA}/04-check-your-email.mp3`,
          narration:
            "Check your email. We sent a confirmation link. Open it on this phone to confirm your account, then sign in to finish sign-up.",
          hotspots: [
            {
              id: "title",
              label: "Check your email",
              insight: "Check your email. We sent a confirmation link.",
              top: 37.0,
              left: 16.6,
              width: 66.9,
              height: 7.4,
            },
            {
              id: "open",
              label: "Open it on this phone",
              insight:
                "Open it on this phone to confirm your account, then sign in to finish sign-up.",
              top: 43.7,
              left: 11.0,
              width: 78.4,
              height: 8.2,
            },
          ],
        },
        {
          id: "confirmed",
          label: "Confirmed",
          image: `${MEDIA}/05-email-verified.png`,
          audio: `${MEDIA}/05-email-verified.mp3`,
          narration:
            "Open the link and you'll see Email confirmed. Your account is ready. Sign in to finish sign-up.",
          hotspots: [
            {
              id: "confirmed",
              label: "Email confirmed",
              insight: "Open the link and you'll see Email confirmed.",
              top: 45.9,
              left: 28.6,
              width: 42.8,
              height: 3.7,
            },
            {
              id: "ready",
              label: "Your account is ready",
              insight: "Your account is ready. Sign in to finish sign-up.",
              top: 50.2,
              left: 16.8,
              width: 66.4,
              height: 5.8,
            },
          ],
        },
      ],
    },
    {
      id: "skill-check",
      label: "Skill check",
      frames: [
        {
          id: "start",
          label: "Start",
          image: `${MEDIA}/06-assessment-start.png`,
          audio: `${MEDIA}/06-assessment-start.mp3`,
          narration:
            "After you sign in, a short skill check sets your starting level. It's five questions. First is serve and return. Pick the answer that sounds most like you.",
          hotspots: [
            {
              id: "progress",
              label: "1 of 5",
              insight:
                "After you sign in, a short skill check sets your starting level. It's five questions.",
              top: 16.6,
              left: 4.1,
              width: 11.9,
              height: 2.9,
            },
            {
              id: "question",
              label: "Serve and return",
              insight: "First is serve and return.",
              top: 20.1,
              left: 4.0,
              width: 87.4,
              height: 7.4,
            },
            {
              id: "answers",
              label: "Answers",
              insight: "Pick the answer that sounds most like you.",
              top: 28.0,
              left: 5.8,
              width: 88.4,
              height: 31.5,
            },
          ],
        },
        {
          id: "q1",
          label: "Question 1",
          image: `${MEDIA}/07-assessment-q1-answered.png`,
          audio: `${MEDIA}/07-assessment-q1-answered.mp3`,
          narration:
            "Tap an answer and it lights up. Here it's B, 8 or more out of 10 in. Then tap Next.",
          hotspots: [
            {
              id: "b",
              label: "Answer B",
              insight:
                "Tap an answer and it lights up. Here it's B, 8 or more out of 10 in.",
              top: 39.0,
              left: 5.8,
              width: 88.4,
              height: 9.8,
            },
            {
              id: "next",
              label: "Next",
              insight: "Then tap Next.",
              top: 61.5,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
          ],
        },
        {
          id: "q2",
          label: "Question 2",
          image: `${MEDIA}/07-assessment-q2-answered.png`,
          audio: `${MEDIA}/07-assessment-q2-answered.mp3`,
          narration:
            "2 of 5 is dinking. How do you handle a dink rally at the kitchen line?",
          hotspots: [
            {
              id: "question",
              label: "Dinking",
              insight:
                "2 of 5 is dinking. How do you handle a dink rally at the kitchen line?",
              top: 16.4,
              left: 3.9,
              width: 82.9,
              height: 13.3,
            },
          ],
        },
        {
          id: "q3",
          label: "Question 3",
          image: `${MEDIA}/07-assessment-q3-answered.png`,
          audio: `${MEDIA}/07-assessment-q3-answered.mp3`,
          narration:
            "3 of 5 is the third shot. What does your team usually do with it?",
          hotspots: [
            {
              id: "question",
              label: "Third shot",
              insight:
                "3 of 5 is the third shot. What does your team usually do with it?",
              top: 16.4,
              left: 3.9,
              width: 86.2,
              height: 11.1,
            },
          ],
        },
        {
          id: "q4",
          label: "Question 4",
          image: `${MEDIA}/07-assessment-q4-answered.png`,
          audio: `${MEDIA}/07-assessment-q4-answered.mp3`,
          narration:
            "4 of 5 is hand battles and resets. What happens when someone attacks you at the net?",
          hotspots: [
            {
              id: "question",
              label: "Hand battles",
              insight:
                "4 of 5 is hand battles and resets. What happens when someone attacks you at the net?",
              top: 16.6,
              left: 3.9,
              width: 80.7,
              height: 12.8,
            },
          ],
        },
        {
          id: "q5",
          label: "Question 5",
          image: `${MEDIA}/07-assessment-q5-answered.png`,
          audio: `${MEDIA}/07-assessment-q5-answered.mp3`,
          narration:
            "5 of 5 is positioning and strategy. How do you approach where you stand on the court?",
          hotspots: [
            {
              id: "question",
              label: "Positioning",
              insight:
                "5 of 5 is positioning and strategy. How do you approach where you stand on the court?",
              top: 16.6,
              left: 4.0,
              width: 70.3,
              height: 10.9,
            },
          ],
        },
        {
          id: "result",
          label: "Result",
          image: `${MEDIA}/08-assessment-result.png`,
          audio: `${MEDIA}/08-assessment-result.mp3`,
          narration:
            "Your result is next. Here it's Intermediate, starting level 3.5. Open play can move this as you play. Your schedule shows sessions for your level, plus anything open to all levels. Tap Continue.",
          hotspots: [
            {
              id: "level",
              label: "Intermediate, 3.5",
              insight:
                "Your result is next. Here it's Intermediate, starting level 3.5.",
              top: 16.9,
              left: 3.8,
              width: 50.9,
              height: 7.3,
            },
            {
              id: "rule",
              label: "Your level moves",
              insight:
                "Open play can move this as you play. Your schedule shows sessions for your level, plus anything open to all levels.",
              top: 24.3,
              left: 4.0,
              width: 89.3,
              height: 7.0,
            },
            {
              id: "continue",
              label: "Continue",
              insight: "Tap Continue.",
              top: 32.7,
              left: 5.9,
              width: 88.1,
              height: 5.3,
            },
          ],
        },
      ],
    },
    {
      id: "plan",
      label: "Guest or member",
      frames: [
        {
          id: "choose",
          label: "How you play",
          image: `${MEDIA}/09-guest-or-member.png`,
          audio: `${MEDIA}/09-guest-or-member.mp3`,
          narration:
            "Then choose how you want to play. Guests sign up free and pay when they book. Members pay less and can book further ahead. Tap Continue as a guest, or See memberships.",
          hotspots: [
            {
              id: "rule",
              label: "Guests and members",
              insight:
                "Then choose how you want to play. Guests sign up free and pay when they book. Members pay less and can book further ahead.",
              top: 16.9,
              left: 4.0,
              width: 88.0,
              height: 12.9,
            },
            {
              id: "guest",
              label: "Continue as a guest",
              insight: "Tap Continue as a guest.",
              top: 30.7,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
            {
              id: "members",
              label: "See memberships",
              insight: "Or See memberships.",
              top: 45.3,
              left: 5.9,
              width: 88.1,
              height: 5.5,
            },
          ],
        },
        {
          id: "memberships",
          label: "Memberships",
          image: `${MEDIA}/10-choose-membership.png`,
          audio: `${MEDIA}/10-choose-membership.mp3`,
          narration:
            "Memberships shows both plans. Basic is 59 dollars a month, with 64 due today, including the one-time 5 dollar registration fee. Premium is 109 a month, with 114 due today. Both are charged monthly until you cancel.",
          hotspots: [
            {
              id: "basic",
              label: "Basic",
              insight:
                "Memberships shows both plans. Basic is 59 dollars a month, with 64 due today, including the one-time 5 dollar registration fee.",
              top: 18.0,
              left: 4.5,
              width: 91.0,
              height: 26.3,
            },
            {
              id: "premium",
              label: "Premium",
              insight:
                "Premium is 109 a month, with 114 due today. Both are charged monthly until you cancel.",
              top: 46.2,
              left: 4.5,
              width: 91.0,
              height: 26.3,
            },
          ],
        },
        {
          id: "payment",
          label: "Payment",
          image: `${MEDIA}/11-join-premium-payment.png`,
          audio: `${MEDIA}/11-join-premium-payment.mp3`,
          narration:
            "Pick a plan and the payment sheet opens. Pay with Link, a card, Cash App Pay, a bank, Klarna, or Amazon Pay. The button shows your total, here 114 dollars.",
          hotspots: [
            {
              id: "options",
              label: "Ways to pay",
              insight:
                "Pick a plan and the payment sheet opens. Pay with Link, a card, Cash App Pay, a bank, Klarna, or Amazon Pay.",
              top: 37.0,
              left: 4.6,
              width: 90.8,
              height: 46.8,
            },
            {
              id: "total",
              label: "Your total",
              insight: "The button shows your total, here 114 dollars.",
              top: 87.7,
              left: 4.8,
              width: 90.4,
              height: 5.3,
            },
          ],
        },
      ],
    },
    {
      id: "guest",
      label: "As a guest",
      frames: [
        {
          id: "home",
          label: "Guest home",
          image: `${MEDIA}/12-guest-home-p1.png`,
          audio: `${MEDIA}/12-guest-home-p1.mp3`,
          narration:
            "Continue as a guest and you land on home. Your card says Guest, with your level. Unlock the door needs a current membership or a paid booking. Check in and Book a court work the same as for members.",
          hotspots: [
            {
              id: "card",
              label: "Guest card",
              insight:
                "Continue as a guest and you land on home. Your card says Guest, with your level.",
              top: 38.0,
              left: 5.8,
              width: 88.4,
              height: 16.0,
            },
            {
              id: "unlock",
              label: "Unlock the door",
              insight:
                "Unlock the door needs a current membership or a paid booking.",
              top: 55.5,
              left: 5.9,
              width: 88.1,
              height: 14.5,
            },
            {
              id: "tiles",
              label: "Check in and book",
              insight:
                "Check in and Book a court work the same as for members.",
              top: 71.4,
              left: 5.8,
              width: 88.4,
              height: 16.0,
            },
          ],
        },
        {
          id: "member",
          label: "Become a member",
          image: `${MEDIA}/12-guest-home-p2.png`,
          audio: `${MEDIA}/12-guest-home-p2.mp3`,
          narration:
            "Scroll for Schedule and Open play. Become a member is at the bottom. Members pay less for courts and book further ahead.",
          hotspots: [
            {
              id: "tiles",
              label: "Schedule and Open play",
              insight: "Scroll for Schedule and Open play.",
              top: 57.0,
              left: 5.8,
              width: 88.4,
              height: 15.6,
            },
            {
              id: "member",
              label: "Become a member",
              insight:
                "Become a member is at the bottom. Members pay less for courts and book further ahead.",
              top: 78.0,
              left: 5.5,
              width: 89.0,
              height: 8.3,
            },
          ],
        },
        {
          id: "door",
          label: "The door",
          image: `${MEDIA}/13-guest-door-locked.png`,
          audio: `${MEDIA}/13-guest-door-locked.mp3`,
          narration:
            "Tap Unlock the door and you get the same unlock screen. Read the sticker, or scan the QR code. As a guest, you need a paid booking first.",
          hotspots: [
            {
              id: "unlock",
              label: "Unlock",
              insight:
                "Tap Unlock the door and you get the same unlock screen. As a guest, you need a paid booking first.",
              top: 16.9,
              left: 4.0,
              width: 90.3,
              height: 9.4,
            },
            {
              id: "buttons",
              label: "Sticker or QR code",
              insight: "Read the sticker, or scan the QR code.",
              top: 27.0,
              left: 5.8,
              width: 88.4,
              height: 13.3,
            },
          ],
        },
      ],
    },
  ],
};
