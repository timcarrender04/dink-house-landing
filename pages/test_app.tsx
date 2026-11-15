import NextHead from "next/head";

import {
  TEST_APP_GUIDE_PDF,
  TEST_APP_LESSONS,
  testAppVideoUrl,
} from "@/config/test-app-tutorials";
import DefaultLayout from "@/layouts/default";

export default function TestAppPage() {
  return (
    <DefaultLayout title="App walkthrough - The Dink House">
      <NextHead>
        <meta content="noindex, nofollow" name="robots" />
      </NextHead>
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-6">
          App walkthrough
        </h1>
        <div className="mb-10 border-2 border-gray-700">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-700">
            <h2 className="text-lg font-bold text-dink-lime">
              Player test guide
            </h2>
            <a
              className="text-sm font-bold uppercase tracking-wider text-dink-lime hover:text-white"
              href={TEST_APP_GUIDE_PDF}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open PDF
            </a>
          </div>
          <iframe
            className="w-full h-[75vh] min-h-[480px] bg-white"
            src={`${TEST_APP_GUIDE_PDF}#toolbar=1&navpanes=0&view=FitH`}
            title="The Dink House player test guide"
          />
        </div>
        <p className="text-gray-400 mb-10">
          Short recordings of the member app, in the same order as the player
          test. Use a real iPhone or Android phone and a player login. Allow
          the camera, location, and notifications when the phone asks. The door
          recording only counts when you are at the club.
        </p>

        <div className="space-y-12 text-gray-200 leading-relaxed">
          {TEST_APP_LESSONS.map((lesson, index) => (
            <section key={lesson.file}>
              <h2 className="text-xl font-bold text-dink-lime mb-2">
                {index + 1}. {lesson.title}
              </h2>
              <p className="mb-4">{lesson.body}</p>
              <video
                controls
                playsInline
                className="w-full max-w-[360px] bg-black"
                preload="metadata"
                src={testAppVideoUrl(lesson.file)}
              />
            </section>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
