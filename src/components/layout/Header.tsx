import { getPathname } from "@/i18n/navigation";
import { socialLinks } from "@/data/social-links";
import { Container } from "./Container";
import { KCGraphic } from "./KCGraphic";
import { MobileNavigation } from "./MobileNavigation";

type HeaderProps = {
  locale: "en" | "es";
  labels: {
    brandRole: string;
    work: string;
    experience: string;
    expertise: string;
    about: string;
    contact: string;
    resume: string;
    localeNavigation: string;
    navigation: string;
    openMenu: string;
    closeMenu: string;
  };
};

const navigation = [
  { key: "work", href: "#work" },
  { key: "experience", href: "#experience" },
  { key: "expertise", href: "#expertise" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

export function Header({ locale, labels }: HeaderProps) {
  const homePath = getPathname({ href: "/", locale });
  const englishHomePath = getPathname({ href: "/", locale: "en" });
  const spanishHomePath = getPathname({ href: "/", locale: "es" });

  return (
    <header className="border-b border-border">
      <Container className="relative grid min-h-20 grid-cols-[1fr_auto] grid-rows-[5rem_auto] items-center xl:h-20 xl:grid-cols-[1fr_auto_1fr] xl:grid-rows-1">
        <a
          className="flex items-center gap-3 justify-self-start leading-none text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent xl:block"
          href={homePath}
        >
          <KCGraphic className="size-10 shrink-0 xl:hidden" />
          <span className="block">
            <span className="block text-[1.1rem] font-semibold tracking-[-0.035em]">
              Kevin Cotrina
            </span>
            <span className="mt-1 block font-mono text-[0.625rem] font-medium tracking-[0.14em] text-foreground-muted uppercase">
              {labels.brandRole}
            </span>
          </span>
        </a>

        <nav aria-label={labels.navigation} className="hidden items-center gap-7 xl:flex">
          {navigation.map(({ key, href }) => (
            <a
              className="text-[0.9375rem] font-medium text-foreground-secondary transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href={href}
              key={key}
            >
              {labels[key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-5 xl:flex">
          <nav aria-label={labels.localeNavigation} className="flex items-center gap-2 font-mono text-[0.6875rem] font-medium tracking-[0.08em] uppercase">
            <a
              aria-current={locale === "en" ? "page" : undefined}
              className={`transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                locale === "en"
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground-secondary"
              }`}
              href={englishHomePath}
            >
              EN
            </a>
            <span aria-hidden="true" className="text-foreground-muted">
              /
            </span>
            <a
              aria-current={locale === "es" ? "page" : undefined}
              className={`transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                locale === "es"
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground-secondary"
              }`}
              href={spanishHomePath}
            >
              ES
            </a>
          </nav>
          <a
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground-secondary transition-colors hover:border-foreground-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            download
            href={socialLinks.resume}
          >
            {labels.resume}
            <svg
              aria-hidden="true"
              className="ml-1 inline-block size-3 align-[-0.1em]"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 2.5v7m0 0 2.5-2.5M8 9.5 5.5 7M3.5 11v2h9v-2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
        <MobileNavigation
          items={navigation.map(({ key, href }) => ({ href, label: labels[key] }))}
          locale={locale}
          englishHomePath={englishHomePath}
          spanishHomePath={spanishHomePath}
          resumePath={socialLinks.resume}
          labels={{
            closeMenu: labels.closeMenu,
            localeNavigation: labels.localeNavigation,
            navigation: labels.navigation,
            openMenu: labels.openMenu,
            resume: labels.resume,
          }}
        />
      </Container>
    </header>
  );
}
