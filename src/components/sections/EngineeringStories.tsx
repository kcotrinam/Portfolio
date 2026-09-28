import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";

const storyKeys = [
  "stateManagement",
  "advertisingFeatures",
  "productionReliability",
] as const;

type EngineeringStoryCardProps = {
  storyKey: (typeof storyKeys)[number];
  context: string;
  title: string;
  description: string;
  focus: string;
};

function EngineeringStoryCard({
  storyKey,
  context,
  title,
  description,
  focus,
}: EngineeringStoryCardProps) {
  return (
    <article
      aria-labelledby={`story-${storyKey}`}
      className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7"
    >
      <div className="flex-1">
        <p className="font-mono text-[0.6875rem] leading-5 tracking-[0.06em] text-foreground-secondary uppercase">
          {context}
        </p>
        <h3
          className="mt-5 text-xl leading-snug font-semibold tracking-[-0.03em] text-foreground"
          id={`story-${storyKey}`}
        >
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-foreground-secondary sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
      <p className="mt-8 border-t border-border pt-5 font-mono text-[0.6875rem] leading-5 text-foreground-secondary">
        {focus}
      </p>
    </article>
  );
}

export async function EngineeringStories({ locale }: { locale: "en" | "es" }) {
  const t = await getTranslations({ locale, namespace: "EngineeringStories" });

  return (
    <section
      aria-labelledby="engineering-stories-title"
      className="border-t border-border py-20 sm:py-24 xl:py-28"
      id="experience"
    >
      <Container>
        <div className="mb-12 sm:mb-14">
          <p className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
            {t("sectionLabel")}
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
            id="engineering-stories-title"
          >
            {t("heading")}
          </h2>
          <p className="mt-3 max-w-[46rem] text-base leading-7 text-foreground-secondary">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 xl:grid-cols-3">
          {storyKeys.map((storyKey) => (
            <EngineeringStoryCard
              key={storyKey}
              storyKey={storyKey}
              context={t(`stories.${storyKey}.context`)}
              title={t(`stories.${storyKey}.title`)}
              description={t(`stories.${storyKey}.description`)}
              focus={t(`stories.${storyKey}.focus`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
