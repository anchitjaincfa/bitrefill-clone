"use client";

import Link from "next/link";
import { type FormEvent, useMemo, useState } from "react";
import { catalogSearchItems, navItems } from "@/lib/data";

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-4.5 w-4.5">
      <circle cx="9" cy="9" r="6.5" />
      <path d="M18 18l-3.8-3.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
      <path d="M3 10h14M11 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <circle cx="10" cy="10" r="8" />
      <path d="M7.8 7.8a2.2 2.2 0 1 1 3.1 2c-.7.5-1.1.9-1.1 1.9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="14.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
      <rect x="6" y="2" width="8" height="13" rx="2" />
      <path d="M9 12.5l1 1 1-1M10 6.5v6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
      <rect x="3" y="8" width="14" height="9" rx="1.2" />
      <path d="M3 8h14v2.5H3z" fill="currentColor" stroke="none" />
      <path d="M10 8v9M10 8c-1.6-3.5-6-3-6 0M10 8c1.6-3.5 6-3 6 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      {open ? (
        <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" strokeLinecap="round" />
      ) : (
        <path d="M3 5.5h14M3 10h14M3 14.5h14" strokeLinecap="round" />
      )}
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];

    return catalogSearchItems
      .filter(({ product, sectionTitle }) => {
        const haystack = `${product.name} ${product.label ?? ""} ${sectionTitle}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .slice(0, 6);
  }, [normalizedQuery]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [firstResult] = searchResults;

    if (firstResult) {
      window.location.hash = firstResult.href.slice(1);
      setQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      {/* Promo strip */}
      <a
        id="disclaimer"
        href="#about-demo"
        className="flex w-full items-center justify-center gap-1.5 bg-black px-4 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-ink"
      >
        <span>Educational UI clone — no purchases, payments, affiliation or support</span>
        <ArrowRightIcon />
      </a>

      {/* Main bar */}
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3 sm:px-6 lg:gap-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-1 text-2xl font-black text-brand">
          <span aria-hidden>⚡</span>
          <span>Refill Demo</span>
        </Link>

        <div className="flex-1">
          <form
            role="search"
            onSubmit={handleSearch}
            className="relative mx-auto max-w-xl"
          >
            <label htmlFor="catalog-search" className="sr-only">
              Search the demo catalog
            </label>
            <div className="flex items-center rounded-full border border-border bg-white pl-4 pr-1.5 transition-colors focus-within:border-ink-soft">
            <input
              id="catalog-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the demo catalog"
              autoComplete="off"
              className="w-full flex-1 bg-transparent py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              disabled={!searchResults.length}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-brand hover:text-white"
            >
              <SearchIcon />
            </button>
          </div>
            {normalizedQuery ? (
              <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                {searchResults.length ? (
                  <ul className="py-2">
                    {searchResults.map((item) => (
                      <li key={`${item.sectionId}-${item.product.name}`}>
                        <a
                          href={item.href}
                          onClick={() => setQuery("")}
                          className="block px-4 py-2.5 text-sm transition-colors hover:bg-surface"
                        >
                          <span className="block font-semibold text-ink">
                            {item.product.name}
                          </span>
                          <span className="text-xs text-muted">
                            {item.sectionTitle}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-3 text-sm text-muted">
                    No matching demo products.
                  </p>
                )}
              </div>
            ) : null}
          </form>
        </div>

        {/* Right cluster (desktop) */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a href="#faq" className="flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand">
            <HelpIcon />
            FAQ
          </a>
          <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-semibold text-ink">
            <span
              aria-hidden
              className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-400 to-brand"
            />
            Demo site
          </span>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink lg:hidden"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Nav row (desktop) */}
      <div className="mx-auto hidden max-w-[1400px] items-center justify-between px-4 pb-3 sm:px-6 lg:flex lg:px-10">
        <nav aria-label="Product categories" className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a href="#app-preview" className="flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand">
            <DownloadIcon />
            App preview
          </a>
          <a href="#about-demo" className="flex items-center gap-1.5 text-sm font-bold text-brand transition-colors hover:text-brand-dark">
            <GiftIcon />
            About demo
          </a>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen ? (
        <div className="border-t border-border bg-white px-4 py-3 lg:hidden">
          <nav aria-label="Product categories" className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-3 text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 border-b border-border py-3 text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              <HelpIcon />
              FAQ
            </a>
            <a
              href="#app-preview"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 border-b border-border py-3 text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              <DownloadIcon />
              App preview
            </a>
            <a
              href="#about-demo"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 py-3 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
            >
              <GiftIcon />
              About demo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
