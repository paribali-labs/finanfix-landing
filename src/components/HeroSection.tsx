import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const verbs = ["organiza", "simplifica", "automatiza", "protege"];

export default function HeroSection() {
  const [verbIdx, setVerbIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setVerbIdx((i) => (i + 1) % verbs.length), 2500);
    return () => clearInterval(t);
  }, []);

  const metrics = [
    { val: "5 min", lbl: "Check-in semanal" },
    { val: "Score", lbl: "Saúde financeira" },
    { val: "24/7", lbl: "AI monitorando" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-[820px] text-center"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/15 text-primary-light tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Finanfix · Financial Intelligence
        </div>

        <h1 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.1] tracking-tight mb-6">
          O sistema financeiro que{" "}
          <br className="hidden sm:block" />
          <span className="inline-block min-w-[240px] text-center text-primary bg-primary/10 px-1.5 rounded-md whitespace-nowrap">
            <motion.span
              key={verbIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="inline-block"
            >
              {verbs[verbIdx]}
            </motion.span>
          </span>{" "}
          enquanto você cria.
        </h1>

        <p className="text-lg text-secondary-foreground leading-relaxed max-w-[580px] mx-auto mb-10">
          Suas finanças organizadas, inteligentes e no seu controle.
          <br />
          Sem complicação. Sem jargão. Sem planilha.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <a
            href="https://app.finanfix.com.br/signup"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-[10px] font-bold text-[0.95rem] hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(var(--primary-glow-strong))] transition-all"
          >
            Começar grátis →
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 border border-border text-secondary-foreground px-7 py-3.5 rounded-[10px] font-medium text-[0.95rem] hover:border-muted-foreground hover:text-foreground transition-all"
          >
            Ver como funciona
          </a>
        </div>

        <div className="flex justify-center gap-12 flex-wrap">
          {metrics.map((m) => (
            <div key={m.lbl} className="text-center">
              <div className="font-display text-2xl font-bold text-primary-light">{m.val}</div>
              <div className="text-[0.72rem] text-muted-foreground uppercase tracking-widest mt-0.5">{m.lbl}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
