const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const ScopeIcon = () => (
  <span
    className="flex h-9 w-9 items-center justify-center rounded-full"
    style={{ backgroundColor: "#e4322b" }}
  >
    <CheckIcon />
  </span>
);

export default function TrustSection() {
  return (
    <section id="about-demo" className="w-full scroll-mt-36 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-2xl font-black text-ink md:text-3xl">
          Built as an educational UI clone
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-muted">
          This page demonstrates marketplace layout and interaction patterns.
          It is not affiliated with Bitrefill and cannot sell, issue, deliver,
          refund or support any product.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-10 md:mt-14 md:flex-row md:gap-12">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-1.5">
              <ScopeIcon />
            </div>
            <span className="text-2xl font-black text-ink">Static catalog</span>
            <p className="text-sm text-muted">All products and ratings are sample data</p>
          </div>

          <div
            className="hidden h-16 border-l border-border md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-2 text-center">
            <ScopeIcon />
            <span className="text-2xl font-black text-ink">No checkout</span>
            <p className="text-sm text-muted">
              There is no cart, payment flow or account system
            </p>
          </div>

          <div
            className="hidden h-16 border-l border-border md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-2 text-center">
            <ScopeIcon />
            <span className="text-2xl font-black text-ink">Original UI code</span>
            <p className="text-sm text-muted">
              Tiles are recreated with CSS, SVG and text
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
