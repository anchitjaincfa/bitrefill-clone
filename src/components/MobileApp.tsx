export default function MobileApp() {
  return (
    <section id="app-preview" className="mx-auto max-w-7xl scroll-mt-36 px-4 py-12 md:py-20">
      <div
        className="relative overflow-hidden rounded-3xl p-8 md:p-12"
        style={{
          background:
            "linear-gradient(135deg, #16182d 0%, #221230 55%, #2a1130 100%)",
        }}
      >
        {/* decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "#e4322b" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "#7c3aed" }}
        />

        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
          {/* Left: text */}
          <div>
            <p className="text-sm uppercase tracking-widest text-white/70">
              Shop on the go
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              Mobile app preview
            </h2>
            <p className="mt-4 max-w-md text-base text-white/80 md:text-lg">
              A static phone mockup showing how the same catalog patterns could
              adapt to a compact mobile surface.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* iOS-style badge */}
              <div
                className="flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 transition-colors hover:bg-black/80"
              >
                <svg
                  viewBox="0 0 384 512"
                  className="h-7 w-7 fill-white"
                  aria-hidden="true"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37.6 59 129.3 107.2 127.8 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-84.1 102.6-121.8-65.2-30.7-61.7-90-61.7-91.9zM259.3 32.2c-3.4 41.2-38.4 74.4-79.6 74.9-4.2-42.7 37.6-79.7 79.6-74.9z" />
                </svg>
                <span className="flex flex-col leading-tight text-white">
                  <span className="text-[10px] leading-none text-white/70">
                    Static
                  </span>
                  <span className="text-lg font-semibold leading-tight">
                    iOS mockup
                  </span>
                </span>
              </div>

              {/* Android-style badge */}
              <div
                className="flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 transition-colors hover:bg-black/80"
              >
                <svg
                  viewBox="0 0 512 512"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    d="M99.6 20.5C93 24.3 88.4 30.9 87 39v434c1.4 8.1 6 14.7 12.6 18.5l231.9-236L99.6 20.5z"
                    fill="#00d1ff"
                  />
                  <path
                    d="M99.6 20.5l231.9 235.5 68.6-69.9L131.9 12.5c-11.3-6.5-24.7-4.9-32.3 8z"
                    fill="#00f076"
                  />
                  <path
                    d="M331.5 256l68.6 69.9 91.9-52.7c17.6-10.1 17.6-35.3 0-45.4l-91.9-52.7-68.6 80.9z"
                    fill="#ffd140"
                  />
                  <path
                    d="M99.6 491.5c7.6 4.4 17.2 4.7 25.9-.5l205.9-118L331.5 256l-231.9 235.5z"
                    fill="#ff3141"
                  />
                </svg>
                <span className="flex flex-col leading-tight text-white">
                  <span className="text-[10px] leading-none text-white/70">
                    Static
                  </span>
                  <span className="text-lg font-semibold leading-tight">
                    Android mockup
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative h-[420px] w-[220px] rounded-[2.5rem] border-[6px] p-2 shadow-2xl md:h-[460px] md:w-[240px]"
              style={{
                borderColor: "#0b0c18",
                background: "#0b0c18",
              }}
            >
              {/* notch */}
              <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />

              {/* screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-surface">
                <div className="flex h-full flex-col gap-3 p-3 pt-6">
                  {/* status/search bar */}
                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                    <span className="text-xs text-muted">Search gift cards</span>
                    <span className="ml-auto text-brand">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M21 20.3l-5.4-5.4a7.9 7.9 0 1 0-1.4 1.4L20 21.7 21 20.3zM4.5 10a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z" />
                      </svg>
                    </span>
                  </div>

                  {/* hero tile */}
                  <div
                    className="h-20 w-full rounded-xl"
                    style={{
                      background:
                        "linear-gradient(120deg, #e4322b, #ff6a5c)",
                    }}
                  />

                  {/* grid of product tiles */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-lg bg-ink-soft/10 border border-border" />
                    <div className="h-16 rounded-lg bg-ink-soft/10 border border-border" />
                    <div className="h-16 rounded-lg bg-ink-soft/10 border border-border" />
                    <div className="h-16 rounded-lg bg-ink-soft/10 border border-border" />
                  </div>

                  {/* list rows */}
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm">
                      <div className="h-8 w-8 shrink-0 rounded-md bg-brand/20" />
                      <div className="flex-1">
                        <div className="h-2 w-3/4 rounded bg-ink-soft/20" />
                        <div className="mt-1 h-2 w-1/2 rounded bg-ink-soft/10" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm">
                      <div className="h-8 w-8 shrink-0 rounded-md bg-brand/20" />
                      <div className="flex-1">
                        <div className="h-2 w-2/3 rounded bg-ink-soft/20" />
                        <div className="mt-1 h-2 w-1/3 rounded bg-ink-soft/10" />
                      </div>
                    </div>
                  </div>

                  {/* bottom nav */}
                  <div className="flex items-center justify-between rounded-full bg-white px-4 py-2 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    <span className="h-2 w-2 rounded-full bg-ink-soft/20" />
                    <span className="h-2 w-2 rounded-full bg-ink-soft/20" />
                    <span className="h-2 w-2 rounded-full bg-ink-soft/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
