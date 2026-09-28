import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <main className="min-h-screen py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
            Portfolio foundation
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Kevin Cotrina
          </h1>
          <p className="mt-3 text-base leading-7 text-foreground-secondary">
            Senior Full Stack Engineer
          </p>
        </div>
      </Container>
    </main>
  );
}
