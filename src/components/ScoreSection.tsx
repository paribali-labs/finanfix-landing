import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const checks = [
  { label: "Receita vs. mês passado", status: "+12% ✓", color: "bg-primary" as const, statusClass: "text-primary" },
  { label: "Impostos otimizados", status: "Em dia ✓", color: "bg-primary" as const, statusClass: "text-primary" },
  { label: "Reserva de emergência", status: "68% da meta", color: "bg-amber" as const, statusClass: "text-amber" },
  { label: "Gastos acima do padrão", status: "Delivery +40%", color: "bg-rose" as const, statusClass: "text-rose" },
];

const features = [
  { icon: "🏆", text: <>Conquistas desbloqueadas — <strong>"Primeiro mês positivo"</strong>, <strong>"Impostos otimizados"</strong></> },
  { icon: "💡", text: <>Dica da semana — Uma coisa simples que melhora seu score</> },
  { icon: "📈", text: <>Evolução visível — Gráfico do seu score ao longo do tempo</> },
  { icon: "🧑‍💼", text: <>Especialista disponível — Quando o assunto ficar complexo</> },
];

export default function ScoreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="score" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-[3px] font-bold text-amber mb-3">Seu Score Financeiro</p>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight mb-3">
          Finanças como um jogo.<br />Que você quer ganhar.
        </h2>
        <p className="text-base text-secondary-foreground leading-relaxed max-w-[600px]">
          Toda semana, um check-in de 5 minutos. Você vê seu score, entende o que mudou e aprende algo novo.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-10 items-center">
          {/* Score Mock */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-amber" />
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-display text-sm font-semibold text-secondary-foreground">Seu Score Finanfix</h4>
              <span className="text-xs text-muted-foreground bg-white/5 px-3 py-1 rounded-full">Semana 12</span>
            </div>

            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="font-display text-7xl font-bold text-primary leading-none"
              >
                76
              </motion.div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Saúde Financeira</div>
            </div>

            <div className="w-full h-2 bg-white/5 rounded-full mb-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "76%" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-amber"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              {checks.map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 bg-white/[0.02] rounded-md text-sm text-secondary-foreground">
                  <span className={`w-2 h-2 rounded-full ${c.color} min-w-[8px]`} />
                  <span>{c.label}</span>
                  <span className={`ml-auto text-xs font-semibold whitespace-nowrap ${c.statusClass}`}>{c.status}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold tracking-tight mb-4">
              Não é um relatório chato.<br />É o seu painel de controle.
            </h3>
            <p className="text-[0.95rem] text-secondary-foreground leading-relaxed mb-5">
              Imagine abrir o app toda segunda e em 5 minutos saber: como foi sua semana financeira, o que melhorou, o que precisa de atenção e o que você pode comemorar.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-[10px]">
                  <span className="text-xl min-w-[28px] text-center">{f.icon}</span>
                  <span className="text-sm text-secondary-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
