import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  showMark?: boolean;
  iconSrc?: string;
  iconAlt?: string;
  iconSize?: number;
  ringInsetPct?: number;
};

export function GradientRing({
  className,
  size = 48,
  showMark = true,
  iconSrc,
  iconAlt = "",
  iconSize,
  ringInsetPct = 5
}: Props) {
  const centerIconSize = iconSize ?? Math.round(size * 0.75);

  return (
    <div
      className={cn("relative shrink-0 rounded-full", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow" />
      <div className="absolute rounded-full bg-ink-950" style={{ inset: `${ringInsetPct}%` }} />
      {iconSrc ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={iconSrc} alt={iconAlt} width={centerIconSize} height={centerIconSize} className="rounded-[10px]" />
        </div>
      ) : null}
      {!iconSrc && showMark ? (
        <div className="absolute inset-0 flex items-center justify-center font-display text-[0.42em] font-bold tracking-[-0.08em] text-white">
          <span className="translate-x-[1px]">UD</span>
        </div>
      ) : null}
    </div>
  );
}
