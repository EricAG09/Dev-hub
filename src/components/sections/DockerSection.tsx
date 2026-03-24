import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import CodeBlock from "@/components/presentation/CodeBlock";
import { Container, Box, HardDrive, Layers } from "lucide-react";

const DockerSection = () => (
  <SectionWrapper
    id="docker"
    title="Docker & Portainer"
    subtitle="Containerização e orquestração visual de aplicações."
    icon={<Container className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <SectionCard variant="primary" title="Containers" description="Unidades isoladas que empacotam app + dependências. Leves e portáveis." icon={<Box className="w-5 h-5" />} />
      <SectionCard variant="secondary" title="Volumes" description="Persistência de dados fora do container. Sobrevivem a restarts." icon={<HardDrive className="w-5 h-5" />} />
      <SectionCard title="Portainer" description="Interface visual para gerenciar containers, networks e stacks Docker." icon={<Layers className="w-5 h-5" />} />
    </div>

    <DiagramBox title="Arquitetura de Containers" className="mb-6">
      <div className="flex flex-col items-center gap-3">
        <FlowNode label="Docker Host" variant="primary" />
        <FlowArrow direction="down" />
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center gap-2 border border-dashed border-primary/30 rounded-lg p-3">
            <FlowNode label="App (Node.js)" variant="default" />
            <span className="text-[10px] text-muted-foreground">Port 3000</span>
          </div>
          <div className="flex flex-col items-center gap-2 border border-dashed border-secondary/30 rounded-lg p-3">
            <FlowNode label="PostgreSQL" variant="secondary" />
            <span className="text-[10px] text-muted-foreground">Port 5432 + Volume</span>
          </div>
          <div className="flex flex-col items-center gap-2 border border-dashed border-border rounded-lg p-3">
            <FlowNode label="Redis" variant="muted" />
            <span className="text-[10px] text-muted-foreground">Port 6379</span>
          </div>
        </div>
      </div>
    </DiagramBox>

    <CodeBlock
      title="docker-compose.yml"
      language="yaml"
      code={`version: "3.8"
services:
  app:
    build: .
    ports: ["3000:3000"]
    depends_on: [db, cache]
    
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

  cache:
    image: redis:7-alpine

volumes:
  pgdata:`}
    />
  </SectionWrapper>
);

export default DockerSection;
