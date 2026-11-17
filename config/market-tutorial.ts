import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/market";

export const MARKET_CHAPTER: TutorialChapter = {
  id: "market",
  label: "Market",
  intro:
    "Buy and sell used gear with other players. Posting is free, and you pay each other directly.",
  steps: [
    {
      id: "browse",
      label: "Browse",
      frames: [
        {
          id: "empty",
          label: "Nothing listed",
          image: `${MEDIA}/01-market-empty.png`,
          audio: `${MEDIA}/01-market-empty.mp3`,
          narration:
            "Market is under Social, between Friends and Alerts. Buy and sell used gear with other players. Posting is free, and you pay each other directly. Tap Sell something. For sale is what's listed. My listings is yours. Search by brand, model, or size, or pick paddles, bags, shoes, apparel, or balls. Nothing is for sale yet.",
          hotspots: [
            {
              id: "tab",
              label: "Market",
              insight: "Market is under Social, between Friends and Alerts.",
              top: 17.6,
              left: 48,
              width: 25,
              height: 6,
            },
            {
              id: "sell",
              label: "Sell something",
              insight:
                "Tap Sell something. Posting is free, and you pay each other directly.",
              top: 32.3,
              left: 6.3,
              width: 87,
              height: 5.9,
            },
            {
              id: "mine",
              label: "For sale and My listings",
              insight: "For sale is what's listed. My listings is yours.",
              top: 39.8,
              left: 6.3,
              width: 58,
              height: 5.2,
            },
            {
              id: "filters",
              label: "Search and categories",
              insight:
                "Search by brand, model, or size, or pick paddles, bags, shoes, apparel, or balls.",
              top: 48,
              left: 6,
              width: 88,
              height: 16,
            },
          ],
        },
        {
          id: "card",
          label: "A listing",
          image: `${MEDIA}/02-market-listing.png`,
          audio: `${MEDIA}/02-market-listing.mp3`,
          narration:
            "A card shows the photo, the price, the title, and the category and condition. This used CRBN Carbon 3 is 50 dollars, and the condition is Good. Tap the card to open it.",
          hotspots: [
            {
              id: "card",
              label: "CRBN Carbon 3",
              insight:
                "The photo, 50 dollars, the title, and Paddles · Good. Tap the card to open it.",
              top: 54,
              left: 6,
              width: 48,
              height: 34,
            },
          ],
        },
      ],
    },
    {
      id: "sell",
      label: "Sell something",
      frames: [
        {
          id: "sell-top",
          label: "Photos and price",
          image: `${MEDIA}/03-sell-top.png`,
          audio: `${MEDIA}/03-sell-top.mp3`,
          narration:
            "Sell something starts with photos and one short video. Up to 6 photos. The first photo is the one buyers see in the list. Add a title and a price. Enter 0 to give it away. Then pick a category, and a condition: new, like new, good, or fair.",
          hotspots: [
            {
              id: "photos",
              label: "Photos and video",
              insight:
                "Up to 6 photos and one short video. The first photo is the one buyers see in the list.",
              top: 13,
              left: 6,
              width: 88,
              height: 14,
            },
            {
              id: "title-price",
              label: "Title and price",
              insight: "Add a title and a price. Enter 0 to give it away.",
              top: 26,
              left: 6,
              width: 88,
              height: 16,
            },
            {
              id: "category",
              label: "Category and condition",
              insight:
                "Pick a category, and a condition: new, like new, good, or fair.",
              top: 42,
              left: 6,
              width: 88,
              height: 26,
            },
          ],
        },
        {
          id: "sell-bottom",
          label: "Description",
          image: `${MEDIA}/04-sell-bottom.png`,
          audio: `${MEDIA}/04-sell-bottom.mp3`,
          narration:
            "Describe the size, the weight, how long you've used it, and any wear. Standardize description turns what you wrote into the same labeled lines on every listing. Nothing changes until you choose to use it. Post listing puts it up.",
          hotspots: [
            {
              id: "description",
              label: "Description",
              insight:
                "Describe the size, the weight, how long you've used it, and any wear.",
              top: 64,
              left: 6,
              width: 88,
              height: 16,
            },
            {
              id: "standardize",
              label: "Standardize description",
              insight:
                "Turns what you wrote into the same labeled lines on every listing. Nothing changes until you choose to use it.",
              top: 82,
              left: 6,
              width: 88,
              height: 8,
            },
            {
              id: "post",
              label: "Post listing",
              insight: "Post listing puts it up.",
              top: 93.9,
              left: 6.7,
              width: 87,
              height: 5.9,
            },
          ],
        },
      ],
    },
    {
      id: "listing",
      label: "The listing",
      frames: [
        {
          id: "front",
          label: "The paddle",
          image: `${MEDIA}/05-listing.png`,
          audio: `${MEDIA}/05-listing.mp3`,
          narration:
            "The listing opens on the photos. This is a used CRBN Carbon 3, 50 dollars, Good, Paddles. It says your listing, Sunday, November 15. Mark as sold is the green button. The listing stays up until Tuesday, December 15.",
          hotspots: [
            {
              id: "photo",
              label: "Photos",
              insight: "The listing opens on the photos. Swipe for the rest.",
              top: 14,
              left: 12,
              width: 76,
              height: 40,
            },
            {
              id: "price",
              label: "50 dollars",
              insight:
                "Used CRBN Carbon 3, 50 dollars, Good, Paddles. Your listing, Sunday, November 15.",
              top: 58,
              left: 6,
              width: 80,
              height: 22,
            },
            {
              id: "sold",
              label: "Mark as sold",
              insight:
                "Mark as sold is the green button. The listing stays up until Tuesday, December 15.",
              top: 82.3,
              left: 6.3,
              width: 87.4,
              height: 5.9,
            },
          ],
        },
        {
          id: "back",
          label: "The other photo",
          image: `${MEDIA}/06-listing-back.png`,
          audio: `${MEDIA}/06-listing-back.mp3`,
          narration:
            "Swipe for the other photo. This is the back of the paddle. Mark as sold is still at the bottom.",
          hotspots: [
            {
              id: "photo",
              label: "Back of the paddle",
              insight: "Swipe for the other photo.",
              top: 16,
              left: 8,
              width: 84,
              height: 32,
            },
            {
              id: "sold",
              label: "Mark as sold",
              insight: "Mark as sold is still at the bottom.",
              top: 86.8,
              left: 6.3,
              width: 87.4,
              height: 5.9,
            },
          ],
        },
        {
          id: "actions",
          label: "Edit, tag, delete",
          image: `${MEDIA}/07-listing-actions.png`,
          audio: `${MEDIA}/07-listing-actions.mp3`,
          narration:
            "Edit changes the listing. Tag friends notifies them and opens this listing. Delete removes it. Comments are underneath. None yet. Write one, or type @ to tag someone.",
          hotspots: [
            {
              id: "edit",
              label: "Edit",
              insight: "Edit changes the listing.",
              top: 52,
              left: 6,
              width: 88,
              height: 6,
            },
            {
              id: "tag",
              label: "Tag friends",
              insight: "Tag friends notifies them and opens this listing.",
              top: 60.5,
              left: 6,
              width: 88,
              height: 6,
            },
            {
              id: "delete",
              label: "Delete",
              insight: "Delete removes it.",
              top: 68.5,
              left: 6,
              width: 88,
              height: 6,
            },
            {
              id: "comments",
              label: "Comments",
              insight: "None yet. Write one, or type @ to tag someone.",
              top: 76,
              left: 6,
              width: 88,
              height: 16,
            },
          ],
        },
      ],
    },
    {
      id: "comments",
      label: "Comments",
      frames: [
        {
          id: "typing",
          label: "Tag someone",
          image: `${MEDIA}/08-comment-typing.png`,
          audio: `${MEDIA}/08-comment-typing.mp3`,
          narration:
            "This comment tags Jay Burgos. The send button lights up. Tap it.",
          hotspots: [
            {
              id: "field",
              label: "@Jay Burgos",
              insight: "This comment tags Jay Burgos.",
              top: 46,
              left: 6,
              width: 72,
              height: 8,
            },
            {
              id: "send",
              label: "Send",
              insight: "The send button lights up. Tap it.",
              top: 46,
              left: 80,
              width: 14,
              height: 8,
            },
          ],
        },
        {
          id: "posted",
          label: "Posted",
          image: `${MEDIA}/09-comment-posted.png`,
          audio: `${MEDIA}/09-comment-posted.mp3`,
          narration:
            "The comment posts under your name, marked Seller, with the tag in lime. Reply is under the time.",
          hotspots: [
            {
              id: "comment",
              label: "You · Seller",
              insight:
                "The comment posts under your name, marked Seller, with the tag in lime. Reply is under the time.",
              top: 68,
              left: 6,
              width: 80,
              height: 12,
            },
          ],
        },
        {
          id: "count",
          label: "On the card",
          image: `${MEDIA}/12-market-comment.png`,
          audio: `${MEDIA}/12-market-comment.mp3`,
          narration: "Back on Market, the same card now says 1 comment.",
          hotspots: [
            {
              id: "count",
              label: "1 comment",
              insight: "The same card now says 1 comment.",
              top: 55,
              left: 6,
              width: 48,
              height: 32,
            },
          ],
        },
      ],
    },
    {
      id: "tag",
      label: "Tag friends",
      frames: [
        {
          id: "sheet",
          label: "Pick people",
          image: `${MEDIA}/10-tag-friends.png`,
          audio: `${MEDIA}/10-tag-friends.mp3`,
          narration:
            "Tag friends lists people in the club, with friends marked. Jay Burgos and Tom Smith are both picked. Tag 2 people sends the notification. Cancel closes this.",
          hotspots: [
            {
              id: "people",
              label: "Jay and Tom",
              insight:
                "Friends are marked. Jay Burgos and Tom Smith are both picked.",
              top: 50,
              left: 12,
              width: 76,
              height: 14,
            },
            {
              id: "send",
              label: "Tag 2 people",
              insight: "Tag 2 people sends the notification.",
              top: 68,
              left: 14,
              width: 72,
              height: 8,
            },
            {
              id: "cancel",
              label: "Cancel",
              insight: "Cancel closes this.",
              top: 77,
              left: 14,
              width: 72,
              height: 7,
            },
          ],
        },
        {
          id: "done",
          label: "Tagged",
          image: `${MEDIA}/11-tagged.png`,
          audio: `${MEDIA}/11-tagged.mp3`,
          narration:
            "The listing now says tagged 2 people. They'll get a notification. Mark as sold, edit, tag friends, and delete are still here, and the comment stays.",
          hotspots: [
            {
              id: "note",
              label: "Tagged 2 people",
              insight: "They'll get a notification.",
              top: 26,
              left: 6,
              width: 84,
              height: 5,
            },
            {
              id: "sold",
              label: "Mark as sold",
              insight: "Mark as sold, edit, tag friends, and delete are still here.",
              top: 33.8,
              left: 6.7,
              width: 87,
              height: 6,
            },
            {
              id: "comment",
              label: "The comment",
              insight: "The comment stays.",
              top: 68,
              left: 6,
              width: 70,
              height: 12,
            },
          ],
        },
      ],
    },
    {
      id: "pay",
      label: "Getting paid",
      frames: [
        {
          id: "handles",
          label: "Payment details",
          image: `${MEDIA}/13-payment-details.png`,
          audio: `${MEDIA}/13-payment-details.mp3`,
          narration:
            "Payment details are how a buyer can pay you. Nobody sees them until you send them with the dollar button in a chat. Cash App, Venmo, PayPal, and Zelle. Save keeps what you typed. Done closes the screen.",
          hotspots: [
            {
              id: "intro",
              label: "Private until you send them",
              insight:
                "Nobody sees them until you send them with the dollar button in a chat.",
              top: 13,
              left: 6,
              width: 88,
              height: 10,
            },
            {
              id: "handles",
              label: "Cash App, Venmo, PayPal, Zelle",
              insight: "Cash App, Venmo, PayPal, and Zelle.",
              top: 24,
              left: 6,
              width: 88,
              height: 50,
            },
            {
              id: "save",
              label: "Save",
              insight: "Save keeps what you typed.",
              top: 76.5,
              left: 6.3,
              width: 87,
              height: 5.8,
            },
            {
              id: "done",
              label: "Done",
              insight: "Done closes the screen.",
              top: 84.5,
              left: 6,
              width: 88,
              height: 6,
            },
          ],
        },
        {
          id: "chat",
          label: "In the chat",
          image: `${MEDIA}/14-chat-pay.png`,
          audio: `${MEDIA}/14-chat-pay.mp3`,
          narration:
            "The dollar button sits next to the hash while the two of you are still sorting out an item. Sending your payment details posts each one as a Copy button. Cash App is $timmy82. Zelle is the email. The buyer taps Copy, sees Copied, and pastes it into their own payment app.",
          hotspots: [
            {
              id: "handles",
              label: "Copy Cash App and Zelle",
              insight:
                "Each payment detail is a Copy button. Tap it, then paste it into your payment app.",
              top: 10,
              left: 4,
              width: 72,
              height: 26,
            },
            {
              id: "dollar",
              label: "Dollar button",
              insight:
                "The dollar button sits next to the hash while you're still sorting out an item.",
              top: 89.5,
              left: 14,
              width: 12,
              height: 6,
            },
          ],
        },
      ],
    },
  ],
};
