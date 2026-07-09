import Link from "next/link";
import { footerColumns } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10">
        {/* Top area */}
        <div className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-1 text-2xl font-black text-brand">
              <span aria-hidden>⚡</span>
              <span>Refill Demo</span>
            </Link>
            <p className="mt-2 text-sm text-muted">
              Educational crypto storefront UI. No purchases are processed.
            </p>
          </div>
          <span className="flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-semibold text-ink">
            <span aria-hidden>⚙</span>
            Static demo
          </span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted">
              © 2026 Refill Demo. Original code for educational use.
            </p>
            <div className="flex items-center gap-6">
              <a href="#disclaimer" className="text-sm text-muted transition-colors hover:text-ink">
                Disclaimer
              </a>
              <a href="#faq" className="text-sm text-muted transition-colors hover:text-ink">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
