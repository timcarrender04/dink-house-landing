import { useState } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

export const EVENT_TYPES = [
  "Officer PT",
  "Soldier PT",
  "Unit function",
  "Org day",
] as const;

export type MilitaryEventType = (typeof EVENT_TYPES)[number];

const NOTES_MAX = 500;

type FormState = {
  eventType: MilitaryEventType | "";
  unit: string;
  rank: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  headcount: string;
  preferredDate: string;
  alternateDate: string;
  notes: string;
  honeypot: string;
};

const EMPTY: FormState = {
  eventType: "",
  unit: "",
  rank: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  headcount: "",
  preferredDate: "",
  alternateDate: "",
  notes: "",
  honeypot: "",
};

function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${now.getFullYear()}-${month}-${day}`;
}

function formatPhoneNumber(value: string) {
  const cleaned = value.replace(/\D/g, "").slice(0, 10);

  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6)
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;

  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
}

export default function MilitaryRequestForm({
  eventType,
  onEventTypeChange,
}: {
  eventType?: MilitaryEventType | "";
  onEventTypeChange?: (type: MilitaryEventType) => void;
}) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "coming-soon">("idle");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedType, setSavedType] = useState<MilitaryEventType | "">("");
  const minDate = todayIso();
  const selectedType = eventType ?? form.eventType;

  const setField = (name: keyof FormState, value: string) => {
    const next = name === "phone" ? formatPhoneNumber(value) : value;

    setForm((prev) => ({ ...prev, [name]: next }));
    setErrors((prev) => {
      if (!prev[name] && !prev.submit) return prev;
      const copy = { ...prev };

      delete copy[name];
      delete copy.submit;

      return copy;
    });
  };

  const chooseType = (type: MilitaryEventType) => {
    setForm((prev) => ({ ...prev, eventType: type }));
    onEventTypeChange?.(type);
    setErrors((prev) => {
      if (!prev.eventType) return prev;
      const copy = { ...prev };

      delete copy.eventType;

      return copy;
    });
  };

  const validate = () => {
    if (form.honeypot) return false;

    const next: Record<string, string> = {};
    const type = eventType || form.eventType;

    if (!type) next.eventType = "Choose an event type";
    if (!form.unit.trim()) next.unit = "Unit name is required";
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";

    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address";
    }

    const digits = form.phone.replace(/\D/g, "");

    if (!digits) {
      next.phone = "Phone is required";
    } else if (digits.length !== 10) {
      next.phone = "Enter a 10-digit phone number";
    }

    const count = Number(form.headcount);

    if (!form.headcount.trim()) {
      next.headcount = "Headcount is required";
    } else if (!Number.isInteger(count) || count < 1 || count > 250) {
      next.headcount = "Enter a headcount from 1 to 250";
    }

    if (!form.preferredDate) {
      next.preferredDate = "Preferred date is required";
    } else if (form.preferredDate < minDate) {
      next.preferredDate = "Choose today or a later date";
    }

    if (form.alternateDate) {
      if (form.alternateDate < minDate) {
        next.alternateDate = "Choose today or a later date";
      } else if (form.alternateDate === form.preferredDate) {
        next.alternateDate = "Pick a different alternate date";
      }
    }

    if (form.notes.length > NOTES_MAX) {
      next.notes = `Notes must be ${NOTES_MAX} characters or less`;
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const type = (eventType || form.eventType) as MilitaryEventType;
    const payload = { ...form, eventType: type };

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/military-pt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: type,
          unit: payload.unit.trim(),
          rank: payload.rank.trim(),
          firstName: payload.firstName.trim(),
          lastName: payload.lastName.trim(),
          email: payload.email.trim().toLowerCase(),
          phone: payload.phone.trim(),
          headcount: Number(payload.headcount),
          preferredDate: payload.preferredDate,
          alternateDate: payload.alternateDate || undefined,
          notes: payload.notes.trim() || undefined,
          _honeypot: payload.honeypot,
        }),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setErrors({
          submit: result.message || "Could not save your info. Try again.",
        });

        return;
      }

      setSavedEmail(payload.email.trim().toLowerCase());
      setSavedType(type);
      setStatus("coming-soon");
      setForm(EMPTY);
    } catch {
      setErrors({
        submit: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "coming-soon") {
    return (
      <div className="rounded-3xl border border-dink-lime/50 bg-dink-lime/10 p-8">
        <p className="font-display text-4xl uppercase text-white">
          Coming soon
        </p>
        <p className="mt-3 max-w-xl text-base leading-7 text-gray-300">
          We saved your {savedType || "request"} info
          {savedEmail ? ` for ${savedEmail}` : ""}. Bookings are not open yet,
          so this does not hold the courts. We will use what you sent when{" "}
          {savedType === "Org day" ? "org days" : "unit mornings"} start.
        </p>
      </div>
    );
  }

  return (
    <form noValidate className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        name="_honeypot"
        tabIndex={-1}
        type="text"
        value={form.honeypot}
        onChange={(e) => setField("honeypot", e.target.value)}
      />

      <fieldset>
        <legend className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
          Event type
        </legend>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EVENT_TYPES.map((type) => {
            const active = selectedType === type;

            return (
              <button
                key={type}
                aria-pressed={active}
                className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                  active
                    ? "border-dink-lime bg-dink-lime text-black"
                    : "border-white/15 bg-black text-white hover:border-dink-lime/60"
                }`}
                type="button"
                onClick={() => chooseType(type)}
              >
                <span className="block font-bold">{type}</span>
                <span
                  className={`mt-1 block text-xs ${active ? "text-black/70" : "text-default-500"}`}
                >
                  {type === "Org day"
                    ? "0900–about 1400 · paid"
                    : "0600–0800 · all courts"}
                </span>
              </button>
            );
          })}
        </div>
        {errors.eventType && (
          <p className="mt-2 text-sm text-danger">{errors.eventType}</p>
        )}
      </fieldset>

      <Input
        isRequired
        autoComplete="organization"
        errorMessage={errors.unit}
        isInvalid={!!errors.unit}
        label="Unit"
        name="unit"
        placeholder="HHC, 1st Cavalry Division"
        value={form.unit}
        onValueChange={(value) => setField("unit", value)}
      />

      <div className="grid gap-4 sm:grid-cols-[0.6fr_1fr_1fr]">
        <Input
          autoComplete="honorific-prefix"
          label="Rank"
          name="rank"
          placeholder="CPT"
          value={form.rank}
          onValueChange={(value) => setField("rank", value)}
        />
        <Input
          isRequired
          autoComplete="given-name"
          errorMessage={errors.firstName}
          isInvalid={!!errors.firstName}
          label="First name"
          name="firstName"
          value={form.firstName}
          onValueChange={(value) => setField("firstName", value)}
        />
        <Input
          isRequired
          autoComplete="family-name"
          errorMessage={errors.lastName}
          isInvalid={!!errors.lastName}
          label="Last name"
          name="lastName"
          value={form.lastName}
          onValueChange={(value) => setField("lastName", value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          isRequired
          autoComplete="email"
          errorMessage={errors.email}
          isInvalid={!!errors.email}
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onValueChange={(value) => setField("email", value)}
        />
        <Input
          isRequired
          autoComplete="tel"
          description="10-digit US phone number"
          errorMessage={errors.phone}
          isInvalid={!!errors.phone}
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onValueChange={(value) => setField("phone", value)}
        />
      </div>

      <Input
        isRequired
        description="Up to company size"
        errorMessage={errors.headcount}
        inputMode="numeric"
        isInvalid={!!errors.headcount}
        label="Expected headcount"
        name="headcount"
        type="number"
        value={form.headcount}
        onValueChange={(value) => setField("headcount", value)}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-2 block text-sm text-default-600"
            htmlFor="preferredDate"
          >
            Preferred date
          </label>
          <input
            className="w-full rounded-xl border border-default-200 bg-default-100 px-3 py-3 text-foreground outline-none focus:border-dink-lime"
            id="preferredDate"
            min={minDate}
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={(e) => setField("preferredDate", e.target.value)}
          />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-danger">{errors.preferredDate}</p>
          )}
        </div>
        <div>
          <label
            className="mb-2 block text-sm text-default-600"
            htmlFor="alternateDate"
          >
            Alternate date (optional)
          </label>
          <input
            className="w-full rounded-xl border border-default-200 bg-default-100 px-3 py-3 text-foreground outline-none focus:border-dink-lime"
            id="alternateDate"
            min={minDate}
            name="alternateDate"
            type="date"
            value={form.alternateDate}
            onChange={(e) => setField("alternateDate", e.target.value)}
          />
          {errors.alternateDate && (
            <p className="mt-1 text-xs text-danger">{errors.alternateDate}</p>
          )}
        </div>
      </div>

      <Textarea
        description={`${form.notes.length}/${NOTES_MAX}`}
        errorMessage={errors.notes}
        isInvalid={!!errors.notes}
        label="Notes (optional)"
        maxLength={NOTES_MAX}
        name="notes"
        placeholder={
          selectedType === "Org day"
            ? "Anything we should know about this org day."
            : selectedType
              ? "Anything we should know about this morning."
              : "Anything we should know about the unit."
        }
        value={form.notes}
        onValueChange={(value) => setField("notes", value)}
      />

      <p className="text-sm leading-6 text-default-500">
        {selectedType === "Org day"
          ? "An org day uses every court from 0900 to about 1400, and that booking is paid. Bookings are not open yet. Sending this saves your info and does not hold the facility."
          : "The window is fixed: 0600–0800, every court. Bookings are not open yet. Sending this saves your info and does not hold the facility."}
      </p>

      {errors.submit && <p className="text-sm text-danger">{errors.submit}</p>}

      <Button
        className="h-12 bg-dink-lime font-bold uppercase text-black hover:bg-dink-lime-dark"
        isLoading={isSubmitting}
        radius="full"
        size="lg"
        type="submit"
      >
        {selectedType === "Org day"
          ? "Save this org day"
          : selectedType
            ? "Save this morning"
            : "Save my info"}
      </Button>
    </form>
  );
}
