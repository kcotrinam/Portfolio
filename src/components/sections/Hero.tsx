import { socialLinks } from "@/data/social-links";
import { Container } from "@/components/layout/Container";

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
    <section className="min-h-[calc(100svh-5rem)] bg-background py-20 lg:py-24">
      <Container className="grid grid-cols-[minmax(0,1fr)_14rem] items-start gap-x-16">
        <div className="max-w-[51rem] pt-14">
          <p className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-2 font-mono text-xs font-medium tracking-[0.08em] text-foreground-secondary">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-status-available"
            />
            {labels.availability}
          </p>

          <h1 className="mt-14 text-6xl font-semibold tracking-[-0.05em] text-foreground">
            Kevin Cotrina
          </h1>
          <p className="mt-2 text-[1.75rem] font-medium tracking-[-0.04em] text-foreground-secondary">
            {labels.role}
          </p>

          <p className="mt-9 max-w-[44rem] text-[2.5rem] leading-[1.18] font-medium tracking-[-0.045em] text-foreground">
            {labels.statement}
          </p>
          <p className="mt-6 max-w-[48rem] text-lg leading-8 text-foreground-secondary">
            {labels.description}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href="#work"
            >
              {labels.selectedWork}
            </a>
            <a
              className="rounded-md bg-surface px-5 py-3 text-sm font-semibold text-foreground-secondary transition-colors hover:bg-surface-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href="#contact"
            >
              {labels.contact}
            </a>
            <div className="ml-2 flex items-center gap-5 font-mono text-xs font-medium tracking-[0.08em] text-foreground-secondary">
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
                className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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

        <div aria-hidden="true" className="mt-40 justify-self-end rounded-xl bg-[#0a0b0d] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
          <svg
            className="size-40"
            fill="none"
            viewBox="0 0 160 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              fill="#15171A"
              height="158"
              rx="28"
              stroke="#2A2E34"
              strokeWidth="1.5"
              width="158"
              x="1"
              y="1"
            />
            <g opacity="0.6" stroke="#2A2E34" strokeDasharray="2 4">
              <path d="M40 24V136M80 24V136M120 24V136" />
              <path d="M24 40H136M24 80H136M24 120H136" />
            </g>
            <rect fill="#F4F4F5" height="72" rx="3" width="10" x="42" y="44" />
            <path d="M52 80L84 48H100L64 84L102 116H86L52 86" fill="#8FB4E8" />
            <path
              d="M106 58C116 68 118 78 118 80C118 82 116 92 106 102"
              stroke="#A8ADB5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
            <circle cx="80" cy="80" fill="#365F91" r="3.5" stroke="#8FB4E8" strokeWidth="1.5" />
          </svg>
        </div>
      </Container>
    </section>
  );
}
