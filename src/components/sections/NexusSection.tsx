import SectionWrapper from "@/components/presentation/SectionWrapper";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import SectionCard from "@/components/presentation/SectionCard";
import { Globe, Users, Zap, Shield } from "lucide-react";

const NexusSection = () => (
  <SectionWrapper
    id="nexus"
    title="Plataforma Nexus"
    subtitle="Plataforma interna que conecta sistemas, equipes e clientes."
    icon={<Globe className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      <SectionCard variant="primary" title="O que é?" description="Plataforma centralizada para gestão de projetos, clientes e deploys." icon={<Globe className="w-5 h-5" />} />
      <SectionCard variant="secondary" title="Integração" description="Conecta APIs internas e externas em um hub unificado." icon={<Zap className="w-5 h-5" />} />
      <SectionCard title="Multi-tenant" description="Cada cliente tem ambiente isolado com dados segregados." icon={<Users className="w-5 h-5" />} />
      <SectionCard title="Segurança" description="RBAC, autenticação JWT, logs de auditoria, criptografia." icon={<Shield className="w-5 h-5" />} />
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <DiagramBox title="Arquitetura da Plataforma">
        <div className="flex flex-col items-center gap-3">
          <div className="grid grid-cols-2 gap-3 w-full">
            <FlowNode label="Portal do Cliente" variant="primary" />
            <FlowNode label="Dashboard Admin" variant="primary" />
          </div>
          <FlowArrow direction="down" />
          <FlowNode label="API Gateway (Nexus Core)" variant="secondary" />
          <FlowArrow direction="down" />
          <div className="grid grid-cols-3 gap-2 w-full">
            <FlowNode label="Auth" variant="default" />
            <FlowNode label="Billing" variant="default" />
            <FlowNode label="Projects" variant="default" />
          </div>
          <FlowArrow direction="down" />
          <FlowNode label="PostgreSQL + Redis" variant="muted" />
        </div>
      </DiagramBox>

      <DiagramBox title="Fluxo de Dados">
        <div className="flex flex-col gap-3">
          {[
            { step: "1", label: "Cliente acessa o portal", variant: "primary" as const },
            { step: "2", label: "Requisição passa pelo Gateway", variant: "secondary" as const },
            { step: "3", label: "Autenticação e autorização (RBAC)", variant: "default" as const },
            { step: "4", label: "Roteamento para microserviço", variant: "default" as const },
            { step: "5", label: "Processamento e resposta", variant: "secondary" as const },
            { step: "6", label: "Cache + Log de auditoria", variant: "muted" as const },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                {item.step}
              </div>
              <FlowNode label={item.label} variant={item.variant} />
            </div>
          ))}
        </div>
      </DiagramBox>
    </div>
  </SectionWrapper>
);

export default NexusSection;
