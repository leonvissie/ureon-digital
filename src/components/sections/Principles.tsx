import { Code2, LockKeyhole, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PrincipleCard } from "@/components/cards/PrincipleCard";

export function Principles() {
  return (
    <Section id="philosophy" className="pt-6">
      <Container>
        <div className="grid gap-4 md:grid-cols-4">
          <PrincipleCard title="Privacy first" icon={<LockKeyhole />}>
            Your data belongs to you. Always.
          </PrincipleCard>
          <PrincipleCard title="Independent" icon={<Code2 />}>
            Built independently with attention to detail.
          </PrincipleCard>
          <PrincipleCard title="Thoughtful design" icon={<Sparkles />}>
            Focused experiences without unnecessary complexity.
          </PrincipleCard>
          <PrincipleCard title="Built to last" icon={<Star />}>
            Reliable software designed for long-term use.
          </PrincipleCard>
        </div>
      </Container>
    </Section>
  );
}
