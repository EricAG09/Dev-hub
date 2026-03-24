import SectionWrapper from "@/components/presentation/SectionWrapper";
import SectionCard from "@/components/presentation/SectionCard";
import CodeBlock from "@/components/presentation/CodeBlock";
import { Puzzle } from "lucide-react";

const PatternsSection = () => (
  <SectionWrapper
    id="patterns"
    title="Design Patterns"
    subtitle="Soluções reutilizáveis para problemas recorrentes em desenvolvimento."
    icon={<Puzzle className="w-7 h-7" />}
  >
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      <SectionCard variant="primary" title="Singleton" description="Garante uma única instância de uma classe em toda a aplicação." />
      <SectionCard variant="secondary" title="Factory" description="Cria objetos sem expor a lógica de instanciação ao cliente." />
      <SectionCard title="Observer" description="Notifica dependentes automaticamente quando o estado muda." />
      <SectionCard title="Strategy" description="Define uma família de algoritmos intercambiáveis em runtime." />
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <CodeBlock
        title="Singleton — TypeScript"
        language="typescript"
        code={`class Database {
  private static instance: Database;
  
  private constructor() {
    // conexão privada
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// Sempre a mesma instância
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true`}
      />
      <CodeBlock
        title="Strategy — TypeScript"
        language="typescript"
        code={`interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCard implements PaymentStrategy {
  pay(amount: number) {
    console.log(\`Pago R$\${amount} via cartão\`);
  }
}

class Pix implements PaymentStrategy {
  pay(amount: number) {
    console.log(\`Pago R$\${amount} via Pix\`);
  }
}

class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}
  
  execute(amount: number) {
    this.strategy.pay(amount);
  }
}

// Troca de estratégia em runtime
const payment = new PaymentContext(new Pix());
payment.execute(99.90);`}
      />
    </div>
  </SectionWrapper>
);

export default PatternsSection;
