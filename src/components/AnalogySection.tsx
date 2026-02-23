import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnalogySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[3px] font-bold text-primary mb-3">Uma analogia</p>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight mb-3">
          Pense no Finanfix como o Waze das suas finanças.
        </h2>
        <p className="text-base text-secondary-foreground leading-relaxed max-w-[600px]">
          Você não precisa entender de trânsito pra chegar no melhor caminho. Só precisa de uma tela que mostra pra onde ir.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto mt-10 bg-gradient-to-br from-card to-primary/[0.04] border border-border rounded-2xl p-10 relative overflow-hidden border-gradient-top"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-muted-foreground mb-2">Sem Finanfix</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">
                Você dirige sem GPS. Acha que tá no caminho certo, mas pega pedágio desnecessário, entra em rua errada e demora o dobro.
              </p>
            </div>
            <div className="text-3xl text-primary text-center md:rotate-0 rotate-90">→</div>
            <div>
              <h3 className="font-display text-lg font-bold text-primary-light mb-2">Com Finanfix</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">
                Você liga o GPS. Ele mostra o melhor caminho, avisa dos radares (impostos), sugere atalhos e você chega mais rápido.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-[0.95rem] text-secondary-foreground leading-relaxed">
              A diferença? <strong className="text-primary-light">Visibilidade.</strong> Quando você enxerga seus números com clareza, toma decisões melhores naturalmente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
