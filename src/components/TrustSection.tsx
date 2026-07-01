const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="white"
    className="h-3.5 w-3.5"
    aria-hidden="true"
  >
    <path d="M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.27l-6.18 3.23L7 13.63l-5-4.87 6.91-1L12 1.5z" />
  </svg>
);

const TrustpilotStar = () => (
  <span
    className="flex h-6 w-6 items-center justify-center rounded-[3px]"
    style={{ backgroundColor: "#00b67a" }}
  >
    <StarIcon />
  </span>
);

export default function TrustSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-2xl font-black text-ink md:text-3xl">
          Trusted by millions living on crypto
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-10 md:mt-14 md:flex-row md:gap-12">
          {/* Group 1: Trustpilot rating */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-1.5">
              <TrustpilotStar />
              <span className="text-sm font-bold text-ink">Trustpilot</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-ink">4.6</span>
              <span className="text-lg font-semibold text-muted">/ 5</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <TrustpilotStar key={i} />
              ))}
            </div>
            <p className="text-sm text-muted">Over 2,000 5-star reviews</p>
          </div>

          <div
            className="hidden h-16 border-l border-border md:block"
            aria-hidden="true"
          />

          {/* Group 2: Trusted since 2014 */}
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-2xl font-black text-ink">
              Trusted since 2014
            </span>
            <p className="text-sm text-muted">
              A decade of serving crypto users worldwide
            </p>
          </div>

          <div
            className="hidden h-16 border-l border-border md:block"
            aria-hidden="true"
          />

          {/* Group 3: 50k payments */}
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-5xl font-black text-ink">50k</span>
            <p className="text-sm text-muted">
              crypto payments processed every day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
