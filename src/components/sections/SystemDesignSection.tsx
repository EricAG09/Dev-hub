import SectionWrapper from "@/components/presentation/SectionWrapper";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import ComparisonTable from "@/components/presentation/ComparisonTable";
import { Server } from "lucide-react";

const SystemDesignSection = () => (
  <SectionWrapper
    id="systemdesign"
    title="System Design"
    subtitle="Monólito vs Microserviços: como escolher a arquitetura certa."
    icon={<Server className="w-7 h-7" />}
  >
    <div className="grid lg:grid-cols-2 gap-6 mb-6">
      <DiagramBox title="Arquitetura Monolítica">
        <div className="flex flex-col items-center gap-3">
          <FlowNode label="Cliente (Browser)" variant="primary" />
          <FlowArrow direction="down" />
          <div className="w-full border-2 border-dashed border-primary/30 rounded-xl p-4">
            <p className="text-xs text-muted-foreground text-center mb-3">Aplicação Monolítica</p>
            <div className="grid grid-cols-3 gap-2">
              <FlowNode label="Auth" variant="default" />
              <FlowNode label="API" variant="default" />
              <FlowNode label="UI" variant="default" />
              <FlowNode label="Pagamento" variant="default" />
              <FlowNode label="Relatórios" variant="default" />
              <FlowNode label="Notificações" variant="default" />
            </div>
          </div>
          <FlowArrow direction="down" />
          <FlowNode label="Banco de Dados Único" variant="muted" />
        </div>
      </DiagramBox>

      <DiagramBox title="Arquitetura de Microserviços">
        <div className="flex flex-col items-center gap-3">
          <FlowNode label="Cliente (Browser)" variant="secondary" />
          <FlowArrow direction="down" />
          <FlowNode label="API Gateway" variant="secondary" />
          <FlowArrow direction="down" />
          <div className="grid grid-cols-3 gap-2 w-full">
            {["Auth Service", "Payment Service", "Notification Service", "User Service", "Report Service", "Email Service"].map(s => (
              <div key={s} className="flex flex-col items-center gap-1">
                <FlowNode label={s} variant="default" />
                <span className="text-[10px] text-muted-foreground">DB próprio</span>
              </div>
            ))}
          </div>
        </div>
      </DiagramBox>
    </div>

    <ComparisonTable
      title="Comparação"
      headers={["Aspecto", "Monólito", "Microserviços"]}
      rows={[
        ["Deploy", "Único", "Independente por serviço"],
        ["Escalabilidade", "Vertical", "Horizontal"],
        ["Complexidade", "Baixa", "Alta"],
        ["Tecnologias", "Única stack", "Polyglot"],
        ["Time ideal", "Pequeno", "Grande / Distribuído"],
      ]}
    />
  </SectionWrapper>
);

export default SystemDesignSection;
