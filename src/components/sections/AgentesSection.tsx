import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import CodeBlock from "@/components/presentation/CodeBlock";
import { Bot, Cpu, Zap, RefreshCw } from "lucide-react";

const AgentesSection = () => (
  <SectionWrapper
    id="agentes"
    title="Agentes de IA"
    subtitle="Sistemas autônomos que planejam, executam e aprendem."
    icon={<Bot className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <SectionCard variant="primary" title="AutoGPT" description="Agente autônomo que define goals, planeja tarefas e executa com mínima intervenção." icon={<Cpu className="w-5 h-5" />} />
      <SectionCard variant="secondary" title="CrewAI" description="Framework para criar equipes de agentes especializados que colaboram entre si." icon={<Zap className="w-5 h-5" />} />
      <SectionCard title="LangChain Agents" description="Agentes que combinam LLMs com tools (APIs, DBs, busca) para tarefas complexas." icon={<RefreshCw className="w-5 h-5" />} />
    </div>

    <DiagramBox title="Fluxo de Execução de um Agente" className="mb-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <FlowNode label="Input do Usuário" variant="primary" />
        <FlowArrow />
        <FlowNode label="Planejamento" variant="default" />
        <FlowArrow />
        <FlowNode label="Seleção de Tool" variant="default" />
        <FlowArrow />
        <FlowNode label="Execução" variant="secondary" />
        <FlowArrow />
        <FlowNode label="Avaliação" variant="default" />
        <FlowArrow />
        <FlowNode label="Output / Loop" variant="primary" />
      </div>
    </DiagramBox>

    <CodeBlock
      title="Exemplo — Automação com Agente"
      language="python"
      code={`from crewai import Agent, Task, Crew

researcher = Agent(
    role="Pesquisador",
    goal="Encontrar dados sobre tendências tech 2025",
    backstory="Especialista em análise de mercado",
    tools=[search_tool, scraper_tool]
)

writer = Agent(
    role="Redator",
    goal="Criar relatório executivo com os dados",
    backstory="Escritor técnico experiente"
)

task1 = Task(description="Pesquisar tendências", agent=researcher)
task2 = Task(description="Escrever relatório", agent=writer)

crew = Crew(agents=[researcher, writer], tasks=[task1, task2])
result = crew.kickoff()
print(result)`}
    />
  </SectionWrapper>
);

export default AgentesSection;
