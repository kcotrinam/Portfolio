import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { socialLinks } from "@/data/social-links";

export async function Contact({ locale }: { locale: "en" | "es" }) {
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <section
      aria-labelledby="contact-title"
      className="border-t border-border py-16 sm:py-24 xl:py-28"
      id="contact"
    >
      <Container>
        <div className="max-w-[44rem]">
          <p className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
            {t("sectionLabel")}
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
            id="contact-title"
          >
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-[38rem] text-base leading-7 text-foreground-secondary sm:text-lg sm:leading-8">
            {t("description")}
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-center lg:gap-8">
          <a
            className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-accent px-6 py-4 text-base font-semibold text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:max-w-[24rem] lg:w-auto lg:min-w-[14rem]"
            href={socialLinks.email}
          >
            {t("email")}
            <svg
              aria-hidden="true"
              className="size-4 shrink-0"
              fill="none"
              viewBox="0 0 16 16"
            >
              <rect
                x="2"
                y="3.5"
                width="12"
                height="9"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m2.5 4.5 5.5 4 5.5-4"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </a>

          <nav aria-label={t("linksLabel")} className="border-t border-border lg:border-0">
            <ul className="lg:flex lg:items-center lg:gap-6">
              <li className="border-b border-border lg:border-0">
                <a
                  className="flex min-h-14 items-center justify-between gap-4 py-3 font-mono text-sm text-foreground-secondary transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:min-h-0 lg:justify-start lg:py-0 lg:text-xs"
                  href={socialLinks.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                  <svg aria-hidden="true" className="size-4 shrink-0 lg:size-3" fill="none" viewBox="0 0 16 16">
                    <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </a>
              </li>
              <li className="border-b border-border lg:border-0">
                <a
                  className="flex min-h-14 items-center justify-between gap-4 py-3 font-mono text-sm text-foreground-secondary transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:min-h-0 lg:justify-start lg:py-0 lg:text-xs"
                  href={socialLinks.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                  <svg aria-hidden="true" className="size-4 shrink-0 lg:size-3" fill="none" viewBox="0 0 16 16">
                    <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </a>
              </li>
              <li className="border-b border-border lg:border-0">
                <a
                  className="flex min-h-14 items-center justify-between gap-4 py-3 font-mono text-sm text-foreground-secondary transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:min-h-0 lg:justify-start lg:py-0 lg:text-xs"
                  download
                  href={socialLinks.resume}
                >
                  {t("resume")}
                  <svg aria-hidden="true" className="size-4 shrink-0 lg:size-3" fill="none" viewBox="0 0 16 16">
                    <path d="M8 2.5v7m0 0 2.5-2.5M8 9.5 5.5 7M3.5 11v2h9v-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
