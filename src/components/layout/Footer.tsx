import { getTranslations } from "next-intl/server";
import { Container } from "./Container";

export async function Footer({ locale }: { locale: "en" | "es" }) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-8 sm:py-10">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          <p className="flex items-center gap-2 font-mono text-xs leading-5 text-foreground-secondary">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-status-available" />
            {t("availability")}
          </p>
          <p className="flex items-center gap-2 font-mono text-xs leading-5 text-foreground-secondary">
            <svg aria-hidden="true" className="size-4 shrink-0 text-foreground-muted" fill="none" viewBox="0 0 16 16">
              <path d="M8 14s4.5-4.2 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 9.8 8 14 8 14Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
              <circle cx="8" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {t("location")}
          </p>
        </div>
        <p className="border-t border-border pt-6 text-xs leading-5 text-foreground-muted lg:border-0 lg:pt-0">
          {t("copyright", { year })}
        </p>
      </Container>
    </footer>
  );
}
