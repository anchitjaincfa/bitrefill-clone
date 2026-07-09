import type { Product } from "@/lib/data";
import { productAnchor } from "@/lib/data";

function StarRating({ rating }: { rating?: number }) {
  if (rating === undefined) return null;
  return (
    <span className="flex items-center gap-1 text-sm font-bold text-ink">
      {rating}
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 15l-5.3 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
      </svg>
    </span>
  );
}

/** A brand tile: colored block with a CSS wordmark (recreated, not an image asset). */
export function BrandTile({ product }: { product: Product }) {
  const { label, name, bg, fg = "#111111", labelClass = "font-bold", badge } = product;
  const text = label ?? name;
  const isGradient = bg.includes("gradient");

  return (
    <div
      className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border/60 p-4"
      style={isGradient ? { backgroundImage: bg } : { backgroundColor: bg }}
    >
      {badge ? (
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-bold text-brand shadow-sm">
          {badge}
        </span>
      ) : null}
      {text ? (
        <span
          className={`text-center text-xl leading-tight sm:text-2xl ${labelClass}`}
          style={{ color: fg }}
        >
          {text}
        </span>
      ) : (
        // Wordless tiles (e.g. Apple, Mastercard) get a simple emblem.
        <span
          className="h-10 w-10 rounded-full opacity-90"
          style={{ backgroundColor: fg }}
          aria-hidden
        />
      )}
    </div>
  );
}

/** Full product card: tile + name, price range and rating below. */
export default function ProductCard({
  product,
  sectionId,
}: {
  product: Product;
  sectionId?: string;
}) {
  return (
    <article id={productAnchor(product.name, sectionId)} className="group scroll-mt-36">
      <div className="transition-transform duration-200 group-hover:-translate-y-1">
        <BrandTile product={product} />
      </div>
      <div className="mt-2.5 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{product.name}</p>
          {product.range ? (
            <p className="text-sm text-muted">{product.range}</p>
          ) : null}
        </div>
        <StarRating rating={product.rating} />
      </div>
    </article>
  );
}
