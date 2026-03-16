import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const APP_URL = "https://app.finanfix.com.br";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Seu Score", href: "#score" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Preços", href: `${APP_URL}/pricing` },
];

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Block body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 glass-nav border-b transition-all duration-500 ${
          scrolled ? "border-border/60" : "border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="font-display text-[1.35rem] font-extrabold tracking-tight select-none">
              finan
              <span className="text-primary transition-colors duration-300 group-hover:opacity-80">
                fix
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`${APP_URL}/login`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Entrar
            </a>
            <button
              onClick={onOpenModal}
              className="bg-primary hover:bg-primary-light text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(0,200,83,0.25)]"
            >
              Começar grátis
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — full-screen overlay (outside nav to avoid backdrop-filter containing block) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-16 z-50 bg-[hsl(240,6%,4%)] border-t border-border/40"
          >
            <div className="flex flex-col h-full px-6 py-8">
              {/* Navigation links */}
              <div className="flex flex-col">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-semibold text-muted-foreground hover:text-foreground py-4 border-b border-border/30 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Action buttons — pinned to bottom */}
              <div className="mt-auto flex flex-col gap-3 pb-8">
                <a
                  href={`${APP_URL}/login`}
                  onClick={() => setMenuOpen(false)}
                  className="bg-primary text-primary-foreground px-5 py-3.5 rounded-lg text-base font-semibold text-center hover:bg-primary-light transition-all duration-300 w-full"
                >
                  Entrar
                </a>
                <button
                  onClick={() => { setMenuOpen(false); onOpenModal(); }}
                  className="border border-border/60 text-foreground px-5 py-3.5 rounded-lg text-base font-semibold text-center hover:bg-white/5 transition-all duration-300 w-full"
                >
                  Começar grátis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
