import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Foundation" });

  return (
    <main className="min-h-screen py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
            {t("subtitle")}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 font-mono text-xs tracking-[0.16em] text-foreground-secondary uppercase">
            {t("locale", { locale })}
          </p>
        </div>
      </Container>
    </main>
  );
}
