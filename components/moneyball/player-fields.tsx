import {
  LEVELS,
  levelLabel,
  type Gender,
  type Guest,
  type Level,
} from "./shared";

export const FIELD =
  "w-full px-4 py-3 bg-black border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-dink-lime focus:border-dink-lime transition-all disabled:opacity-50";

/** A person as typed so far: the selects start empty. */
export type GuestDraft = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: Gender | "";
  level: Level | "";
};

export type GuestErrors = Partial<Record<keyof Guest, string>>;

export function emptyGuest(level: Level | null): GuestDraft {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    level: level ?? "",
  };
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** The same checks the backend makes. `whose` is "your" or "your partner's". */
export function validateGuest(draft: GuestDraft, whose: string): GuestErrors {
  const errors: GuestErrors = {};

  if (!draft.firstName.trim()) errors.firstName = `Enter ${whose} first name.`;
  if (!draft.lastName.trim()) errors.lastName = `Enter ${whose} last name.`;
  if (!EMAIL.test(draft.email.trim())) {
    errors.email = `Enter ${whose} email address, like name@example.com.`;
  }
  if (draft.phone.replace(/\D/g, "").length < 10) {
    errors.phone = `Enter ${whose} phone number with area code.`;
  }
  if (!draft.gender) errors.gender = `Choose ${whose} gender.`;
  if (!draft.level) errors.level = `Choose ${whose} level.`;

  return errors;
}

export function toGuest(draft: GuestDraft): Guest {
  return {
    firstName: draft.firstName.trim(),
    lastName: draft.lastName.trim(),
    email: draft.email.trim().toLowerCase(),
    phone: draft.phone.trim(),
    gender: draft.gender as Gender,
    level: draft.level as Level,
  };
}

type Props = {
  legend: string;
  /** Unique per group on the page; it prefixes every input id. */
  idPrefix: string;
  value: GuestDraft;
  errors: GuestErrors;
  /** Set when the event is for one level only. */
  lockedLevel: Level | null;
  disabled: boolean;
  /** Off for the partner so the browser doesn't fill in your own details. */
  autoFill: boolean;
  onChange: (next: GuestDraft) => void;
};

export function PlayerFields({
  legend,
  idPrefix,
  value,
  errors,
  lockedLevel,
  disabled,
  autoFill,
  onChange,
}: Props) {
  const set = <K extends keyof GuestDraft>(key: K, next: GuestDraft[K]) =>
    onChange({ ...value, [key]: next });

  const describe = (key: keyof Guest) =>
    errors[key] ? `${idPrefix}-${key}-error` : undefined;

  const problem = (key: keyof Guest) =>
    errors[key] ? (
      <span className="text-sm text-red-400" id={`${idPrefix}-${key}-error`}>
        {errors[key]}
      </span>
    ) : null;

  return (
    <fieldset className="space-y-4">
      <legend className="mb-3 font-display text-2xl uppercase tracking-wider text-dink-lime">
        {legend}
      </legend>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          First name
          <input
            aria-describedby={describe("firstName")}
            aria-invalid={Boolean(errors.firstName)}
            autoComplete={autoFill ? "given-name" : "off"}
            className={FIELD}
            disabled={disabled}
            id={`${idPrefix}-firstName`}
            maxLength={60}
            name={`${idPrefix}-firstName`}
            type="text"
            value={value.firstName}
            onChange={(e) => set("firstName", e.target.value)}
          />
          {problem("firstName")}
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          Last name
          <input
            aria-describedby={describe("lastName")}
            aria-invalid={Boolean(errors.lastName)}
            autoComplete={autoFill ? "family-name" : "off"}
            className={FIELD}
            disabled={disabled}
            id={`${idPrefix}-lastName`}
            maxLength={60}
            name={`${idPrefix}-lastName`}
            type="text"
            value={value.lastName}
            onChange={(e) => set("lastName", e.target.value)}
          />
          {problem("lastName")}
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          Email
          <input
            aria-describedby={describe("email")}
            aria-invalid={Boolean(errors.email)}
            autoCapitalize="none"
            autoComplete={autoFill ? "email" : "off"}
            className={FIELD}
            disabled={disabled}
            id={`${idPrefix}-email`}
            inputMode="email"
            maxLength={254}
            name={`${idPrefix}-email`}
            type="email"
            value={value.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {problem("email")}
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          Mobile phone
          <input
            aria-describedby={describe("phone")}
            aria-invalid={Boolean(errors.phone)}
            autoComplete={autoFill ? "tel" : "off"}
            className={FIELD}
            disabled={disabled}
            id={`${idPrefix}-phone`}
            inputMode="tel"
            maxLength={30}
            name={`${idPrefix}-phone`}
            type="tel"
            value={value.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          {problem("phone")}
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          Gender
          <select
            aria-describedby={describe("gender")}
            aria-invalid={Boolean(errors.gender)}
            className={FIELD}
            disabled={disabled}
            id={`${idPrefix}-gender`}
            name={`${idPrefix}-gender`}
            value={value.gender}
            onChange={(e) => set("gender", e.target.value as Gender | "")}
          >
            <option value="">Choose one</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {problem("gender")}
        </label>
        <label className="flex flex-col gap-1 text-sm text-gray-300">
          Level
          <select
            aria-describedby={
              lockedLevel ? `${idPrefix}-level-note` : describe("level")
            }
            aria-invalid={Boolean(errors.level)}
            className={FIELD}
            disabled={disabled || Boolean(lockedLevel)}
            id={`${idPrefix}-level`}
            name={`${idPrefix}-level`}
            value={lockedLevel ?? value.level}
            onChange={(e) => set("level", e.target.value as Level | "")}
          >
            <option value="">Choose one</option>
            {LEVELS.map((level) => (
              <option key={level} value={level}>
                {levelLabel(level)}
              </option>
            ))}
          </select>
          {lockedLevel ? (
            <span
              className="text-xs text-gray-500"
              id={`${idPrefix}-level-note`}
            >
              This event is for {lockedLevel} players.
            </span>
          ) : (
            problem("level")
          )}
        </label>
      </div>
    </fieldset>
  );
}
