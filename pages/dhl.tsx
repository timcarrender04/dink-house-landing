import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";
import WaitlistModal from "@/components/WaitlistModal";

// Copy here follows the rating rules in dink-house-backend/src/lib/dhl/rating.ts and
// assessment.ts. If those change, update this page too.

const BANDS = [
  {
    name: "Beginner",
    range: "2.0 – 2.9",
    icon: "solar:leaf-bold",
    text: "Learning the kitchen, keeping rallies going, and building a consistent serve and return.",
  },
  {
    name: "Intermediate",
    range: "3.0 – 3.9",
    icon: "solar:fire-bold",
    text: "Dinking with purpose, resetting hard balls, and playing as a team at the line.",
  },
  {
    name: "Advanced",
    range: "4.0 – 5.0",
    icon: "solar:crown-star-bold",
    text: "Fast hands, deliberate shot selection, and patience to win long points.",
  },
] as const;

const STEPS = [
  {
    icon: "solar:clipboard-check-bold",
    title: "Pick your starting point",
    text: "Answer a five-question quiz when you sign up and you start in the middle of your band. Never played? You start at 2.0. A verified DUPR or a placement from our staff works too.",
  },
  {
    icon: "solar:target-bold",
    title: "Play 5 placement games",
    text: "Your first five games find your level fast. We look at all of them together, so a strong newcomer lands where they belong in a handful of games instead of climbing one win at a time. If you win, your level won't drop.",
  },
  {
    icon: "solar:graph-up-bold",
    title: "Keep playing, keep moving",
    text: "After placement, every confirmed game nudges your level. Changes are bigger early on and settle as you play more, so your DHL stays steady but still tracks real improvement.",
  },
] as const;

const RULES = [
  {
    icon: "solar:scoreboard-bold",
    title: "The score matters, not just the win",
    text: "Winning 11-2 says more than winning 11-9. DHL compares the actual score with what the levels on court predicted.",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Winners never drop",
    text: "Win a game and your level holds or goes up. No losing points for a close win.",
  },
  {
    icon: "solar:hand-heart-bold",
    title: "A good loss still counts",
    text: "Take 9 off a stronger team and you can still go up a little, because you played better than expected.",
  },
  {
    icon: "solar:scale-bold",
    title: "Lopsided games barely move",
    text: "Beating a much weaker court earns almost nothing, and the underdog loses very little. Fair games are what move your level.",
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "Built for doubles",
    text: "Your team's level is the average of you and your partner, so playing with a stronger or newer partner is accounted for.",
  },
  {
    icon: "solar:mountains-bold",
    title: "The top is earned",
    text: "Above 3.5, gains get smaller the higher you go, while losses stay full size. A 4.5 has to be earned and held.",
  },
] as const;

const WHY_DHL = [
  {
    icon: "solar:user-plus-bold",
    title: "Everyone has one from day one",
    text: "You don't need a DUPR account or a history of rated matches. Brand-new players get a level at signup and are placed after five games.",
  },
  {
    icon: "solar:play-circle-bold",
    title: "Every open play game counts",
    text: "Scores are entered right here at the club, so your everyday rec games move your level. It updates as soon as a game is confirmed.",
  },
  {
    icon: "solar:map-point-bold",
    title: "It reflects play at our courts",
    text: "DHL only learns from games at The Dink House, against the people you'll actually see on court. That's what we need to balance open play and level-tagged sessions.",
  },
  {
    icon: "solar:tuning-2-bold",
    title: "Rules built for a club",
    text: "We wrote the rules so players want to play anyone: winners never drop, a good loss counts, and mismatches barely move. Every game is saved, so if we tune the rules we can recalculate everyone's level fairly.",
  },
] as const;

const FAQ = [
  {
    q: "Is DHL the same as DUPR?",
    a: "No. DHL is The Dink House's own level, learned from games played here. A verified DUPR can set where you start, and it lets you skip placement, but after that your DHL moves on its own.",
  },
  {
    q: "What does the dashed part of my chart mean?",
    a: "Dashed lines and open dots are your placement games. Solid line and filled dots are rated games after placement.",
  },
  {
    q: "What do I use my DHL for?",
    a: "Sessions can be tagged for a level band, like Beginner or Intermediate open play. Your live DHL decides which ones you can book, so the games stay balanced and fun.",
  },
  {
    q: "Why is my DHL shown as 2.9 when I'm at 2.97?",
    a: "Badges round down to one decimal so a 2.99 never shows as 3.0. You move up a band when you actually cross the line.",
  },
] as const;

export default function DhlPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DefaultLayout>
      {/* Hero */}
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-5">
          <span className="rounded-full bg-dink-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
            Dink House Level
          </span>
          <h1 className="font-display uppercase leading-[0.95] text-[clamp(40px,7vw,84px)]">
            <span className="block text-white">Know your</span>
            <span className="inline-block bg-dink-lime px-2 text-black">
              level.
            </span>
            <span className="block text-white">Watch it grow.</span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-default-500 sm:text-lg">
            DHL is our club&apos;s own 2.0 to 5.0 player level. It learns from
            every doubles game you play at The Dink House, using the score and
            not just who won, so you always know where you stand and get matched
            into games that are fun for everyone.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              className="h-12 bg-dink-lime px-8 font-bold uppercase text-black hover:bg-dink-lime-dark"
              radius="full"
              size="lg"
              onPress={() => setIsModalOpen(true)}
            >
              Get the app when we open
            </Button>
            <Button
              as="a"
              className="h-12 border-dink-lime px-8 font-bold uppercase text-dink-lime"
              href="#how-it-works"
              radius="full"
              size="lg"
              variant="bordered"
            >
              How it works
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <Image
            priority
            alt="The My DHL screen in The Dink House app, showing a 3.30 Intermediate level and a chart of every rated game"
            className="h-auto w-full rounded-[2rem] border-4 border-zinc-800 shadow-[0_0_80px_-20px_rgba(179,255,0,0.45)]"
            height={1680}
            sizes="(min-width: 1024px) 384px, 90vw"
            src="/images/dhl/timeline.jpg"
            width={1080}
          />
        </div>
      </section>

      {/* Bands */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          Three bands, <span className="text-dink-lime">one scale</span>
        </h2>
        <p className="mb-8 max-w-2xl text-default-500">
          Everyone sits somewhere from 2.0 to 5.0. Your band is what you see on
          your member card and what decides which level-tagged sessions you can
          join.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {BANDS.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <Icon className="mb-4 text-dink-lime" icon={b.icon} width={32} />
              <p className="font-display text-3xl uppercase text-white">
                {b.name}
              </p>
              <p className="mb-3 font-mono text-lg font-bold text-dink-lime">
                {b.range}
              </p>
              <p className="text-sm leading-6 text-default-500">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8"
        id="how-it-works"
      >
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
          How your <span className="text-dink-lime">DHL</span> is set
        </h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <span className="absolute right-6 top-5 font-display text-5xl text-zinc-800">
                {i + 1}
              </span>
              <Icon className="mb-4 text-dink-lime" icon={s.icon} width={32} />
              <h3 className="mb-2 text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-6 text-default-500">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* In the app */}
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <Image
            alt="The My DHL card on the app's home screen: 2.97, up 0.98 over the last 3 months"
            className="h-auto w-full rounded-2xl border border-zinc-800"
            height={542}
            sizes="(min-width: 1024px) 560px, 90vw"
            src="/images/dhl/home-card.jpg"
            width={964}
          />
        </div>
        <div className="order-1 flex flex-col gap-4 lg:order-2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Right on your <span className="text-dink-lime">home screen</span>
          </h2>
          <p className="text-default-500">
            Open the Dink House app and your DHL is the first thing you see,
            with how far you&apos;ve moved in the last three months. Tap through
            to your full timeline to:
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Touch and drag the chart to see the score and change from every game",
              "Switch between 1 month, 3 months, 6 months, 1 year, or all time",
              "See exactly where you crossed into a new band",
              "Review your recent changes, game by game",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white">
                <Icon
                  className="mt-0.5 flex-none text-dink-lime"
                  icon="solar:check-circle-bold"
                  width={22}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rules */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          Built to be <span className="text-dink-lime">fair</span>
        </h2>
        <p className="mb-8 max-w-2xl text-default-500">
          A few rules keep DHL honest and keep you wanting to play anyone,
          anytime.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RULES.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <Icon
                className="flex-none text-dink-lime"
                icon={r.icon}
                width={28}
              />
              <div>
                <h3 className="mb-1 font-bold text-white">{r.title}</h3>
                <p className="text-sm leading-6 text-default-500">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why DHL over DUPR */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          Why DHL and not <span className="text-dink-lime">just DUPR?</span>
        </h2>
        <p className="mb-8 max-w-2xl text-default-500">
          DUPR is great for comparing players across clubs and tournaments. For
          day-to-day play at The Dink House, we wanted a level that every member
          has and that every game here updates.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {WHY_DHL.map((w) => (
            <div
              key={w.title}
              className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <Icon
                className="flex-none text-dink-lime"
                icon={w.icon}
                width={28}
              />
              <div>
                <h3 className="mb-1 font-bold text-white">{w.title}</h3>
                <p className="text-sm leading-6 text-default-500">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4 rounded-2xl border border-dink-lime/40 bg-dink-lime/5 p-5">
          <Icon
            className="flex-none text-dink-lime"
            icon="solar:info-circle-bold"
            width={28}
          />
          <p className="text-sm leading-6 text-gray-300">
            <span className="font-bold text-white">
              We still use DUPR where it fits.
            </span>{" "}
            DUPR-rated events and Moneyball use your DUPR rating, and a verified
            DUPR gives you a head start on your DHL so you skip placement.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
          DHL <span className="text-dink-lime">questions</span>
        </h2>
        <div className="flex flex-col divide-y divide-zinc-800 rounded-2xl border border-zinc-800">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                {f.q}
                <Icon
                  className="flex-none text-dink-lime transition-transform group-open:rotate-45"
                  icon="solar:add-circle-linear"
                  width={24}
                />
              </summary>
              <p className="mt-3 text-sm leading-6 text-default-500">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-dink-lime bg-gradient-to-r from-black via-gray-900 to-black p-8 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="text-white">Find out your </span>
            <span className="text-dink-lime">DHL</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-300">
            Join the list and we&apos;ll let you know when the app and courts
            are ready. Your first five games will do the rest.
          </p>
          <Button
            className="h-12 w-full bg-dink-lime px-8 font-bold uppercase text-black hover:bg-dink-lime-dark sm:w-auto"
            radius="full"
            size="lg"
            onPress={() => setIsModalOpen(true)}
          >
            Join the list
          </Button>
        </div>
      </section>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </DefaultLayout>
  );
}
