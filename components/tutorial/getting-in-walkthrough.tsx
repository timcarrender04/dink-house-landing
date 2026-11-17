import type {
  TutorialFrame,
  TutorialHotspot,
} from "@/config/getting-in-tutorial";

import { useEffect, useRef, useState } from "react";

import { GETTING_IN_CHAPTER } from "@/config/getting-in-tutorial";
import { HOME_CHAPTER } from "@/config/home-tutorial";
import { DHL_CHAPTER } from "@/config/dhl-tutorial";
import { CHECK_IN_CHAPTER } from "@/config/check-in-tutorial";
import { DOOR_CHAPTER } from "@/config/door-tutorial";
import { BOOK_A_COURT_CHAPTER } from "@/config/book-a-court-tutorial";
import { SESSIONS_CHAPTER } from "@/config/sessions-tutorial";
import { MY_BOOKINGS_CHAPTER } from "@/config/my-bookings-tutorial";
import { OPEN_PLAY_CHAPTER } from "@/config/open-play-tutorial";
import { OPEN_PLAY_SURVEY_CHAPTER } from "@/config/open-play-survey-tutorial";
import { LADDER_CHAPTER } from "@/config/ladder-tutorial";
import { SOCIAL_CHAPTER } from "@/config/social-tutorial";
import { MARKET_CHAPTER } from "@/config/market-tutorial";
import { PROFILE_CHAPTER } from "@/config/profile-tutorial";
import { NEW_PLAYER_CHAPTER } from "@/config/new-player-tutorial";
import { STAFF_CHAPTER } from "@/config/staff-tutorial";
import { ACCOUNT_RECOVERY_CHAPTER } from "@/config/account-recovery-tutorial";

const CHAPTERS = [
  NEW_PLAYER_CHAPTER,
  GETTING_IN_CHAPTER,
  HOME_CHAPTER,
  DHL_CHAPTER,
  CHECK_IN_CHAPTER,
  DOOR_CHAPTER,
  BOOK_A_COURT_CHAPTER,
  SESSIONS_CHAPTER,
  MY_BOOKINGS_CHAPTER,
  OPEN_PLAY_CHAPTER,
  OPEN_PLAY_SURVEY_CHAPTER,
  LADDER_CHAPTER,
  SOCIAL_CHAPTER,
  MARKET_CHAPTER,
  PROFILE_CHAPTER,
  STAFF_CHAPTER,
  ACCOUNT_RECOVERY_CHAPTER,
];

const AUTO_PLAY_KEY = "dink-walkthrough-autoplay";

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
          : "border-dashed border-dink-lime/35 hover:border-solid hover:border-dink-lime/80 hover:bg-dink-lime/10"
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
        transform: below ? "translate(-50%, 0)" : "translate(-50%, -100%)",
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
    <div className="relative mx-auto w-full max-w-[250px] sm:max-w-[290px] md:max-w-[320px]">
      <div className="overflow-hidden rounded-[1.75rem] border-[7px] md:rounded-[2rem] md:border-[8px] border-neutral-800 bg-black shadow-2xl ring-1 ring-white/10">
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
  const [autoPlay, setAutoPlay] = useState(false);
  const autoPlayRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const chapterListRef = useRef<HTMLDivElement>(null);

  const chapter = CHAPTERS[chapterIndex];
  const step = chapter.steps[stepIndex];
  const frame = step.frames[frameIndex] ?? step.frames[0];
  const activeId = hoveredId ?? focusedId ?? pinnedId;
  const active =
    frame.hotspots.find((hotspot) => hotspot.id === activeId) ?? null;

  const playAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;
    // Browsers can block play() before the visitor has interacted with the page.
    audio.play().catch(() => setPlaying(false));
  };

  useEffect(() => {
    let saved = false;

    try {
      saved = window.localStorage.getItem(AUTO_PLAY_KEY) === "1";
    } catch {
      // Storage unavailable (private mode, blocked site data): default off.
    }
    autoPlayRef.current = saved;
    setAutoPlay(saved);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
    setHoveredId(null);
    setFocusedId(null);
    setPinnedId(null);
    if (autoPlayRef.current) playAudio();
  }, [frame.id]);

  const toggleAutoPlay = () => {
    const next = !autoPlay;

    autoPlayRef.current = next;
    setAutoPlay(next);
    try {
      window.localStorage.setItem(AUTO_PLAY_KEY, next ? "1" : "0");
    } catch {
      // Not persisted; the toggle still works for this visit.
    }
    if (next && audioRef.current?.paused) playAudio();
  };

  useEffect(() => {
    tabListRef.current
      ?.querySelector<HTMLButtonElement>('[aria-selected="true"]')
      ?.scrollIntoView({ inline: "nearest", block: "nearest" });
  }, [chapterIndex, stepIndex]);

  useEffect(() => {
    chapterListRef.current
      ?.querySelector<HTMLButtonElement>('[aria-selected="true"]')
      ?.scrollIntoView({ inline: "nearest", block: "nearest" });
  }, [chapterIndex]);

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
      playAudio();
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

  const navRef = useRef({ goBack, goForward });

  navRef.current = { goBack, goForward };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
        return;
      const target = event.target as HTMLElement | null;

      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        navRef.current.goForward();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        navRef.current.goBack();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const lastInChapter =
    stepIndex === chapter.steps.length - 1 &&
    frameIndex === step.frames.length - 1;
  const nextChapter = CHAPTERS[chapterIndex + 1];
  const nextLabel =
    lastInChapter && nextChapter ? `Next: ${nextChapter.label}` : "Next";

  const navButtons = (
    <>
      <button
        className="shrink-0 border border-gray-600 px-5 py-3 text-sm font-bold uppercase tracking-wider text-gray-200 transition-colors hover:border-dink-lime hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-gray-600"
        disabled={atStart}
        type="button"
        onClick={goBack}
      >
        Back
      </button>
      <button
        className="min-w-0 flex-1 truncate bg-dink-lime px-5 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#9FE600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-30 md:flex-none"
        disabled={atEnd}
        type="button"
        onClick={goForward}
      >
        {atEnd ? "All done" : nextLabel}
      </button>
    </>
  );

  return (
    <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
      {/* Desktop: chapter sidebar */}
      <nav aria-label="Walkthrough chapters" className="hidden lg:block">
        <div
          ref={chapterListRef}
          aria-orientation="vertical"
          className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto border-l border-gray-800 pr-2"
          role="tablist"
        >
          <p className="mb-2 pl-4 text-xs font-bold uppercase tracking-wider text-gray-500">
            Chapters
          </p>
          {CHAPTERS.map((item, index) => {
            const selected = index === chapterIndex;

            return (
              <button
                key={item.id}
                aria-selected={selected}
                className={`-ml-px flex w-full items-baseline gap-3 border-l-2 py-2 pl-4 pr-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-dink-lime ${
                  selected
                    ? "border-dink-lime bg-dink-lime/10 font-bold text-white"
                    : "border-transparent text-gray-400 hover:border-gray-500 hover:text-white"
                }`}
                role="tab"
                type="button"
                onClick={() => selectChapter(index)}
              >
                <span
                  className={`w-5 shrink-0 text-xs tabular-nums ${
                    selected ? "text-dink-lime" : "text-gray-600"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="min-w-0">
        {/* Mobile / tablet: chapter picker */}
        <div className="mb-5 lg:hidden">
          <label
            className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-500"
            htmlFor="walkthrough-chapter"
          >
            <span>Chapter</span>
            <span className="tabular-nums">
              {chapterIndex + 1} / {CHAPTERS.length}
            </span>
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none border-2 border-gray-700 bg-dink-gray py-3 pl-4 pr-10 text-base font-bold uppercase tracking-wider text-white focus:border-dink-lime focus:outline-none"
              id="walkthrough-chapter"
              value={chapterIndex}
              onChange={(event) => selectChapter(Number(event.target.value))}
            >
              {CHAPTERS.map((item, index) => (
                <option key={item.id} value={index}>
                  {index + 1}. {item.label}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-dink-lime"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="hidden lg:block">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Chapter {chapterIndex + 1} of {CHAPTERS.length}
          </p>
          <h2 className="mt-1 text-2xl font-bold uppercase tracking-wider text-white">
            {chapter.label}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-gray-400 lg:mt-2">
          {chapter.intro}
        </p>

        {/* Steps */}
        <div className="relative -mx-4 mt-4 sm:mx-0">
          <div
            ref={tabListRef}
            aria-label="Walkthrough steps"
            className="flex gap-1.5 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
            role="tablist"
          >
            {chapter.steps.map((item, index) => {
              const selected = index === stepIndex;

              return (
                <button
                  key={item.id}
                  aria-selected={selected}
                  className={`flex shrink-0 items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime ${
                    selected
                      ? "border-dink-lime bg-dink-lime text-black"
                      : "border-gray-700 text-gray-300 hover:border-dink-lime hover:text-white"
                  }`}
                  role="tab"
                  type="button"
                  onClick={() => selectStep(index)}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold tabular-nums ${
                      selected
                        ? "bg-black text-dink-lime"
                        : index < stepIndex
                          ? "bg-dink-lime/20 text-dink-lime"
                          : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent sm:hidden"
          />
        </div>

        <div className="mt-6 grid items-start gap-x-10 gap-y-6 [grid-template-areas:'head'_'phone'_'body'] md:grid-cols-[300px_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:[grid-template-areas:'phone_head'_'phone_body'] xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="[grid-area:head]">
            <p className="text-xs font-bold uppercase tracking-wider text-dink-lime">
              Step {stepIndex + 1} of {chapter.steps.length}
              {step.frames.length > 1 &&
                ` · Screen ${frameIndex + 1} of ${step.frames.length}`}
            </p>
            <h3 className="mt-1.5 text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
              {step.label}
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <button
                aria-pressed={playing}
                className="flex items-center gap-2 bg-dink-lime px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#9FE600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                type="button"
                onClick={toggleAudio}
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {playing ? (
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                  ) : (
                    <path d="M7 4.5v15l13-7.5z" />
                  )}
                </svg>
                {playing ? "Pause narration" : "Play narration"}
              </button>
              <button
                aria-checked={autoPlay}
                className="group flex items-center gap-2.5 py-2 text-xs font-bold uppercase tracking-wider text-gray-300 transition-colors hover:text-white focus-visible:outline-none"
                role="switch"
                type="button"
                onClick={toggleAutoPlay}
              >
                <span
                  aria-hidden="true"
                  className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border transition-colors group-focus-visible:ring-2 group-focus-visible:ring-dink-lime ${
                    autoPlay
                      ? "border-dink-lime bg-dink-lime"
                      : "border-gray-600 bg-gray-800"
                  }`}
                >
                  <span
                    className={`absolute h-3.5 w-3.5 rounded-full transition-transform ${
                      autoPlay
                        ? "translate-x-[18px] bg-black"
                        : "translate-x-[2px] bg-gray-400"
                    }`}
                  />
                </span>
                Auto-play
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Tap the outlined areas on the phone to learn more.
            </p>
            {/* The narration card below is the on-screen transcript. */}
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio
              ref={audioRef}
              preload="none"
              src={frame.audio}
              onEnded={() => setPlaying(false)}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            />
          </div>

          <div className="[grid-area:phone] md:sticky md:top-24">
            <PhoneStage
              active={active}
              frame={frame}
              pinnedId={pinnedId}
              onFocus={setFocusedId}
              onHover={setHoveredId}
              onPin={pin}
            />

            {step.frames.length > 1 && (
              <div className="mx-auto mt-4 flex max-w-[320px] gap-1.5">
                {step.frames.map((item, index) => (
                  <button
                    key={item.id}
                    aria-pressed={index === frameIndex}
                    className={`min-w-0 flex-1 truncate px-2 py-2 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime ${
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
          </div>

          <div className="[grid-area:body]">
            <div
              aria-live="polite"
              className={`border-2 bg-dink-gray p-5 transition-colors sm:p-6 ${
                active ? "border-dink-lime/60" : "border-gray-800"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-dink-lime">
                    {active ? "Insight" : "Narration"}
                  </p>
                  <h4 className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                    {active ? active.label : frame.label}
                  </h4>
                </div>
                {pinnedId && (
                  <button
                    aria-label="Close insight and show the narration"
                    className="-mr-2 -mt-1 shrink-0 p-2 text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dink-lime"
                    type="button"
                    onClick={() => setPinnedId(null)}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </button>
                )}
              </div>
              <p className="mt-3 leading-relaxed text-gray-200">
                {active ? active.insight : frame.narration}
              </p>
            </div>

            {frame.hotspots.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  On this screen
                </p>
                <div className="flex flex-wrap gap-2">
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
            )}

            <div className="mt-8 hidden items-center gap-3 md:flex">
              {navButtons}
              <span className="ml-auto hidden text-xs text-gray-500 xl:inline">
                Tip: use the ← → keys
              </span>
            </div>
          </div>
        </div>

        {/* Mobile: Back / Next pinned to the bottom while the walkthrough is on screen */}
        <div className="sticky bottom-0 z-30 -mx-4 mt-8 flex gap-3 border-t border-gray-800 bg-black/90 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
          {navButtons}
        </div>
      </div>
    </div>
  );
}
