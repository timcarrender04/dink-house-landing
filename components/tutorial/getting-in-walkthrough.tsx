import { useEffect, useRef, useState } from "react";

import { GETTING_IN_CHAPTER } from "@/config/getting-in-tutorial";
import type {
  TutorialFrame,
  TutorialHotspot,
} from "@/config/getting-in-tutorial";
import { HOME_CHAPTER } from "@/config/home-tutorial";
import { CHECK_IN_CHAPTER } from "@/config/check-in-tutorial";
import { DOOR_CHAPTER } from "@/config/door-tutorial";

const CHAPTERS = [
  GETTING_IN_CHAPTER,
  HOME_CHAPTER,
  CHECK_IN_CHAPTER,
  DOOR_CHAPTER,
];

const CHIP =
  "rounded-full border border-gray-700 px-3 py-1.5 text-left text-xs font-semibold text-gray-200 transition-colors hover:border-dink-lime hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime";

const CHIP_ON = "border-dink-lime bg-dink-lime text-black hover:text-black";

function HotspotButton({
  hotspot,
  active,
  pressed,
  onHover,
  onFocus,
  onPin,
}: {
  hotspot: TutorialHotspot;
  active: boolean;
  pressed: boolean;
  onHover: (id: string | null) => void;
  onFocus: (id: string | null) => void;
  onPin: (id: string) => void;
}) {
  return (
    <button
      aria-label={hotspot.label}
      aria-pressed={pressed}
      className={`absolute rounded-md border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime ${
        active
          ? "border-dink-lime bg-dink-lime/15"
          : "border-transparent hover:border-dink-lime/80 hover:bg-dink-lime/10"
      }`}
      style={{
        top: `${hotspot.top}%`,
        left: `${hotspot.left}%`,
        width: `${hotspot.width}%`,
        height: `${hotspot.height}%`,
      }}
      type="button"
      onBlur={() => onFocus(null)}
      onClick={() => onPin(hotspot.id)}
      onFocus={() => onFocus(hotspot.id)}
      onMouseEnter={() => onHover(hotspot.id)}
      onMouseLeave={() => onHover(null)}
    />
  );
}

function Tip({ hotspot }: { hotspot: TutorialHotspot }) {
  const below = hotspot.top < 16;
  const center = Math.min(82, Math.max(18, hotspot.left + hotspot.width / 2));

  return (
    <div
      className="pointer-events-none absolute z-20 max-w-[78%] rounded-md bg-dink-lime px-2.5 py-1 text-center text-[11px] font-bold leading-tight text-black shadow-lg"
      role="tooltip"
      style={{
        left: `${center}%`,
        top: below
          ? `${hotspot.top + hotspot.height + 1}%`
          : `${Math.max(hotspot.top - 1, 1)}%`,
        transform: below
          ? "translate(-50%, 0)"
          : "translate(-50%, -100%)",
      }}
    >
      {hotspot.label}
    </div>
  );
}

function PhoneStage({
  frame,
  active,
  pinnedId,
  onHover,
  onFocus,
  onPin,
}: {
  frame: TutorialFrame;
  active: TutorialHotspot | null;
  pinnedId: string | null;
  onHover: (id: string | null) => void;
  onFocus: (id: string | null) => void;
  onPin: (id: string) => void;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="overflow-hidden rounded-[2rem] border-[8px] border-neutral-800 bg-black shadow-2xl ring-1 ring-white/10">
        <div className="relative aspect-[1080/2400]">
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            src={frame.image}
          />
            {frame.hotspots.map((hotspot) => (
            <HotspotButton
              key={hotspot.id}
              active={active?.id === hotspot.id}
              hotspot={hotspot}
              pressed={pinnedId === hotspot.id}
              onFocus={onFocus}
              onHover={onHover}
              onPin={onPin}
            />
          ))}
          {active && <Tip hotspot={active} />}
        </div>
      </div>
    </div>
  );
}

export default function GettingInWalkthrough() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const chapter = CHAPTERS[chapterIndex];
  const step = chapter.steps[stepIndex];
  const frame = step.frames[frameIndex] ?? step.frames[0];
  const activeId = hoveredId ?? focusedId ?? pinnedId;
  const active =
    frame.hotspots.find((hotspot) => hotspot.id === activeId) ?? null;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
    setHoveredId(null);
    setFocusedId(null);
    setPinnedId(null);
  }, [frame.id]);

  useEffect(() => {
    tabListRef.current
      ?.querySelector<HTMLButtonElement>('[aria-selected="true"]')
      ?.scrollIntoView({ inline: "nearest", block: "nearest" });
  }, [stepIndex]);

  const selectChapter = (index: number) => {
    setChapterIndex(index);
    setStepIndex(0);
    setFrameIndex(0);
  };

  const selectStep = (index: number) => {
    setStepIndex(index);
    setFrameIndex(0);
  };

  const goBack = () => {
    if (frameIndex > 0) {
      setFrameIndex(frameIndex - 1);
      return;
    }
    if (stepIndex > 0) {
      const previous = chapter.steps[stepIndex - 1];

      setStepIndex(stepIndex - 1);
      setFrameIndex(previous.frames.length - 1);
      return;
    }
    if (chapterIndex > 0) {
      const previous = CHAPTERS[chapterIndex - 1];
      const lastStep = previous.steps[previous.steps.length - 1];

      setChapterIndex(chapterIndex - 1);
      setStepIndex(previous.steps.length - 1);
      setFrameIndex(lastStep.frames.length - 1);
    }
  };

  const goForward = () => {
    if (frameIndex < step.frames.length - 1) {
      setFrameIndex(frameIndex + 1);
      return;
    }
    if (stepIndex < chapter.steps.length - 1) {
      setStepIndex(stepIndex + 1);
      setFrameIndex(0);
      return;
    }
    if (chapterIndex < CHAPTERS.length - 1) {
      setChapterIndex(chapterIndex + 1);
      setStepIndex(0);
      setFrameIndex(0);
    }
  };

  const atStart = chapterIndex === 0 && stepIndex === 0 && frameIndex === 0;
  const atEnd =
    chapterIndex === CHAPTERS.length - 1 &&
    stepIndex === chapter.steps.length - 1 &&
    frameIndex === step.frames.length - 1;

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;
    if (audio.paused) {
      void audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const pin = (id: string) => {
    setHoveredId(null);
    setFocusedId(null);
    setPinnedId((current) => (current === id ? null : id));
  };

  return (
    <div>
      <div
        aria-label="Walkthrough chapters"
        className="mb-3 flex gap-2 overflow-x-auto pb-1"
        role="tablist"
      >
        {CHAPTERS.map((item, index) => {
          const selected = index === chapterIndex;

          return (
            <button
              key={item.id}
              aria-selected={selected}
              className={`shrink-0 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime ${
                selected
                  ? "bg-dink-lime text-black"
                  : "border border-gray-700 text-gray-300 hover:border-dink-lime hover:text-white"
              }`}
              role="tab"
              type="button"
              onClick={() => selectChapter(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className="mb-4 max-w-2xl text-sm text-gray-400">{chapter.intro}</p>
      <div
        aria-label="Walkthrough steps"
        ref={tabListRef}
        className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible"
        role="tablist"
      >
        {chapter.steps.map((item, index) => {
          const selected = index === stepIndex;

          return (
            <button
              key={item.id}
              aria-selected={selected}
              className={`shrink-0 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime ${
                selected
                  ? "bg-dink-lime text-black"
                  : "border border-gray-700 text-gray-300 hover:border-dink-lime hover:text-white"
              }`}
              role="tab"
              type="button"
              onClick={() => selectStep(index)}
            >
              {index + 1}. {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] lg:gap-12">
        <div className="lg:sticky lg:top-24">
          <PhoneStage
            active={active}
            frame={frame}
            pinnedId={pinnedId}
            onFocus={setFocusedId}
            onHover={setHoveredId}
            onPin={pin}
          />

          {step.frames.length > 1 && (
            <div className="mx-auto mt-4 flex max-w-[340px] gap-2">
              {step.frames.map((item, index) => (
                <button
                  key={item.id}
                  className={`flex-1 px-3 py-2 text-xs font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime ${
                    index === frameIndex
                      ? "bg-dink-lime text-black"
                      : "border border-gray-700 text-gray-300 hover:border-dink-lime"
                  }`}
                  type="button"
                  onClick={() => setFrameIndex(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          <div className="mx-auto mt-4 flex max-w-[340px] flex-wrap gap-2">
            {frame.hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                aria-pressed={pinnedId === hotspot.id}
                className={`${CHIP} ${active?.id === hotspot.id ? CHIP_ON : ""}`}
                type="button"
                onClick={() => pin(hotspot.id)}
              >
                {hotspot.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-wider text-dink-lime">
            Step {stepIndex + 1} of {chapter.steps.length}
          </p>
          <h2 className="mt-2 text-3xl font-bold uppercase tracking-wider">
            {step.label}
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Hover or tap what the narration mentions. The same lines sit under
            the phone.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              className="px-6 py-3 bg-dink-lime text-black text-sm font-bold uppercase tracking-wider hover:bg-[#9FE600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              type="button"
              onClick={toggleAudio}
            >
              {playing ? "Pause narration" : "Play narration"}
            </button>
            <audio
              ref={audioRef}
              preload="none"
              src={frame.audio}
              onEnded={() => setPlaying(false)}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            />
          </div>

          <div
            aria-live="polite"
            className="mt-6 border-2 border-gray-700 bg-dink-gray p-5 sm:p-6"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-dink-lime">
              {active ? "Insight" : "This step"}
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              {active ? active.label : step.label}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-200">
              {active ? active.insight : frame.narration}
            </p>
            {pinnedId && (
              <button
                className="mt-4 text-sm font-bold uppercase tracking-wider text-dink-lime hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime"
                type="button"
                onClick={() => setPinnedId(null)}
              >
                Show this step
              </button>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <button
              className="px-5 py-2 border border-gray-700 text-sm font-bold uppercase tracking-wider text-gray-200 hover:border-dink-lime disabled:cursor-not-allowed disabled:opacity-40"
              disabled={atStart}
              type="button"
              onClick={goBack}
            >
              Back
            </button>
            <button
              className="px-5 py-2 bg-dink-lime text-black text-sm font-bold uppercase tracking-wider hover:bg-[#9FE600] disabled:cursor-not-allowed disabled:opacity-40"
              disabled={atEnd}
              type="button"
              onClick={goForward}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
