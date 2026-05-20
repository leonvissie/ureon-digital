"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { GradientRing } from "@/components/brand/GradientRing";
import { cn } from "@/lib/utils";

type Props = {
  app: {
    slug: string;
    name: string;
    status: string;
    description: string;
    detail: string;
    href: string;
    accent: string;
  };
  large?: boolean;
};

export function AppCard({ app, large = false }: Props) {
  const isCinlo = app.slug === "cinlo";

  return (
    <motion.a
      href={app.href}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28 }}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-card",
        large && "min-h-[340px]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-70 transition duration-500 group-hover:opacity-100",
          isCinlo
            ? "bg-[radial-gradient(circle_at_80%_20%,rgba(120,92,255,.25),transparent_34%),radial-gradient(circle_at_85%_88%,rgba(0,229,192,.16),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_80%_30%,rgba(0,229,192,.20),transparent_34%),radial-gradient(circle_at_75%_90%,rgba(14,174,249,.10),transparent_34%)]"
        )}
      />
      <div className="relative z-10">
        <span className="rounded-full border border-brand-teal/20 bg-brand-teal/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-brand-teal">
          {app.status}
        </span>

        <div className="mt-10 flex items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-[0.16em] text-white">
              {app.name.toUpperCase()}
            </h3>
            <p className="mt-5 max-w-sm text-lg text-white">{app.description}</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{app.detail}</p>
          </div>
          <div className="hidden sm:block">
            {isCinlo ? <GradientRing size={132} iconSrc="/brand/cinlo-192-round.png" iconAlt="Cinlo icon" /> : <ShieldCheck className="h-32 w-32 text-brand-teal drop-shadow-[0_0_24px_rgba(0,229,192,.35)]" />}
          </div>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand-teal">
          View {app.name} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  );
}
