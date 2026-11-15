import type { TutorialChapter } from "@/config/getting-in-tutorial";

const MEDIA = "/tutorials/door";

export const DOOR_CHAPTER: TutorialChapter = {
  id: "door",
  label: "The door",
  intro:
    "Unlock the door with the door sticker, or scan the QR code when the phone cannot read the sticker.",
  steps: [
    {
      id: "sticker",
      label: "Door sticker",
      frames: [
        {
          id: "unlock",
          label: "Unlock",
          image: `${MEDIA}/01-unlock.png`,
          audio: `${MEDIA}/01-unlock.mp3`,
          narration:
            "Tap Unlock the door. You can open it while the club is open. Face or fingerprint unlock is required, and only this phone can open the door. Hold your phone on the door sticker, then tap Read the sticker.",
          hotspots: [
            {
              id: "only-this-phone",
              label: "Face or fingerprint",
              insight:
                "Face or fingerprint unlock is required, and only this phone can open the door.",
              top: 21.5,
              left: 5.9,
              width: 88.2,
              height: 4.4,
            },
            {
              id: "read-sticker",
              label: "Read the sticker",
              insight: "Hold your phone on the door sticker, then tap Read the sticker.",
              top: 27.3,
              left: 5.9,
              width: 88.2,
              height: 5.3,
            },
          ],
        },
        {
          id: "cannot-read",
          label: "No sticker",
          image: `${MEDIA}/02-read-sticker.png`,
          audio: `${MEDIA}/02-read-sticker.mp3`,
          narration:
            "If this phone cannot read a sticker, you will see that here. Scan the QR code instead.",
          hotspots: [
            {
              id: "cannot-read",
              label: "Cannot read a sticker",
              insight: "If this phone cannot read a sticker, you will see that here.",
              top: 26.6,
              left: 5,
              width: 83,
              height: 4.4,
            },
            {
              id: "scan-qr",
              label: "Scan the QR code",
              insight: "Scan the QR code instead.",
              top: 39.7,
              left: 5.9,
              width: 88.2,
              height: 5.5,
            },
          ],
        },
      ],
    },
    {
      id: "qr",
      label: "QR code",
      frames: [
        {
          id: "camera-permission",
          label: "Camera",
          image: `${MEDIA}/03-camera-permission.png`,
          audio: `${MEDIA}/03-camera-permission.mp3`,
          narration:
            "The first time, the phone asks to use the camera. Allow it while you are using the app.",
          hotspots: [
            {
              id: "while-using",
              label: "While using the app",
              insight:
                "The first time, the phone asks to use the camera. Allow it while you are using the app.",
              top: 48.2,
              left: 12.4,
              width: 75,
              height: 6,
            },
          ],
        },
        {
          id: "scan",
          label: "Scan",
          image: `${MEDIA}/04-scan-qr-camera.png`,
          audio: `${MEDIA}/04-scan-qr-camera.mp3`,
          narration: "Point the camera at the code on the door.",
          hotspots: [
            {
              id: "camera",
              label: "Camera",
              insight: "Point the camera at the code on the door.",
              top: 41.4,
              left: 5.9,
              width: 88.2,
              height: 26.2,
            },
          ],
        },
      ],
    },
  ],
};
