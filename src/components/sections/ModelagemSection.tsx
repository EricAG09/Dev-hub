import SectionWrapper from "@/components/presentation/SectionWrapper";
import ComparisonTable from "@/components/presentation/ComparisonTable";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import { Database } from "lucide-react";

const ModelagemSection = () => (
  <SectionWrapper
    id="modelagem"
    title="Modelagem de Dados"
    subtitle="Estruturar dados é a base de qualquer sistema robusto."
    icon={<Database className="w-7 h-7" />}
  >
    <DiagramBox title="DER — Diagrama Entidade-Relacionamento" className="mb-6">
      <div className="flex flex-wrap items-start justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <FlowNode label="Usuário" variant="primary" />
          <div className="text-xs text-muted-foreground space-y-1 text-left pl-2">
            <div>• id (PK)</div>
            <div>• nome</div>
            <div>• email</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full pt-4">
          <span className="text-sm text-muted-foreground">1:N</span>
          <div className="w-20 h-px bg-border mt-1" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <FlowNode label="Pedido" variant="secondary" />
          <div className="text-xs text-muted-foreground space-y-1 text-left pl-2">
            <div>• id (PK)</div>
            <div>• usuario_id (FK)</div>
            <div>• total</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full pt-4">
          <span className="text-sm text-muted-foreground">N:M</span>
          <div className="w-20 h-px bg-border mt-1" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <FlowNode label="Produto" variant="default" />
          <div className="text-xs text-muted-foreground space-y-1 text-left pl-2">
            <div>• id (PK)</div>
            <div>• nome</div>
            <div>• preco</div>
          </div>
        </div>
      </div>
    </DiagramBox>

    <ComparisonTable
      title="SQL vs NoSQL"
      headers={["Aspecto", "SQL (Relacional)", "NoSQL (Não-Relacional)"]}
      rows={[
        ["Estrutura", "Tabelas com schema fixo", "Documentos, grafos, chave-valor"],
        ["Escalabilidade", "Vertical", "Horizontal"],
        ["Consistência", "ACID", "BASE (eventual)"],
        ["Joins", "Nativo", "Desnormalização"],
        ["Exemplo", "PostgreSQL, MySQL", "MongoDB, Redis, DynamoDB"],
        ["Ideal para", "Dados estruturados e relações complexas", "Dados flexíveis e alta escala"],
      ]}
    />
  </SectionWrapper>
);

export default ModelagemSection;
