import { useState } from "react";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";
import MilitaryRequestForm, {
  type MilitaryEventType,
} from "@/components/military/request-form";

const FACTS = [
  { label: "Window", value: "0600–0800" },
  { label: "Length", value: "2 hours" },
  { label: "Courts", value: "All of them" },
  { label: "Size", value: "Up to a company" },
] as const;

const KINDS: {
  type: MilitaryEventType;
  icon: string;
  text: string;
}[] = [
  {
    type: "Officer PT",
    icon: "solar:star-bold",
    text: "Officers take the morning together. A short introduction, then PT on the courts.",
  },
  {
    type: "Soldier PT",
    icon: "solar:users-group-rounded-bold",
    text: "The company or platoon runs PT here. New players get an introduction, then rotate onto the courts.",
  },
  {
    type: "Unit function",
    icon: "solar:flag-bold",
    text: "A unit event on the same block. The facility is yours from 0600 to 0800.",
  },
  {
    type: "Org day",
    icon: "solar:cup-star-bold",
    text: "The unit's organizational day. The whole facility from 0900 to about 1400. This booking is paid, and staff confirms the cost.",
  },
];

const MORNING = [
  {
    icon: "solar:clock-circle-bold",
    title: "0600, the facility is yours",
    text: "Every court is reserved for the unit until 0800. This is a private morning, not an open-play session.",
  },
  {
    icon: "solar:play-circle-bold",
    title: "Introduction to pickleball",
    text: "Anyone new to the game gets a short introduction before they step on the court.",
  },
  {
    icon: "solar:restart-bold",
    title: "Rotate through PT",
    text: "A company is on site for the full two hours and rotates through the courts so everyone gets on.",
  },
] as const;

export default function MilitaryPage() {
  const [eventType, setEventType] = useState<MilitaryEventType | "">("");

  const choose = (type: MilitaryEventType) => {
    setEventType(type);
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <DefaultLayout title="Military PT | The Dink House">
      <div className="bg-dink-lime text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-4 text-center">
          <p className="font-display text-4xl uppercase leading-none sm:text-5xl">
            Coming soon
          </p>
          <p className="text-sm font-semibold leading-5 sm:text-base">
            Unit bookings are not open yet. Leave your info and we will keep
            it.
          </p>
        </div>
      </div>
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-5">
          <span className="rounded-full bg-dink-lime px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
            Fort Hood units
          </span>
          <h1 className="font-display text-[clamp(40px,7vw,84px)] uppercase leading-[0.95]">
            <span className="block text-white">PT at</span>
            <span className="inline-block bg-dink-lime px-2 text-black">
              0600.
            </span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-default-500 sm:text-lg">
            Bring the unit to The Dink House in Nolanville. The whole facility
            is yours for two hours, from 0600 to 0800, for an introduction to
            pickleball and morning PT. An organizational day is separate: 0900
            to about 1400, and that booking is paid.
          </p>
          <Button
            as="a"
            className="h-12 bg-dink-lime px-8 font-bold uppercase text-black hover:bg-dink-lime-dark"
            href="#request"
            radius="full"
            size="lg"
          >
            Request a morning
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-3xl border border-white/10 bg-black/60 p-5"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-dink-lime">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-3xl uppercase text-white sm:text-4xl">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          PT at 0600. <span className="text-dink-lime">Org day</span> runs
          longer
        </h2>
        <p className="mb-8 max-w-2xl text-default-500">
          Officer PT, Soldier PT, and unit functions take every court from 0600
          to 0800. An org day starts at 0900 and runs until about 1400. That
          booking is paid, and staff confirms the cost.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KINDS.map((kind) => {
            const active = eventType === kind.type;

            return (
              <button
                key={kind.type}
                className={`rounded-2xl border p-6 text-left transition-colors ${
                  active
                    ? "border-dink-lime bg-dink-lime/10"
                    : "border-zinc-800 bg-zinc-950 hover:border-dink-lime/60"
                }`}
                type="button"
                onClick={() => choose(kind.type)}
              >
                <Icon
                  className="mb-4 text-dink-lime"
                  icon={kind.icon}
                  width={32}
                />
                <p className="font-display text-3xl uppercase text-white">
                  {kind.type}
                </p>
                <p className="mt-3 text-sm leading-6 text-default-500">
                  {kind.text}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
          How a <span className="text-dink-lime">PT morning</span> runs
        </h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {MORNING.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <span className="absolute right-6 top-5 font-display text-5xl text-zinc-800">
                {i + 1}
              </span>
              <Icon
                className="mb-4 text-dink-lime"
                icon={step.icon}
                width={32}
              />
              <h3 className="mb-2 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-default-500">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
        id="request"
      >
        <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
          Request the <span className="text-dink-lime">morning</span>
        </h2>
        <p className="mb-8 text-default-500">
          Tell us the unit, the point of contact, and the date you want. We
          save it for when unit bookings open. This does not hold the courts.
        </p>
        <div className="rounded-3xl border border-white/10 bg-black/60 p-5 sm:p-8">
          <MilitaryRequestForm
            eventType={eventType}
            onEventTypeChange={setEventType}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
