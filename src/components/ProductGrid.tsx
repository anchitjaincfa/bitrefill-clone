import type { Product } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  title,
  subtitle,
  products,
  id,
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-1 text-muted">{subtitle}</p> : null}
        </div>
        <a
          href="#"
          className="hidden shrink-0 text-sm font-semibold text-brand hover:text-brand-dark sm:inline"
        >
          See all →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={`${p.name}-${i}`} product={p} />
        ))}
      </div>
    </section>
  );
}
