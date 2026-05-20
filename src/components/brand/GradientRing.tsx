import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  showMark?: boolean;
};

export function GradientRing({ className, size = 48, showMark = true }: Props) {
  return (
    <div
      className={cn("relative shrink-0 rounded-full", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow" />
      <div className="absolute inset-[10%] rounded-full bg-ink-950" />
      {showMark ? (
        <div className="absolute inset-0 flex items-center justify-center font-display text-[0.42em] font-bold tracking-[-0.08em] text-white">
          <span className="translate-x-[1px]">UD</span>
        </div>
      ) : null}
    </div>
  );
}
