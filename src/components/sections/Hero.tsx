import { socialLinks } from "@/data/social-links";
import { Container } from "@/components/layout/Container";
import { KCGraphic } from "@/components/layout/KCGraphic";

type HeroProps = {
  labels: {
    availability: string;
    role: string;
    statement: string;
    description: string;
    selectedWork: string;
    contact: string;
    github: string;
    linkedin: string;
    resume: string;
  };
};

export function Hero({ labels }: HeroProps) {
  return (
    <section className="bg-background py-14 sm:py-20 xl:min-h-[calc(100svh-5rem)] xl:py-24">
      <Container className="grid grid-cols-1 items-start xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-x-16">
        <div className="max-w-[51rem] xl:pt-14">
          <p className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-2 font-mono text-xs font-medium tracking-[0.08em] text-foreground-secondary">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-status-available"
            />
            {labels.availability}
          </p>

          <h1 className="mt-11 text-[clamp(3rem,12vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-foreground sm:text-6xl xl:mt-14 xl:leading-none">
            Kevin Cotrina
          </h1>
          <p className="mt-3 text-lg leading-7 font-medium tracking-[-0.04em] text-foreground-secondary xl:mt-2 xl:text-[1.75rem] xl:leading-normal">
            {labels.role}
          </p>

          <p className="mt-9 max-w-[44rem] text-[clamp(1.75rem,7vw,2.25rem)] leading-[1.2] font-medium tracking-[-0.045em] text-foreground xl:text-[2.5rem] xl:leading-[1.18]">
            {labels.statement}
          </p>
          <p className="mt-6 max-w-[48rem] text-base leading-7 text-foreground-secondary xl:text-lg xl:leading-8">
            {labels.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center xl:gap-4">
            <a
              className="flex min-h-12 items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent xl:min-h-0"
              href="#work"
            >
              {labels.selectedWork}
            </a>
            <a
              className="flex min-h-12 items-center justify-center rounded-md bg-surface px-5 py-3 text-sm font-semibold text-foreground-secondary transition-colors hover:bg-surface-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent xl:min-h-0"
              href="#contact"
            >
              {labels.contact}
            </a>
            <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-4 border-t border-border pt-6 font-mono text-xs font-medium tracking-[0.08em] text-foreground-secondary xl:ml-2 xl:mt-0 xl:w-auto xl:justify-start xl:gap-5 xl:border-0 xl:pt-0">
              <a
                className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href={socialLinks.github}
                rel="noreferrer"
                target="_blank"
              >
                {labels.github}
                <svg
                  aria-hidden="true"
                  className="ml-1 inline-block size-3 align-[-0.1em]"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 12 12 4M5.5 4H12v6.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a
                className="order-first transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent xl:order-none"
                href={socialLinks.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                {labels.linkedin}
                <svg
                  aria-hidden="true"
                  className="ml-1 inline-block size-3 align-[-0.1em]"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 12 12 4M5.5 4H12v6.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a
                className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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
          </div>
        </div>

        <div aria-hidden="true" className="hidden rounded-xl bg-[#0a0b0d] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.22)] xl:mt-40 xl:block xl:justify-self-end">
          <KCGraphic className="size-40" />
        </div>
      </Container>
    </section>
  );
}
