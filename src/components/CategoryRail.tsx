import type { Category } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function CategoryRail({ category }: { category: Category }) {
  return (
    <section id={category.id} className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-black tracking-tight text-ink sm:text-3xl">
          {category.title}
        </h2>
        <a
          href={category.href}
          className="shrink-0 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          See all →
        </a>
      </div>
      {/* Horizontal rail on small screens, wrapping grid on large */}
      <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {category.products.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="w-40 shrink-0 snap-start sm:w-auto"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
