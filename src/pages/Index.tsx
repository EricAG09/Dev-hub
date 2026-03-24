import PresentationLayout from "@/components/presentation/PresentationLayout";
import IntroSection from "@/components/sections/IntroSection";
import ModelosSection from "@/components/sections/ModelosSection";
import GitSection from "@/components/sections/GitSection";
import PromptSection from "@/components/sections/PromptSection";
import UxUiSection from "@/components/sections/UxUiSection";
import DesignSystemSection from "@/components/sections/DesignSystemSection";
import SystemDesignSection from "@/components/sections/SystemDesignSection";
import PatternsSection from "@/components/sections/PatternsSection";
import ModelagemSection from "@/components/sections/ModelagemSection";
import DockerSection from "@/components/sections/DockerSection";

import DevOpsSection from "@/components/sections/DevOpsSection";
import AgentesSection from "@/components/sections/AgentesSection";
import ConclusaoSection from "@/components/sections/ConclusaoSection";

const Index = () => (
  <PresentationLayout>
    <IntroSection />
    <ModelosSection />
    <GitSection />
    <PromptSection />
    <UxUiSection />
    <DesignSystemSection />
    <SystemDesignSection />
    <PatternsSection />
    <ModelagemSection />
    <DockerSection />
    <NexusSection />
    <DevOpsSection />
    <AgentesSection />
    <ConclusaoSection />
  </PresentationLayout>
);

export default Index;
