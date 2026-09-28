import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";

type CapabilityMessageKey =
  | "scalableFrontendArchitecture"
  | "testingAndTdd"
  | "aiAssistedDevelopment";

type CapabilityItem = { name: string } | { messageKey: CapabilityMessageKey };

type CapabilityGroupData = {
  key: "frontend" | "backend" | "engineering";
  items: readonly CapabilityItem[];
};

const capabilityGroups: readonly CapabilityGroupData[] = [
  {
    key: "frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
      { name: "TanStack Query" },
      { name: "Material UI" },
      { name: "React Native" },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "Ruby on Rails" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
  },
  {
    key: "engineering",
    items: [
      { messageKey: "scalableFrontendArchitecture" },
      { name: "Microfrontends" },
      { messageKey: "testingAndTdd" },
      { name: "Docker" },
      { name: "Git" },
      { name: "CI/CD" },
      { name: "AWS S3" },
      { messageKey: "aiAssistedDevelopment" },
    ],
  },
];

type CapabilityGroupProps = {
  groupKey: CapabilityGroupData["key"];
  title: string;
  items: string[];
};

function CapabilityGroup({ groupKey, title, items }: CapabilityGroupProps) {
  const isDenseMobile = groupKey !== "engineering";

  return (
    <section
      aria-labelledby={`capability-${groupKey}`}
      className={groupKey === "engineering" ? "md:col-span-2 lg:col-span-1" : undefined}
    >
      <h3
        className="border-b border-border pb-4 text-lg font-semibold tracking-[-0.025em] text-foreground"
        id={`capability-${groupKey}`}
      >
        {title}
      </h3>
      <ul className={isDenseMobile ? "grid grid-cols-2 gap-x-4 md:block" : undefined}>
        {items.map((item) => (
          <li
            className={`py-2.5 text-base leading-6 text-foreground-secondary ${
              isDenseMobile
                ? "md:border-b md:border-border md:last:border-b-0"
                : "border-b border-border last:border-b-0"
            }`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function Expertise({ locale }: { locale: "en" | "es" }) {
  const t = await getTranslations({ locale, namespace: "Expertise" });

  return (
    <section
      aria-labelledby="expertise-title"
      className="border-t border-border py-14 sm:py-24 xl:py-28"
      id="expertise"
    >
      <Container>
        <div className="mb-9 sm:mb-14">
          <p className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
            {t("sectionLabel")}
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
            id="expertise-title"
          >
            {t("heading")}
          </h2>
        </div>

        <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-x-12">
          {capabilityGroups.map((group) => (
            <CapabilityGroup
              key={group.key}
              groupKey={group.key}
              title={t(`groups.${group.key}`)}
              items={group.items.map((item) =>
                "name" in item ? item.name : t(`capabilities.${item.messageKey}`),
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
