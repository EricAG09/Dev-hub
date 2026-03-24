import SectionWrapper from "@/components/presentation/SectionWrapper";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import SectionCard from "@/components/presentation/SectionCard";
import { Workflow, GitCommit, TestTube, Rocket } from "lucide-react";

const DevOpsSection = () => (
  <SectionWrapper
    id="devops"
    title="DevOps (CI/CD)"
    subtitle="Automatize o caminho do código até a produção."
    icon={<Workflow className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-2 gap-4 mb-8">
      <SectionCard variant="primary" title="CI — Integração Contínua" description="Cada commit dispara build + testes automaticamente. Bugs são pegos cedo." icon={<GitCommit className="w-5 h-5" />} />
      <SectionCard variant="secondary" title="CD — Deploy Contínuo" description="Após testes passarem, o deploy acontece automaticamente. Zero intervenção." icon={<Rocket className="w-5 h-5" />} />
    </div>

    <DiagramBox title="Pipeline de CI/CD">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <FlowNode label="git commit" variant="primary" />
        <FlowArrow />
        <FlowNode label="Build" variant="default" />
        <FlowArrow />
        <FlowNode label="Lint & Format" variant="default" />
        <FlowArrow />
        <FlowNode label="Unit Tests" variant="default" />
        <FlowArrow />
        <FlowNode label="Integration Tests" variant="default" />
        <FlowArrow />
        <FlowNode label="Staging Deploy" variant="secondary" />
        <FlowArrow />
        <FlowNode label="E2E Tests" variant="default" />
        <FlowArrow />
        <FlowNode label="Production Deploy" variant="primary" />
      </div>
    </DiagramBox>

    <div className="mt-6 glass-card p-6">
      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Ferramentas Populares</h4>
      <div className="flex flex-wrap gap-2">
        {["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI", "ArgoCD", "Docker", "Kubernetes", "Terraform"].map(t => (
          <span key={t} className="px-3 py-1.5 bg-muted/80 border border-border rounded-full text-xs font-medium text-foreground">{t}</span>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default DevOpsSection;
