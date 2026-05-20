import { GradientRing } from "./GradientRing";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="Ureon Digital home">
      <GradientRing size={34} />
      <div className="leading-none">
        <div className="font-display text-sm font-semibold tracking-[0.26em] text-white">
          UREON
        </div>
        <div className="mt-1 font-display text-[10px] tracking-[0.34em] text-slate-300">
          DIGITAL
        </div>
      </div>
    </a>
  );
}
