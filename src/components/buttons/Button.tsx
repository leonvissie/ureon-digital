import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, href, variant = "primary" }: Props) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300",
        variant === "primary" &&
          "bg-brand-gradient text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow",
        variant === "secondary" &&
          "border border-white/12 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-brand-teal/50"
      )}
    >
      {children}
    </a>
  );
}
