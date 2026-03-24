import { useState, useEffect, useCallback } from "react";
import { sections } from "@/data/sections";
import { ChevronLeft, ChevronRight, PanelLeftClose, PanelLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PresentationLayoutProps {
  children: React.ReactNode;
}

const PresentationLayout = ({ children }: PresentationLayoutProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const scrollToSection = useCallback((index: number) => {
    const section = document.getElementById(sections[index].id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        scrollToSection(Math.min(activeSection + 1, sections.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSection(Math.max(activeSection - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeSection, scrollToSection]);

  const progress = ((activeSection + 1) / sections.length) * 100;

  return (
    <div className="flex min-h-screen">
      {/* Progress bar top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-[260px] bg-sidebar border-r border-sidebar-border z-40 flex flex-col overflow-hidden"
          >
            <div className="p-5 pt-6 border-b border-sidebar-border">
              <h1 className="text-lg font-bold text-sidebar-accent-foreground tracking-tight">Dev Workshop</h1>
              <p className="text-xs text-sidebar-foreground mt-0.5">Conceitos Avançados</p>
            </div>
            <nav className="flex-1 overflow-y-auto scrollbar-thin p-3 space-y-0.5">
              {sections.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === activeSection;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      scrollToSection(i);
                      if (window.innerWidth < 1024) setSidebarOpen(false);
                    }}
                    className={`nav-item w-full text-left ${isActive ? "nav-item-active" : "nav-item-inactive"}`}
                  >
                    <div className={`flex items-center justify-center w-6 h-6 rounded text-xs font-bold ${isActive ? "bg-primary text-primary-foreground" : "bg-sidebar-accent text-sidebar-foreground"}`}>
                      {s.number}
                    </div>
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate text-xs">{s.title}</span>
                  </button>
                );
              })}
            </nav>
            <div className="p-4 border-t border-sidebar-border">
              <div className="text-xs text-sidebar-foreground">
                {activeSection + 1} / {sections.length}
              </div>
              <div className="mt-1.5 h-1 bg-sidebar-accent rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-[260px]" : ""}`}>
        {children}

        {/* Navigation buttons */}
        <div className="fixed bottom-6 right-6 z-40 flex gap-2">
          <button
            onClick={() => scrollToSection(Math.max(activeSection - 1, 0))}
            disabled={activeSection === 0}
            className="p-3 rounded-full glass-card hover:glow-primary transition-all disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection(Math.min(activeSection + 1, sections.length - 1))}
            disabled={activeSection === sections.length - 1}
            className="p-3 rounded-full glass-card hover:glow-primary transition-all disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default PresentationLayout;
