import SectionWrapper from "@/components/presentation/SectionWrapper";
import CodeBlock from "@/components/presentation/CodeBlock";
import DiagramBox, { FlowNode, FlowArrow } from "@/components/presentation/DiagramBox";
import { GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const GitSection = () => (
  <SectionWrapper
    id="git"
    title="Git Profissional"
    subtitle="Domine o fluxo de trabalho Git usado por equipes de alto desempenho."
    icon={<GitBranch className="w-7 h-7" />}
  >
    <DiagramBox title="GitFlow — Fluxo de Branches" className="mb-6">
      <div className="flex flex-col gap-4">
        {[
          { label: "main", color: "primary" as const, desc: "Produção estável" },
          { label: "develop", color: "secondary" as const, desc: "Integração contínua" },
          { label: "feature/*", color: "default" as const, desc: "Novas funcionalidades" },
          { label: "release/*", color: "default" as const, desc: "Preparação para deploy" },
          { label: "hotfix/*", color: "muted" as const, desc: "Correções urgentes em produção" },
        ].map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            <FlowNode label={b.label} variant={b.color} />
            <span className="text-sm text-muted-foreground">{b.desc}</span>
          </motion.div>
        ))}
      </div>
    </DiagramBox>

    <div className="grid lg:grid-cols-2 gap-6">
      <CodeBlock
        title="Conventional Commits"
        language="git"
        code={`feat(auth): add login with Google OAuth
fix(api): handle null response from payment gateway
docs(readme): update installation instructions
refactor(utils): extract date formatting to helper
chore(deps): bump axios to 1.6.0`}
      />
      <CodeBlock
        title="Resolução de Conflitos"
        language="bash"
        code={`# 1. Atualizar branch local
git fetch origin

# 2. Fazer rebase da branch
git rebase origin/develop

# 3. Resolver conflitos manualmente
# Editar arquivos marcados com <<<<<<<

# 4. Continuar rebase
git add .
git rebase --continue

# 5. Push forçado (seguro)
git push --force-with-lease`}
      />
    </div>
  </SectionWrapper>
);

export default GitSection;
