import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();

    const newErrors: Record<string, boolean> = {};
    if (name.length < 3) newErrors.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) newErrors.phone = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log("Lead captured:", JSON.stringify({ name, email, phone, source: "finanfix-landing", timestamp: new Date().toISOString() }));
    setSubmitted(true);
    setTimeout(() => { onClose(); setSubmitted(false); setErrors({}); }, 4000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-3xl p-10 max-w-[460px] w-full relative overflow-hidden border-gradient-top"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-5 text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <h3 className="font-display text-xl font-bold tracking-tight mb-1.5">Comece seu diagnóstico grátis</h3>
                <p className="text-sm text-secondary-foreground mb-7 leading-relaxed">
                  Preencha abaixo e nossa equipe entra em contato em até 24h para conectar suas contas.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field label="Nome completo" name="name" placeholder="Seu nome completo" error={errors.name} errorMsg="Por favor, insira seu nome completo." />
                  <Field label="E-mail" name="email" type="email" placeholder="seu@email.com" error={errors.email} errorMsg="Por favor, insira um e-mail válido." />
                  <Field label="Telefone (WhatsApp)" name="phone" type="tel" placeholder="(11) 99999-9999" error={errors.phone} errorMsg="Por favor, insira seu telefone." />
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-[10px] font-bold text-base hover:bg-primary-light transition-all mt-2">
                    Quero meu diagnóstico →
                  </button>
                  <p className="text-xs text-muted-foreground text-center">Seus dados estão seguros. Não enviamos spam.</p>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-xl font-bold mb-2">Tudo certo!</h3>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  Recebemos seus dados. Nossa equipe vai entrar em contato em até 24h pelo WhatsApp para iniciar seu diagnóstico financeiro.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type = "text", placeholder, error, errorMsg }: {
  label: string; name: string; type?: string; placeholder: string; error?: boolean; errorMsg: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-secondary-foreground uppercase tracking-wider mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-[10px] border bg-background text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground ${
          error ? "border-rose shadow-[0_0_0_3px_hsl(var(--rose)/0.15)]" : "border-border focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary-glow))]"
        }`}
      />
      {error && <p className="text-xs text-rose mt-1">{errorMsg}</p>}
    </div>
  );
}
