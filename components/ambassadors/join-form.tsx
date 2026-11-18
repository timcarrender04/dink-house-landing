import { Button } from "@heroui/button";
import { useState } from "react";

import { fieldClass } from "@/components/ambassadors/section";
import { BACKEND_URL } from "@/lib/ambassadors";

const LEVELS = [
  ["", "Pick one"],
  ["new", "Brand new to pickleball"],
  ["2.5", "Beginner (about 2.5)"],
  ["3.0", "Advanced beginner (about 3.0)"],
  ["3.5", "Intermediate (about 3.5)"],
  ["4.0+", "Advanced (4.0 and up)"],
] as const;

const TIERS = [
  ["", "Not sure yet"],
  ["dink", "Dink"],
  ["ace", "Ace"],
  ["champion", "Champion"],
] as const;

export function JoinForm({ initialCode }: { initialCode: string }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    level: "",
    dupr: "",
    preferredTier: "",
    referralCode: initialCode,
  });
  const [honeypot, setHoneypot] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<null | { duplicate: boolean }>(null);
  const fromLink = Boolean(initialCode);

  const set =
    (field: keyof typeof values) => (event: { target: { value: string } }) =>
      setValues((current) => ({ ...current, [field]: event.target.value }));

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const { referralCode, ...rest } = values;
      const code = referralCode.trim();
      const response = await fetch(`${BACKEND_URL}/api/ambassadors/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...rest,
          // A code that arrived in the link counts as the link; a typed one as a code.
          ...(code
            ? fromLink && code === initialCode
              ? { ref: code }
              : { referralCode: code }
            : {}),
          _honeypot: honeypot,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        duplicate?: boolean;
      };

      if (!response.ok) {
        setError(data.error || "That didn't go through. Try again.");

        return;
      }
      setDone({ duplicate: Boolean(data.duplicate) });
    } catch {
      setError("You seem to be offline. Try again.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div
        className="rounded-2xl border border-dink-lime/40 bg-dink-lime/10 p-6"
        role="status"
      >
        <p className="text-athletic text-3xl text-dink-lime">
          {done.duplicate
            ? "You're already on the list"
            : "You're on the list!"}
        </p>
        <p className="mt-2 text-white/80">
          We&apos;ll email you about opening day and founding memberships.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={submit}>
      <h2 className="text-athletic text-3xl">Waitlist & pre-sale</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-medium">
          First name
          <input
            required
            autoComplete="given-name"
            className={fieldClass}
            maxLength={80}
            value={values.firstName}
            onChange={set("firstName")}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Last name
          <input
            required
            autoComplete="family-name"
            className={fieldClass}
            maxLength={80}
            value={values.lastName}
            onChange={set("lastName")}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Email
          <input
            required
            autoComplete="email"
            className={fieldClass}
            maxLength={200}
            type="email"
            value={values.email}
            onChange={set("email")}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Phone <span className="font-normal text-white/50">(optional)</span>
          <input
            autoComplete="tel"
            className={fieldClass}
            maxLength={40}
            type="tel"
            value={values.phone}
            onChange={set("phone")}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Your level
          <select
            className={fieldClass}
            value={values.level}
            onChange={set("level")}
          >
            {LEVELS.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          DUPR <span className="font-normal text-white/50">(optional)</span>
          <input
            className={fieldClass}
            inputMode="decimal"
            max={8}
            min={2}
            step={0.01}
            type="number"
            value={values.dupr}
            onChange={set("dupr")}
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Membership you&apos;re eyeing
          <select
            className={fieldClass}
            value={values.preferredTier}
            onChange={set("preferredTier")}
          >
            {TIERS.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium">
          Referral code{" "}
          <span className="font-normal text-white/50">(optional)</span>
          <input
            autoCapitalize="characters"
            className={`${fieldClass} uppercase`}
            maxLength={40}
            placeholder="DINK-TIM24"
            value={values.referralCode}
            onChange={set("referralCode")}
          />
        </label>
      </div>
      <input
        aria-hidden
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />
      {error ? (
        <p
          className="rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-danger"
          role="alert"
        >
          {error}
        </p>
      ) : null}
      <Button
        className="text-athletic w-full text-xl sm:w-fit sm:px-12"
        color="primary"
        isLoading={pending}
        radius="full"
        size="lg"
        type="submit"
      >
        Join the list
      </Button>
    </form>
  );
}
