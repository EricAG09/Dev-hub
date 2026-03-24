import { Rocket, Code2, GitBranch, Brain, Palette, Layout, Server, Puzzle, Database, Container, Workflow, Bot, Trophy } from "lucide-react";

export interface SectionDef {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  number: number;
}

export const sections: SectionDef[] = [
  { id: "intro", title: "Introdução", icon: Rocket, number: 1 },
  { id: "modelos", title: "Modelos de Software", icon: Code2, number: 2 },
  { id: "git", title: "Git Profissional", icon: GitBranch, number: 3 },
  { id: "prompt", title: "Eng. de Prompt", icon: Brain, number: 4 },
  { id: "uxui", title: "UX/UI & Prototipagem", icon: Palette, number: 5 },
  { id: "designsystem", title: "Design System", icon: Layout, number: 6 },
  { id: "systemdesign", title: "System Design", icon: Server, number: 7 },
  { id: "patterns", title: "Design Patterns", icon: Puzzle, number: 8 },
  { id: "modelagem", title: "Modelagem de Dados", icon: Database, number: 9 },
  { id: "docker", title: "Docker & Portainer", icon: Container, number: 10 },
  { id: "devops", title: "DevOps (CI/CD)", icon: Workflow, number: 11 },
  { id: "agentes", title: "Agentes de IA", icon: Bot, number: 12 },
  { id: "conclusao", title: "Conclusão", icon: Trophy, number: 13 },
];
