import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import CodeBlock from "@/components/presentation/CodeBlock";
import { Brain } from "lucide-react";

const PromptSection = () => (
  <SectionWrapper
    id="prompt"
    title="Engenharia de Prompt"
    subtitle="Técnicas para extrair o máximo das IAs generativas."
    icon={<Brain className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <SectionCard variant="primary" title="Zero-shot" description="Pedir diretamente sem exemplos. Funciona para tarefas simples e claras." />
      <SectionCard variant="secondary" title="Few-shot" description="Fornecer 2-3 exemplos antes da pergunta. Melhora consistência e formato." />
      <SectionCard title="Chain-of-thought" description="Instruir a IA a pensar passo a passo. Essencial para raciocínio complexo." />
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <CodeBlock
        title="❌ Prompt Ruim"
        language="text"
        code={`Faça uma API de usuários.`}
      />
      <CodeBlock
        title="✅ Prompt Otimizado"
        language="text"
        code={`Crie uma API REST em Node.js com Express para 
gerenciamento de usuários.

Requisitos:
- CRUD completo (GET, POST, PUT, DELETE)
- Validação com Zod
- Autenticação JWT
- Respostas padronizadas com status codes
- TypeScript com tipagem forte

Pense passo a passo antes de implementar.
Primeiro defina as interfaces, depois as rotas.`}
      />
    </div>
  </SectionWrapper>
);

export default PromptSection;
