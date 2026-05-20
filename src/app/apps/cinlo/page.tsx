"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { getAppContacts } from "@/config/appContacts";
import { cn } from "@/lib/utils";

type PillKey = "overview" | "support" | "privacy" | "terms" | "faq";

const pills: Array<{ key: PillKey; label: string }> = [
  { key: "overview", label: "Overview" },
  { key: "support", label: "Support" },
  { key: "privacy", label: "Privacy" },
  { key: "terms", label: "Terms" },
  { key: "faq", label: "FAQ" }
];

export default function Page() {
  const [active, setActive] = useState<PillKey>("overview");
  const contacts = getAppContacts("cinlo");

  const isPillKey = (value: string): value is PillKey =>
    pills.some((pill) => pill.key === value);

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash && isPillKey(hash)) {
        setActive(hash);
      }
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  const panel = useMemo(() => {
    if (active === "overview") {
      return (
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-white">Find your next film by award pedigree.</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Cinlo helps you discover films through an awards-first lens, so choosing what to watch is faster and more intentional.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white">What Cinlo does</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-300">Filter by Oscars, Golden Globes and BAFTA data.</article>
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-300">Combine categories, genres, actors, directors and decades.</article>
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-300">Expand film cards to compare nominations and winners.</article>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white">App stores</h3>
            <p className="mt-3 text-slate-300">Store links can be added here as soon as listings are live.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">iOS (coming soon)</span>
              <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300">Android (coming soon)</span>
            </div>
          </section>
        </div>
      );
    }

    if (active === "support") {
      return (
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">Support</h2>
          <p className="text-slate-300">Need help, found a bug, or want beta access? Email support.</p>
          <p className="text-slate-200">
            Contact: <a className="text-brand-teal" href={`mailto:${contacts.support}`}>{contacts.support}</a>
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-300">
            Include: device model, OS version, app version, steps to reproduce, and screenshots.
          </div>
        </section>
      );
    }

    if (active === "privacy") {
      return (
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">Privacy Policy</h2>
          <p className="text-sm text-slate-400">Last updated: May 6, 2026</p>
          <p className="text-slate-300">Cinlo minimizes personal data collection and uses data only to operate and improve the app.</p>
          <p className="text-slate-300">We may receive diagnostics/crash data from platform services and optional contact details when you email support.</p>
          <p className="text-slate-300">Platform providers such as Apple and Google may process telemetry under their own policies.</p>
          <p className="text-slate-300">
            Privacy contact: <a className="text-brand-teal" href={`mailto:${contacts.privacy}`}>{contacts.privacy}</a>
          </p>
          <p className="text-slate-300">
            Data protection contact: <a className="text-brand-teal" href={`mailto:${contacts.dataProtection}`}>{contacts.dataProtection}</a>
          </p>
        </section>
      );
    }

    if (active === "terms") {
      return (
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold text-white">Terms of Use</h2>
          <p className="text-sm text-slate-400">Last updated: May 6, 2026</p>
          <p className="text-slate-300">Cinlo is provided for personal, non-commercial use unless otherwise agreed in writing.</p>
          <p className="text-slate-300">Awards data is compiled from public sources and may contain inaccuracies or timing gaps.</p>
          <p className="text-slate-300">Cinlo is provided &quot;as is&quot; without warranties to the extent permitted by law.</p>
          <p className="text-slate-300">
            Legal contact: <a className="text-brand-teal" href={`mailto:${contacts.legal}`}>{contacts.legal}</a>
          </p>
        </section>
      );
    }

    return (
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-white">FAQ</h2>
        <div className="space-y-4 text-slate-300">
          <p><strong className="text-white">Is Cinlo free?</strong> Cinlo pricing and availability will be confirmed at launch.</p>
          <p><strong className="text-white">How often is data updated?</strong> Updates are batched and quality-checked before release.</p>
          <p><strong className="text-white">Can I report data issues?</strong> Yes, email <a className="text-brand-teal" href={`mailto:${contacts.support}`}>{contacts.support}</a>.</p>
        </div>
      </section>
    );
  }, [active, contacts.dataProtection, contacts.legal, contacts.privacy, contacts.support]);

  return (
    <main className="pt-36 pb-24">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/cinlo-192.png"
              alt="Cinlo app icon"
              width={56}
              height={56}
              className="rounded-2xl"
            />
            <h1 className="font-display text-5xl font-semibold text-white">Cinlo</h1>
          </div>
          <p className="mt-4 max-w-2xl text-slate-300">Find award-nominated films worth watching.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {pills.map((pill) => (
              <button
                key={pill.key}
                type="button"
                onClick={() => {
                  setActive(pill.key);
                  if (typeof window !== "undefined") {
                    window.history.replaceState(null, "", `#${pill.key}`);
                  }
                }}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  active === pill.key
                    ? "border-brand-teal/60 bg-brand-teal/15 text-white"
                    : "border-white/15 bg-white/[0.02] text-slate-300 hover:border-white/30 hover:text-white"
                )}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <div className="mt-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.26, ease: "easeOut" }}
              >
                {panel}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </main>
  );
}
