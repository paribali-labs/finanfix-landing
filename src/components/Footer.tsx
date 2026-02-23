import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const verbs = ["empreende", "atende", "opera", "cria", "vende", "advoga"];

export default function Footer() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % verbs.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-display text-base font-bold">finan<span className="text-primary">fix</span></div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Inteligência financeira pra quem{" "}
            <span className="inline-block w-[70px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block text-primary font-semibold"
                >
                  {verbs[idx]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">Como funciona</a>
          <a href="#score" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">Seu Score</a>
          <a href="#para-quem" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">Para quem</a>
          <a href="mailto:contato@finanfix.com.br" className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors">Contato</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Finanfix</p>
      </div>
    </footer>
  );
}
