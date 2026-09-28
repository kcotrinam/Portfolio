import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { routing } from "@/i18n/routing";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const header = await getTranslations({ locale, namespace: "Header" });
  const hero = await getTranslations({ locale, namespace: "Hero" });

  return (
    <>
      <Header locale={locale} labels={{
        about: header("about"),
        brandRole: header("brandRole"),
        contact: header("contact"),
        experience: header("experience"),
        expertise: header("expertise"),
        localeNavigation: header("localeNavigation"),
        navigation: header("navigation"),
        openMenu: header("openMenu"),
        closeMenu: header("closeMenu"),
        resume: header("resume"),
        work: header("work"),
      }} />
      <main>
        <Hero labels={{
          availability: hero("availability"),
          contact: hero("contact"),
          description: hero("description"),
          github: hero("github"),
          linkedin: hero("linkedin"),
          resume: hero("resume"),
          role: hero("role"),
          selectedWork: hero("selectedWork"),
          statement: hero("statement"),
        }} />
      </main>
    </>
  );
}
