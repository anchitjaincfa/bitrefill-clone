import { footerColumns } from "@/lib/data";

function XIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M15.3 2.5h2.6l-5.7 6.5 6.7 8.5h-5.2l-4.1-5.3-4.7 5.3H2.2l6.1-7-6.5-8h5.3l3.7 4.9 4.5-4.9z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="2.5" y="2.5" width="15" height="15" rx="4" />
      <circle cx="10" cy="10" r="3.4" />
      <circle cx="14.3" cy="5.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="2" y="4.5" width="16" height="11" rx="3" />
      <path d="M8.7 7.8l4 2.2-4 2.2z" fill="currentColor" stroke="none" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <rect x="2.2" y="7.2" width="3" height="10.3" rx="0.4" />
      <circle cx="3.7" cy="3.6" r="1.8" />
      <path d="M8.6 7.2h2.9v1.5c.6-1 1.6-1.7 3-1.7 2.5 0 3.5 1.6 3.5 4.3v6.2h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.7.7-1.9 1.4-.1.2-.1.5-.1.8v5.6h-3c0-.1.1-9.2 0-10.3z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M12.5 6.2h1.8V3.5h-2.1c-2.3 0-3.7 1.5-3.7 3.7v1.6H6.7v2.7h1.8v6h3v-6h2.2l.4-2.7h-2.6V7.6c0-.8.3-1.4 1-1.4z" />
    </svg>
  );
}

const socialIcons = [
  { label: "X (Twitter)", href: "#twitter", Icon: XIcon },
  { label: "Instagram", href: "#instagram", Icon: InstagramIcon },
  { label: "YouTube", href: "#youtube", Icon: YoutubeIcon },
  { label: "LinkedIn", href: "#linkedin", Icon: LinkedinIcon },
  { label: "Facebook", href: "#facebook", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10">
        {/* Top area */}
        <div className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="/" className="flex items-center gap-1 text-2xl font-black text-brand">
              <span aria-hidden>⚡</span>
              <span>Bitrefill</span>
            </a>
            <p className="mt-2 text-sm text-muted">
              The easiest way to live on crypto.
            </p>
          </div>
          <button
            type="button"
            className="flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-ink-soft"
          >
            <span aria-hidden>🇺🇸</span>
            EN / USD
          </button>
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
              © 2014–2026 Bitrefill. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#terms" className="text-sm text-muted transition-colors hover:text-ink">
                Terms of Service
              </a>
              <a href="#privacy" className="text-sm text-muted transition-colors hover:text-ink">
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center gap-2">
              {socialIcons.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
