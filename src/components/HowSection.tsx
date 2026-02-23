import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", icon: "🔗", title: "Conecte suas contas", desc: "Seus bancos se conectam automaticamente. Nada de digitar extrato, subir arquivo ou copiar número." },
  { num: "02", icon: "🧠", title: "A AI organiza tudo", desc: "Inteligência artificial categoriza cada centavo, identifica padrões e monta seu retrato financeiro." },
  { num: "03", icon: "🎯", title: "Você assume o controle", desc: "Dashboard simples, score de saúde financeira e check-in semanal de 5 minutos." },
];

export default function HowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="bg-bg-light py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[3px] font-bold text-primary mb-3">Como funciona</p>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-text-dark mb-3">
          Três passos. Zero complicação.
        </h2>
        <p className="text-base text-text-dark-secondary leading-relaxed max-w-[600px]">
          Em menos de 48 horas você sai do "acho que tá tudo certo" pra "sei exatamente onde estou".
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-lg p-7 border border-[hsl(var(--border-light))] hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="font-display text-5xl font-bold text-primary/10 leading-none">{s.num}</div>
              <div className="text-2xl mt-1 mb-3">{s.icon}</div>
              <h3 className="text-base font-bold text-text-dark mb-1.5">{s.title}</h3>
              <p className="text-sm text-text-dark-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
