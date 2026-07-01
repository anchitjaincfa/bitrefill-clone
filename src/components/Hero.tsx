export default function Hero() {
  return (
    <section className="w-full py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface p-8 md:p-12">
          {/* Headline + CTA */}
          <div className="mb-10 md:mb-14">
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
              Spend crypto, save big.
            </h1>
            <a
              href="#rewards"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Cashback offerings
            </a>
          </div>

          {/* Product tiles */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {/* Sneakers */}
            <div
              className="flex aspect-square items-center justify-center rounded-2xl"
              style={{ backgroundColor: "#f4b942" }}
            >
              <span className="text-6xl" role="img" aria-label="Sneaker">
                👟
              </span>
            </div>

            {/* Gaming */}
            <div
              className="flex aspect-square items-center justify-center rounded-2xl"
              style={{ backgroundColor: "#0f3d34" }}
            >
              <span className="text-6xl" role="img" aria-label="Game controller">
                🎮
              </span>
            </div>

            {/* Groceries */}
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-brand">
              <span className="text-6xl" role="img" aria-label="Groceries">
                🛍️
              </span>
            </div>

            {/* Crypto glyphs */}
            <div
              className="flex aspect-square items-center justify-center rounded-2xl"
              style={{ backgroundColor: "#d9dbe0" }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base"
                  style={{ backgroundColor: "#f7931a" }}
                >
                  ₿
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base"
                  style={{ backgroundColor: "#14f195" }}
                >
                  ◎
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base"
                  style={{ backgroundColor: "#627eea" }}
                >
                  Ξ
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base"
                  style={{ backgroundColor: "#26a17b" }}
                >
                  ₮
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
