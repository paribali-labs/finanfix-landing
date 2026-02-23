import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const audiences = [
  { emoji: "🎥", title: "Creators", desc: "Receita de várias plataformas, meses que explodem e meses que somem. Finanfix consolida tudo.", color: "border-primary" },
  { emoji: "🩺", title: "Médicos", desc: "Clínica, plantão, convênio, particular. Múltiplas fontes, zero tempo livre. Seu painel financeiro trabalha por você.", color: "border-blue" },
  { emoji: "⚖️", title: "Advogados", desc: "Honorários variáveis, sociedade, múltiplos CNPJs. Complexidade tributária resolvida com clareza.", color: "border-purple" },
  { emoji: "💻", title: "Empreendedores", desc: "SaaS, e-commerce, infoprodutos. Receita muda todo mês. Você precisa de estrutura, não de planilha.", color: "border-amber" },
];

export default function AudienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="para-quem" className="bg-bg-cream py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[3px] font-bold text-primary mb-3">Para você</p>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-text-dark mb-3">
          Finanfix é pra quem acredita que<br className="hidden sm:block" /> dinheiro deveria ser simples de entender.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-lg p-6 border-t-[3px] ${a.color} hover:-translate-y-1 hover:shadow-lg transition-all`}
            >
              <div className="text-3xl mb-3">{a.emoji}</div>
              <h3 className="text-base font-bold text-text-dark mb-1.5">{a.title}</h3>
              <p className="text-sm text-text-dark-secondary leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
