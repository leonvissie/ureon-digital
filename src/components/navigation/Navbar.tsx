"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";

const links = [
  { href: "#apps", label: "Apps" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#about", label: "About" },
  { href: "mailto:ureondigital@gmail.com", label: "Contact" }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(5,8,15,0)", "rgba(5,8,15,.74)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(148,163,184,0)", "rgba(148,163,184,.16)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-9 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ureondigital@gmail.com"
            className="rounded-full border border-brand-teal/40 px-5 py-2.5 text-white transition hover:border-brand-teal hover:shadow-glow"
          >
            Get in touch
          </a>
        </nav>
        <button className="rounded-full border border-white/10 p-2 text-white md:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </Container>
    </motion.header>
  );
}
