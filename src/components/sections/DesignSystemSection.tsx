import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import { Layout } from "lucide-react";
import { motion } from "framer-motion";

const DesignSystemSection = () => (
  <SectionWrapper
    id="designsystem"
    title="Design System"
    subtitle="A base da consistência visual em produtos digitais."
    icon={<Layout className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <SectionCard variant="primary" title="O que é?" description="Coleção de componentes, padrões e guidelines reutilizáveis que garantem consistência." />
      <SectionCard variant="secondary" title="Benefícios" description="Velocidade de desenvolvimento, consistência visual, onboarding mais rápido." />
      <SectionCard title="Escalabilidade" description="Times maiores mantêm qualidade visual sem depender de designers em cada feature." />
    </div>

    {/* Visual components showcase */}
    <div className="glass-card p-6 mb-6">
      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">Paleta de Cores</h4>
      <div className="flex flex-wrap gap-3">
        {[
          { name: "Primary", cls: "bg-primary" },
          { name: "Secondary", cls: "bg-secondary" },
          { name: "Background", cls: "bg-background border border-border" },
          { name: "Card", cls: "bg-card border border-border" },
          { name: "Muted", cls: "bg-muted" },
          { name: "Accent", cls: "bg-accent" },
          { name: "Destructive", cls: "bg-destructive" },
        ].map(c => (
          <motion.div key={c.name} whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-1.5">
            <div className={`w-14 h-14 rounded-lg ${c.cls}`} />
            <span className="text-xs text-muted-foreground">{c.name}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <div className="glass-card p-6">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">Tipografia</h4>
        <div className="space-y-3">
          <p className="text-3xl font-bold">Heading 1 — Space Grotesk</p>
          <p className="text-xl font-semibold">Heading 2 — Semibold</p>
          <p className="text-base">Body text — Regular weight</p>
          <p className="text-sm text-muted-foreground">Caption — Muted</p>
          <p className="font-mono text-sm">Code — JetBrains Mono</p>
        </div>
      </div>
      <div className="glass-card p-6">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">Componentes</h4>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">Primary</button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium">Secondary</button>
            <button className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium border border-border">Outline</button>
          </div>
          <input className="w-full px-3 py-2 rounded-lg border border-border bg-muted/50 text-sm placeholder:text-muted-foreground" placeholder="Input field" readOnly />
          <div className="flex gap-2">
            <span className="px-2.5 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">Badge</span>
            <span className="px-2.5 py-0.5 bg-secondary/20 text-secondary text-xs font-medium rounded-full">Status</span>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default DesignSystemSection;
