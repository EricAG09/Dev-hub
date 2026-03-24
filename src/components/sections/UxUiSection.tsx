import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import { Palette, Eye, MousePointer, Figma } from "lucide-react";

const UxUiSection = () => (
  <SectionWrapper
    id="uxui"
    title="UX/UI & Prototipagem"
    subtitle="Design centrado no usuário: da pesquisa ao protótipo funcional."
    icon={<Palette className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <SectionCard variant="primary" title="Hierarquia Visual" description="Guiar o olhar do usuário usando tamanho, cor e espaçamento." icon={<Eye className="w-5 h-5" />} />
      <SectionCard variant="secondary" title="Affordance" description="Elementos devem comunicar sua função — botões parecem clicáveis." icon={<MousePointer className="w-5 h-5" />} />
      <SectionCard title="Consistência" description="Padrões visuais e comportamentais uniformes em toda a aplicação." icon={<Figma className="w-5 h-5" />} />
    </div>

    <DiagramBox title="User Flow — Fluxo do Usuário">
      <div className="flex flex-wrap items-center gap-3 justify-center">
        <FlowNode label="Landing Page" variant="primary" />
        <FlowArrow />
        <FlowNode label="Login / Signup" variant="default" />
        <FlowArrow />
        <FlowNode label="Dashboard" variant="secondary" />
        <FlowArrow />
        <FlowNode label="Criar Projeto" variant="default" />
        <FlowArrow />
        <FlowNode label="Configurar" variant="default" />
        <FlowArrow />
        <FlowNode label="Deploy" variant="primary" />
      </div>
    </DiagramBox>

    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div className="glass-card p-6">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Mockup — Tela de Login</h4>
        <div className="bg-muted/50 rounded-lg p-8 space-y-4">
          <div className="h-8 w-32 bg-primary/20 rounded mx-auto" />
          <div className="space-y-3 max-w-xs mx-auto">
            <div className="h-10 bg-muted rounded border border-border" />
            <div className="h-10 bg-muted rounded border border-border" />
            <div className="h-10 bg-primary rounded" />
          </div>
          <div className="h-3 w-24 bg-muted-foreground/20 rounded mx-auto" />
        </div>
      </div>
      <div className="glass-card p-6">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Mockup — Dashboard</h4>
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="h-8 bg-muted rounded mb-4 border border-border" />
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="h-16 bg-primary/15 rounded border border-primary/20" />
            <div className="h-16 bg-secondary/15 rounded border border-secondary/20" />
            <div className="h-16 bg-muted rounded border border-border" />
          </div>
          <div className="h-32 bg-muted rounded border border-border" />
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default UxUiSection;
