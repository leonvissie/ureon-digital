"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/buttons/Button";
import { GradientRing } from "@/components/brand/GradientRing";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-soft-radial" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">
            Indie apps. Real impact.
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-7xl">
            Independent apps. <span className="text-gradient">Purpose built.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We design and build small, focused apps that solve real problems without unnecessary complexity.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#apps">
              Explore our apps <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#philosophy" variant="secondary">
              Our philosophy
            </Button>
          </div>
        </motion.div>

        <div className="relative min-h-[420px]">
          <motion.a
            href="/apps/cinlo"
            className="absolute left-[8%] top-[14%] flex w-56 rotate-[-7deg] flex-col items-center rounded-[28px] border border-white/10 bg-white/[0.05] p-6 text-center shadow-card backdrop-blur"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <GradientRing size={90} iconSrc="/brand/cinlo-192-round.png" iconAlt="Cinlo icon" />
            <h2 className="mt-8 font-display text-xl tracking-[0.28em]">CINLO</h2>
            <p className="mt-3 text-sm text-slate-400">Find award-nominated movies.</p>
          </motion.a>

          <motion.a
            href="/apps/guncerts"
            className="absolute right-[8%] top-[22%] flex w-56 rotate-[6deg] flex-col items-center rounded-[28px] border border-brand-teal/20 bg-white/[0.05] p-6 text-center shadow-card backdrop-blur"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ShieldCheck className="h-24 w-24 text-brand-teal drop-shadow-[0_0_24px_rgba(0,229,192,.35)]" />
            <h2 className="mt-8 font-display text-xl tracking-[0.18em]">GUNCERTS</h2>
            <p className="mt-3 text-sm text-slate-400">Manage your firearm licence with ease.</p>
          </motion.a>

          <div className="absolute inset-x-[10%] bottom-12 h-px bg-gradient-to-r from-transparent via-brand-teal/60 to-transparent" />
          <div className="absolute inset-x-[18%] bottom-0 h-24 rounded-full bg-brand-teal/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
