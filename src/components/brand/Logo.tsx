import Image from "next/image";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="Ureon Digital home">
      <Image src="/brand/ud-logo-64.png" alt="Ureon Digital logo" width={48} height={48} className="shrink-0 rounded-md" />
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
