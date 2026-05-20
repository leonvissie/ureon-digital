import { About } from "@/components/sections/About";
import { FeaturedApps } from "@/components/sections/FeaturedApps";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedApps />
      <Principles />
      {/* <About /> */}
      <section className="pb-20">
        <Container>
          <div className="rounded-[32px] border border-brand-teal/20 bg-brand-teal/[0.04] p-8 text-center shadow-glow">
            <h2 className="font-display text-3xl font-semibold text-white">More apps. More ideas. Always building.</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              The Ureon Digital ecosystem will grow carefully, with each app having its own personality while sharing the same design language.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
