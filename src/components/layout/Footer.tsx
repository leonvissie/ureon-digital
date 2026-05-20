import { Logo } from "@/components/brand/Logo";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="grid gap-10 md:grid-cols-[1fr_auto_auto]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            Independent apps designed to be useful, thoughtful and built to last.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium text-white">Navigation</p>
          <div className="mt-4 grid gap-2 text-slate-400">
            <a href="/apps">Apps</a>
            <a href="#about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-medium text-white">Contact</p>
          <a className="mt-4 block text-brand-teal" href="mailto:ureondigital@gmail.com">
            ureondigital@gmail.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
