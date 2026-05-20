import { apps } from "@/config/apps";
import { AppCard } from "@/components/cards/AppCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function FeaturedApps() {
  return (
    <Section id="apps">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">Featured apps</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-5xl">
          Built for real life.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          A growing collection of focused tools and experiences designed with care.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} large />
          ))}
        </div>
      </Container>
    </Section>
  );
}
