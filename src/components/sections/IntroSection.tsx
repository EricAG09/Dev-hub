import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import { Rocket, Code2, GitBranch, Brain, Palette, Layout, Server, Puzzle, Database, Container, Workflow, Bot } from "lucide-react";
import { motion } from "framer-motion";

const IntroSection = () => {
  const topics = [
    { icon: Code2, title: "Modelos de Software", desc: "SaaS, PaaS, IaaS, Micro-SaaS" },
    { icon: GitBranch, title: "Git Profissional", desc: "GitFlow, Commits, Conflitos" },
    { icon: Brain, title: "Engenharia de Prompt", desc: "Zero-shot, Few-shot, Chain-of-thought" },
    { icon: Palette, title: "UX/UI & Prototipagem", desc: "Princípios, Fluxos, Figma" },
    { icon: Layout, title: "Design System", desc: "Componentes, Consistência" },
    { icon: Server, title: "System Design", desc: "Monólito vs Microserviços" },
    { icon: Puzzle, title: "Design Patterns", desc: "Singleton, Factory, Observer" },
    { icon: Database, title: "Modelagem de Dados", desc: "SQL vs NoSQL, DER" },
    { icon: Container, title: "Docker & Portainer", desc: "Containers, Volumes" },
    { icon: Workflow, title: "DevOps (CI/CD)", desc: "Pipelines, Deploy" },
    { icon: Bot, title: "Agentes de IA", desc: "AutoGPT, CrewAI" },
  ];

  return (
    <SectionWrapper
      id="intro"
      title=""
      icon={<Rocket className="w-8 h-8" />}
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Dev Workshop</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">Conceitos Avançados de Desenvolvimento de Software</p>
          <p className="text-muted-foreground">Uma jornada visual pelos pilares da engenharia moderna</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {topics.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <SectionCard title={t.title} description={t.desc} icon={<t.icon className="w-5 h-5" />} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default IntroSection;
