import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-8 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[.85fr_1fr] lg:p-10">
          <div>
            {/* <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">Hi, I’m Leon.</p> */}
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-5xl">
              Small apps. Carefully built.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Ureon Digital is an independent software studio focused on building useful,
              thoughtfully designed apps with privacy and simplicity at their core.
            </p>
            <a href="mailto:hello@ureondigital.com" className="mt-7 inline-flex text-sm font-medium text-brand-teal">
              Get in touch →
            </a>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,192,.18),transparent_32%),linear-gradient(135deg,#0b101b,#05080f)]">
            <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-brand-teal/15 blur-2xl" />
            <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-brand-purple/15 blur-3xl" />
            <div className="absolute inset-x-10 bottom-10 rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur">
              <div className="mb-4 h-3 w-28 rounded-full bg-white/10" />
              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-brand-teal/30" />
                <div className="h-2 w-4/5 rounded-full bg-white/10" />
                <div className="h-2 w-3/5 rounded-full bg-brand-purple/30" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
