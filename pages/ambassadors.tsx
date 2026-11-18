import type { GetServerSideProps } from "next";

import NextHead from "next/head";

import { ApplyForm } from "@/components/ambassadors/apply-form";
import {
  AmbassadorCard,
  AmbassadorSection,
} from "@/components/ambassadors/section";
import DefaultLayout from "@/layouts/default";
import {
  backendJson,
  GOAL_LABELS,
  type GoalKey,
  type ProgramInfo,
} from "@/lib/ambassadors";

const JOBS = [
  {
    title: "Bring new players",
    body: "Invite friends, coworkers and neighbors. Your code and share link make sure you get the credit.",
  },
  {
    title: "Help beginners",
    body: "Start a shift at open play or a beginner session and show newcomers the paddle stack, scoring and etiquette.",
  },
  {
    title: "Turn guests into members",
    body: "Answer questions and help guests find the membership that fits. No pressure, just a friendly face.",
  },
];

export const getServerSideProps: GetServerSideProps<{
  info: ProgramInfo | null;
}> = async () => ({
  props: { info: await backendJson<ProgramInfo>("/api/ambassadors") },
});

export default function BecomeAmbassadorPage({
  info,
}: {
  info: ProgramInfo | null;
}) {
  const founding = info?.phase === 0;
  const per = info?.period === "month" ? "month" : "quarter";

  return (
    <DefaultLayout>
      <NextHead>
        <title>Become an Ambassador · The Dink House</title>
        <meta
          content="Help The Dink House grow: bring in new players, help beginners at open play, and earn your membership back."
          name="description"
        />
      </NextHead>
      <AmbassadorSection
        eyebrow={founding ? "Founding ambassadors" : "Ambassador program"}
        intro={
          founding ? (
            <p>
              We&apos;re opening soon and looking for founding ambassadors to
              help build the club from day one. Founding ambassadors earn a{" "}
              <strong className="text-dink-lime">free first quarter</strong> at
              opening.
            </p>
          ) : (
            <p>
              Ambassadors grow the club. You pay your membership up front and
              earn it back as account credit toward next quarter when you hit
              your goals.
            </p>
          )
        }
        title="Become an Ambassador"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {JOBS.map((job) => (
            <AmbassadorCard key={job.title}>
              <h2 className="text-athletic text-2xl text-dink-lime">
                {job.title}
              </h2>
              <p className="mt-2 text-white/70">{job.body}</p>
            </AmbassadorCard>
          ))}
        </div>

        {info ? (
          <AmbassadorCard>
            <h2 className="text-athletic text-3xl">How it works</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-white/70">Goals each {per}:</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {Object.entries(info.goals).map(([key, value]) => (
                    <li
                      key={key}
                      className="flex items-center justify-between rounded-xl bg-black px-4 py-3"
                    >
                      <span>{GOAL_LABELS[key as GoalKey]}</span>
                      <span className="text-athletic text-2xl text-dink-lime">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 text-white/70">
                {founding ? (
                  <>
                    <p>
                      <strong className="text-white">
                        Founding ambassadors
                      </strong>{" "}
                      earn a free first quarter at opening when they meet their
                      pre-launch goals, or {info.rewardPartialPct}% off with{" "}
                      {GOAL_LABELS[info.keyGoal].toLowerCase()} plus one other
                      goal.
                    </p>
                    <p>No membership is needed to apply before we open.</p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong className="text-white">All goals met:</strong>{" "}
                      {info.rewardFullPct}% of your quarterly membership back as
                      account credit.
                    </p>
                    <p>
                      <strong className="text-white">
                        {GOAL_LABELS[info.keyGoal]} plus one other:
                      </strong>{" "}
                      {info.rewardPartialPct}% back.
                    </p>
                    <p>
                      Applicants must have been members in good standing for{" "}
                      {info.tenureMonths} months. Apply with the email on your
                      Dink House account.
                    </p>
                  </>
                )}
                <p>
                  Your progress, code, QR and shift log live in the Dink House
                  app, and ambassadors wear a badge on the paddle stack so
                  beginners can find you.
                </p>
              </div>
            </div>
          </AmbassadorCard>
        ) : null}

        <AmbassadorCard>
          <h2 className="text-athletic text-3xl">Apply</h2>
          <p className="mt-1 text-white/60">
            It takes about five minutes. We read every application.
          </p>
          <ApplyForm founding={founding} />
        </AmbassadorCard>
      </AmbassadorSection>
    </DefaultLayout>
  );
}
