// Frame for the ambassador pages, inside the site layout: black, the faint court
// grid, Bebas Neue headlines and lime accents.
export function AmbassadorSection({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="court-pattern min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-16">
        <header className="flex flex-col gap-3">
          <p className="text-athletic text-lg text-dink-lime">{eyebrow}</p>
          <h1 className="text-athletic text-glow text-5xl leading-none text-white sm:text-7xl">
            {title}
          </h1>
          <div className="max-w-2xl text-lg text-white/70">{intro}</div>
        </header>
        {children}
      </div>
    </section>
  );
}

export function AmbassadorCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-dink-gray p-5 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export const fieldClass =
  "w-full rounded-xl border border-white/15 bg-black px-3 py-3 text-white outline-none transition focus:border-dink-lime";
