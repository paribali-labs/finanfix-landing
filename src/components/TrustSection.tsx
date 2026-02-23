import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trusts = [
  { icon: "🧑‍⚖️", title: "Tributarista no time", desc: "Otimização fiscal feita por quem entende a legislação.", color: "border-l-primary" },
  { icon: "✨", title: "AI que aprende com você", desc: "Quanto mais usa, mais inteligente o sistema fica.", color: "border-l-blue" },
  { icon: "🔒", title: "Dados protegidos", desc: "Conexão via Open Finance, regulado pelo Banco Central.", color: "border-l-purple" },
  { icon: "💬", title: "Humanos quando importa", desc: "AI resolve a maior parte. Mas quando é sério, gente real te ajuda.", color: "border-l-amber" },
  { icon: "📊", title: "Resultado que você vê", desc: "Score, evolução, economia real. Nada abstrato.", color: "border-l-warm" },
  { icon: "🤝", title: "Sem prender você", desc: "Sem contrato, sem multa. Cancela quando quiser.", color: "border-l-rose" },
];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[3px] font-bold text-purple mb-3">Por que confiar</p>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight mb-3">
          Construído por quem já viveu<br className="hidden sm:block" /> a complexidade financeira por dentro.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {trusts.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-5 bg-card rounded-lg border-l-[3px] ${t.color}`}
            >
              <h4 className="text-sm font-semibold mb-1">{t.icon} {t.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
