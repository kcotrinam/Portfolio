import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";

type Project = {
  number: "01" | "02";
  name: string;
  translationKey: "cashtracker" | "popcornTime";
  technologies: readonly string[];
};

const projects: readonly Project[] = [
  {
    number: "01",
    name: "CashTracker",
    translationKey: "cashtracker",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma"],
  },
  {
    number: "02",
    name: "Popcorn-Time",
    translationKey: "popcornTime",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
];

type ProjectShowcaseProps = {
  project: Project;
  labels: {
    status: string;
    productType: string;
    description: string;
    stack: string;
    comingSoon: string;
    viewProject: string;
  };
};

function ProjectShowcase({ project, labels }: ProjectShowcaseProps) {
  return (
    <article
      aria-labelledby={`project-${project.number}`}
      className="grid gap-8 rounded-xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:grid-rows-[1fr_auto] lg:gap-x-12 lg:gap-y-0 lg:p-10"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-3 font-mono text-[0.6875rem] text-foreground-muted">
          <span>{project.number}</span>
          <span className="rounded border border-border px-2 py-1">{labels.status}</span>
        </div>

        <h3
          className="mt-5 text-[1.75rem] leading-tight font-semibold tracking-[-0.04em] text-foreground sm:text-[2rem]"
          id={`project-${project.number}`}
        >
          {project.name}
        </h3>
        <p className="mt-2 text-base font-medium text-foreground-secondary">
          {labels.productType}
        </p>
        <p className="mt-6 max-w-[40rem] text-sm leading-6 text-foreground-secondary sm:text-base sm:leading-7">
          {labels.description}
        </p>

        <div className="mt-8">
          <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-foreground-muted uppercase">
            {labels.stack}
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground-secondary">
            {project.technologies.join(" · ")}
          </p>
        </div>
      </div>

      <div className="flex aspect-[3/2] min-h-48 items-center justify-center rounded-lg border border-border bg-background lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <p className="font-mono text-xs tracking-[0.08em] text-foreground-muted">
          {labels.comingSoon}
        </p>
      </div>

      <p className="border-t border-border pt-5 text-sm font-medium text-foreground-muted lg:col-start-1 lg:row-start-2">
        {labels.viewProject} <span aria-hidden="true">→</span>
        <span className="ml-3 font-mono text-[0.6875rem] font-normal">{labels.comingSoon}</span>
      </p>
    </article>
  );
}

export async function SelectedWork({ locale }: { locale: "en" | "es" }) {
  const t = await getTranslations({ locale, namespace: "SelectedWork" });

  return (
    <section aria-labelledby="selected-work-title" className="border-t border-border py-20 sm:py-24 xl:py-28" id="work">
      <Container>
        <div className="mb-12 sm:mb-14">
          <p className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl" id="selected-work-title">
            {t("heading")}
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project) => (
            <ProjectShowcase
              key={project.number}
              project={project}
              labels={{
                status: t("status"),
                productType: t(`projects.${project.translationKey}.productType`),
                description: t(`projects.${project.translationKey}.description`),
                stack: t("stack"),
                comingSoon: t("comingSoon"),
                viewProject: t("viewProject"),
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
