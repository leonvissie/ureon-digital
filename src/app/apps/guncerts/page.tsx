import { Container } from "@/components/layout/Container";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Page() {
  return (
    <main className="pt-36 pb-24">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/10 p-3">
              <ShieldCheck className="h-8 w-8 text-brand-teal" />
            </div>
            <h1 className="font-display text-5xl font-semibold text-white">GunCerts</h1>
          </div>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            GunCerts is a practical companion for South African firearm licence and competency renewal workflows.
          </p>

          <p className="mt-4 max-w-3xl text-slate-400">
            For full app details, guides, pricing, support, and legal information, use the official GunCerts website.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.guncerts.co.za"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-teal/45 bg-brand-teal/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-brand-teal hover:shadow-glow"
            >
              Visit guncerts.co.za <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
