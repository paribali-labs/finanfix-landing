import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-secondary py-24 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[680px] mx-auto text-center bg-card border border-border rounded-3xl p-14 relative overflow-hidden border-gradient-top-multi"
      >
        <h2 className="font-display text-3xl font-bold tracking-tight mb-4">
          Comece entendendo onde você está.
        </h2>
        <p className="text-secondary-foreground text-base leading-relaxed mb-8">
          O primeiro passo é ver seus números com clareza. Sem compromisso, sem custo. Você conecta, a AI analisa e te mostra o retrato real das suas finanças.
        </p>
        <a
          href="https://app.finanfix.com.br/signup"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-[10px] font-bold text-base hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(var(--primary-glow-strong))] transition-all"
        >
          Começar teste grátis →
        </a>
        <p className="text-sm text-muted-foreground mt-4">Leva menos de 3 minutos pra começar.</p>
      </motion.div>
    </section>
  );
}
