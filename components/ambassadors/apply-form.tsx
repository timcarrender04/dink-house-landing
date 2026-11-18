import { Button } from "@heroui/button";
import { useState } from "react";

import { fieldClass } from "@/components/ambassadors/section";
import { BACKEND_URL } from "@/lib/ambassadors";

type Field =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "dhl"
  | "dupr"
  | "availability"
  | "why"
  | "welcomePlan";

const EMPTY: Record<Field, string> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dhl: "",
  dupr: "",
  availability: "",
  why: "",
  welcomePlan: "",
};

function Label({
  children,
  hint,
  htmlFor,
}: {
  children: React.ReactNode;
  hint?: string;
  htmlFor: string;
}) {
  return (
    <label
      className="flex flex-col gap-1 text-sm font-medium"
      htmlFor={htmlFor}
    >
      <span>
        {children}
        {hint ? (
          <span className="ml-1 font-normal text-white/50">{hint}</span>
        ) : null}
      </span>
    </label>
  );
}

export function ApplyForm({ founding }: { founding: boolean }) {
  const [values, setValues] = useState(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const set = (field: Field) => (event: { target: { value: string } }) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const response = await fetch(`${BACKEND_URL}/api/ambassadors/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, _honeypot: honeypot }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setError(data.error || "That didn't go through. Try again.");

        return;
      }
      setDone(true);
    } catch {
      setError("You seem to be offline. Try again.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div
        className="mt-6 rounded-2xl border border-dink-lime/40 bg-dink-lime/10 p-6"
        role="status"
      >
        <p className="text-athletic text-3xl text-dink-lime">
          Application received
        </p>
        <p className="mt-2 text-white/80">
          Thanks, {values.firstName}! We&apos;ll be in touch soon. Watch your
          email
          {founding ? "" : " and the Dink House app"}.
        </p>
      </div>
    );
  }

  return (
    <form className="mt-6 flex flex-col gap-5" onSubmit={submit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="firstName">First name</Label>
          <input
            required
            autoComplete="given-name"
            className={fieldClass}
            id="firstName"
            maxLength={80}
            value={values.firstName}
            onChange={set("firstName")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="lastName">Last name</Label>
          <input
            required
            autoComplete="family-name"
            className={fieldClass}
            id="lastName"
            maxLength={80}
            value={values.lastName}
            onChange={set("lastName")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label
            hint={founding ? undefined : "(the one on your Dink House account)"}
            htmlFor="email"
          >
            Email
          </Label>
          <input
            required
            autoComplete="email"
            className={fieldClass}
            id="email"
            maxLength={200}
            type="email"
            value={values.email}
            onChange={set("email")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="phone">Phone</Label>
          <input
            required
            autoComplete="tel"
            className={fieldClass}
            id="phone"
            maxLength={40}
            type="tel"
            value={values.phone}
            onChange={set("phone")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label hint="(optional, 2.00–5.00)" htmlFor="dhl">
            DHL (Dink House Level)
          </Label>
          <input
            className={fieldClass}
            id="dhl"
            inputMode="decimal"
            max={5}
            min={2}
            step={0.01}
            type="number"
            value={values.dhl}
            onChange={set("dhl")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label hint="(optional, 2.00–8.00)" htmlFor="dupr">
            DUPR
          </Label>
          <input
            className={fieldClass}
            id="dupr"
            inputMode="decimal"
            max={8}
            min={2}
            step={0.01}
            type="number"
            value={values.dupr}
            onChange={set("dupr")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label
          hint="(days and times you could host or help)"
          htmlFor="availability"
        >
          Availability
        </Label>
        <textarea
          required
          className={`${fieldClass} min-h-24`}
          id="availability"
          maxLength={1000}
          placeholder="Weeknights after 6, Saturday mornings…"
          value={values.availability}
          onChange={set("availability")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="why">Why do you want to help grow the club?</Label>
        <textarea
          required
          className={`${fieldClass} min-h-28`}
          id="why"
          maxLength={2000}
          value={values.why}
          onChange={set("why")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="welcomePlan">
          How would you welcome a brand-new player?
        </Label>
        <textarea
          required
          className={`${fieldClass} min-h-28`}
          id="welcomePlan"
          maxLength={2000}
          value={values.welcomePlan}
          onChange={set("welcomePlan")}
        />
      </div>
      {/* Bots fill every field. People never see this one. */}
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
        Send application
      </Button>
    </form>
  );
}
