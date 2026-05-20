import { ReactNode } from "react";

export function PrincipleCard({
  icon,
  title,
  children
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-teal/30 hover:shadow-glow">
      <div className="mx-auto flex h-10 w-10 items-center justify-center text-brand-teal">{icon}</div>
      <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{children}</p>
    </div>
  );
}
