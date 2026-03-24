import SectionWrapper from "@/components/presentation/SectionWrapper";
import { Trophy, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const topics = [
  "Modelos de Software (SaaS, PaaS, IaaS)",
  "Git Profissional e Conventional Commits",
  "Engenharia de Prompt para IAs",
  "UX/UI e Prototipagem com Figma",
  "Design System para consistência",
  "System Design e Arquiteturas",
  "Design Patterns reutilizáveis",
  "Modelagem de Dados (SQL e NoSQL)",
  "Docker e Containerização",
  "Plataforma Nexus",
  "DevOps e Pipelines CI/CD",
  "Agentes de IA autônomos",
];

const ConclusaoSection = () => (
  <SectionWrapper
    id="conclusao"
    title="Conclusão"
    subtitle="Recapitulação e próximos passos na jornada de desenvolvimento."
    icon={<Trophy className="w-7 h-7" />}
  >
    <div className="glass-card p-8 mb-8">
      <h3 className="text-xl font-bold mb-6 text-foreground">O que exploramos</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {topics.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2 text-sm"
          >
            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
            <span className="text-muted-foreground">{t}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      {[
        { title: "Pratique", desc: "Conceitos só se consolidam com aplicação real. Crie projetos, experimente ferramentas." },
        { title: "Colabore", desc: "Desenvolvimento moderno é colaborativo. Contribua com open source, faça code review." },
        { title: "Evolua", desc: "A tecnologia muda rápido. Mantenha-se atualizado e nunca pare de aprender." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="glass-card p-6 text-center"
        >
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <p className="text-2xl font-bold gradient-text mb-2">Obrigado!</p>
      <p className="text-muted-foreground">Pronto para construir o futuro? 🚀</p>
    </motion.div>
  </SectionWrapper>
);

export default ConclusaoSection;
