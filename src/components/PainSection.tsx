import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pains = [
  { emoji: "😵", title: "Você fatura bem, mas não sabe quanto sobra", desc: "Dinheiro entra de vários lados. Mas no final do mês, a sensação é que deveria sobrar mais. E você tem razão." },
  { emoji: "💸", title: "Paga imposto demais sem saber", desc: "Imagina pagar 30% de algo quando poderia pagar 15%. Isso acontece todo mês." },
  { emoji: "📊", title: "Planilhas que ninguém abre depois da segunda semana", desc: "Controle financeiro não deveria exigir disciplina sobre-humana. Deveria ser automático." },
  { emoji: "⏰", title: "Horas gastas com burocracia que não gera valor", desc: "Notas fiscais, conciliações, impostos. Tudo isso pode rodar no automático." },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-secondary py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[3px] font-bold text-rose mb-3">O problema real</p>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight mb-3">
          Finanças não deveriam ser complicadas.
        </h2>
        <p className="text-base text-secondary-foreground leading-relaxed max-w-[600px]">
          Mas de alguma forma, todo mundo aceitou que sim. A verdade é que ninguém te ensinou a ver suas finanças de forma simples.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
          <div className="flex flex-col gap-3">
            {pains.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={item}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="flex gap-4 p-5 bg-card border border-border rounded-lg hover:border-rose/20 hover:bg-card-hover transition-all"
              >
                <span className="text-2xl min-w-[32px] text-center leading-[1.8]">{p.emoji}</span>
                <div>
                  <h4 className="text-[0.92rem] font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-card to-rose/5 border border-border rounded-lg p-10 text-center"
          >
            <div className="font-display text-7xl font-bold text-rose leading-none">73%</div>
            <p className="text-base text-secondary-foreground mt-3 mb-6 leading-relaxed">
              dos profissionais independentes pagam mais imposto do que precisariam.
            </p>
            <p className="text-sm text-muted-foreground border-t border-border pt-4 leading-relaxed">
              Não por falta de capacidade. Por falta de uma ferramenta que mostre com clareza onde o dinheiro está indo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
