"use client";

import { useEffect, useRef, useState } from "react";

type MobileNavigationProps = {
  items: { href: string; label: string }[];
  locale: "en" | "es";
  englishHomePath: string;
  spanishHomePath: string;
  resumePath: string;
  labels: {
    openMenu: string;
    closeMenu: string;
    navigation: string;
    localeNavigation: string;
    resume: string;
  };
};

export function MobileNavigation({
  items,
  locale,
  englishHomePath,
  spanishHomePath,
  resumePath,
  labels,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const desktopQuery = window.matchMedia("(min-width: 80rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [isOpen]);

  function handleEscape(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <div
      className="col-span-2 col-start-1 row-start-2 xl:hidden"
      onKeyDown={handleEscape}
    >
      <button
        ref={buttonRef}
        aria-controls="mobile-navigation-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? labels.closeMenu : labels.openMenu}
        className="absolute top-4 right-5 inline-flex size-12 items-center justify-center rounded-md border border-border bg-surface text-foreground-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:right-6 lg:right-8"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? (
          <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
            <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        ) : (
          <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        )}
      </button>

      <nav
        id="mobile-navigation-panel"
        aria-label={labels.navigation}
        className="h-[calc(100svh-5rem)] overflow-y-auto overscroll-contain border-t border-border pt-8 pb-12"
        hidden={!isOpen}
      >
        <ul>
          {items.map(({ href, label }) => (
            <li className="border-b border-border" key={href}>
              <a
                className="flex min-h-16 items-center text-xl font-medium text-foreground-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <div aria-label={labels.localeNavigation} className="flex items-center gap-4 font-mono text-sm font-medium tracking-[0.08em] uppercase">
            <a
              aria-current={locale === "en" ? "page" : undefined}
              className={`flex min-h-11 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${locale === "en" ? "text-foreground" : "text-foreground-muted hover:text-foreground-secondary"}`}
              href={englishHomePath}
              onClick={() => setIsOpen(false)}
            >
              EN
            </a>
            <span aria-hidden="true" className="text-foreground-muted">/</span>
            <a
              aria-current={locale === "es" ? "page" : undefined}
              className={`flex min-h-11 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${locale === "es" ? "text-foreground" : "text-foreground-muted hover:text-foreground-secondary"}`}
              href={spanishHomePath}
              onClick={() => setIsOpen(false)}
            >
              ES
            </a>
          </div>
          <a
            className="flex min-h-11 items-center gap-1 rounded-md border border-border px-3 text-sm font-medium text-foreground-secondary hover:border-foreground-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            download
            href={resumePath}
            onClick={() => setIsOpen(false)}
          >
            {labels.resume}
            <svg aria-hidden="true" className="size-3" fill="none" viewBox="0 0 16 16">
              <path d="M8 2.5v7m0 0 2.5-2.5M8 9.5 5.5 7M3.5 11v2h9v-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}
