import { steps } from "@/lib/data";

function StepIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-4.8-4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "wallet":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
          <rect x="2.5" y="6" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="2" />
          <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="2" />
          <circle cx="16.5" cy="14" r="1.4" fill="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
          <path
            d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-36 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-black text-ink md:text-4xl">
          How this demo is structured
        </h2>
        <p className="mt-4 text-ink-soft">
          A static catalog, reusable cards and responsive sections for frontend review.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col items-center rounded-2xl border border-border bg-surface p-8 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <StepIcon icon={step.icon} />
            </span>
            <span className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted">
              Step {index + 1}
            </span>
            <h3 className="mt-2 text-xl font-bold text-ink">{step.title}</h3>
            <p className="mt-3 text-ink-soft">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
