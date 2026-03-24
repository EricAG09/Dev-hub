import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import ComparisonTable from "@/components/presentation/ComparisonTable";
import BarChart from "@/components/presentation/BarChart";
import { Code2, Cloud, Server, Layers } from "lucide-react";

const ModelosSection = () => (
  <SectionWrapper
    id="modelos"
    title="Modelos de Software"
    subtitle="Entenda os diferentes modelos de entrega e responsabilidade no mundo cloud."
    icon={<Code2 className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      <SectionCard variant="primary" title="SaaS" description="Software como Serviço. O provedor gerencia tudo — o usuário apenas utiliza." icon={<Cloud className="w-5 h-5" />} />
      <SectionCard variant="secondary" title="PaaS" description="Plataforma como Serviço. O provedor gerencia infra e runtime, você gerencia o app." icon={<Layers className="w-5 h-5" />} />
      <SectionCard title="IaaS" description="Infraestrutura como Serviço. Você gerencia tudo exceto hardware e rede física." icon={<Server className="w-5 h-5" />} />
      <SectionCard title="Micro-SaaS" description="SaaS de nicho, operado por equipes pequenas, focado em resolver 1 problema." icon={<Code2 className="w-5 h-5" />} />
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <ComparisonTable
        title="Comparação entre Modelos"
        headers={["Aspecto", "SaaS", "PaaS", "IaaS"]}
        rows={[
          ["Gerenciamento", "Provedor", "Parcial", "Usuário"],
          ["Flexibilidade", "Baixa", "Média", "Alta"],
          ["Complexidade", "Baixa", "Média", "Alta"],
          ["Custo inicial", "Baixo", "Médio", "Alto"],
          ["Exemplo", "Gmail, Slack", "Heroku, Vercel", "AWS EC2, GCP"],
        ]}
      />
      <BarChart
        title="Responsabilidade do Usuário"
        data={[
          { label: "SaaS", value: 10, color: "primary" },
          { label: "PaaS", value: 40, color: "primary" },
          { label: "IaaS", value: 75, color: "secondary" },
          { label: "On-Premise", value: 100, color: "secondary" },
        ]}
      />
    </div>
  </SectionWrapper>
);

export default ModelosSection;
