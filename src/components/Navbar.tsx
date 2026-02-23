import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Seu Score", href: "#score" },
  { label: "Para quem", href: "#para-quem" },
];

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 glass-nav border-b transition-all duration-300 ${scrolled ? "border-border" : "border-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-3.5">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          finan<span className="text-primary">fix</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button onClick={onOpenModal} className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-bold hover:bg-primary-light transition-all hover:-translate-y-0.5">
              Começar grátis
            </button>
          </li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              ))}
              <button onClick={() => { setMenuOpen(false); onOpenModal(); }} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-bold w-full">
                Começar grátis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
