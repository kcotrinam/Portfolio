import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";

export async function About({ locale }: { locale: "en" | "es" }) {
  const t = await getTranslations({ locale, namespace: "About" });

  return (
    <section
      aria-labelledby="about-title"
      className="border-t border-border py-16 sm:py-24 xl:py-28"
      id="about"
    >
      <Container className="grid gap-9 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-16">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
            {t("sectionLabel")}
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
            id="about-title"
          >
            {t("heading")}
          </h2>
        </div>

        <div className="max-w-[42rem]">
          <p className="text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
            {t("background")}
          </p>
          <p className="mt-6 text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
            {t("philosophy")}
          </p>

          <div className="mt-9 rounded-xl border border-border bg-surface p-5 sm:mt-10 sm:p-6 xl:mt-12 xl:rounded-none xl:border-x-0 xl:border-b-0 xl:bg-transparent xl:px-0 xl:pb-0 xl:pt-6">
            <p className="font-mono text-xs font-medium tracking-[0.1em] text-foreground-muted uppercase">
              {t("educationLabel")}
            </p>
            <div className="mt-4 flex items-start gap-4">
              <svg
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="m2 7 8-4 8 4-8 4-8-4Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.5 9v4c2.7 2.5 6.3 2.5 9 0V9M18 7v5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {t("educationDegree")}
                </h3>
                <p className="mt-1 text-sm leading-6 text-foreground-secondary">
                  {t("educationStatus")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
