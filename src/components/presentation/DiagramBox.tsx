import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DiagramBoxProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const DiagramBox = ({ children, title, className = "" }: DiagramBoxProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`glass-card p-6 ${className}`}
  >
    {title && <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">{title}</h4>}
    {children}
  </motion.div>
);

export const FlowNode = ({ label, variant = "default", icon }: { label: string; variant?: "primary" | "secondary" | "default" | "muted"; icon?: ReactNode }) => {
  const variants = {
    primary: "bg-primary/20 border-primary/40 text-primary",
    secondary: "bg-secondary/20 border-secondary/40 text-secondary",
    default: "bg-card border-border text-foreground",
    muted: "bg-muted/50 border-border text-muted-foreground",
  };
  return (
    <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium ${variants[variant]}`}>
      {icon}
      {label}
    </div>
  );
};

export const FlowArrow = ({ direction = "right" }: { direction?: "right" | "down" }) => (
  <div className={`flex items-center justify-center ${direction === "down" ? "py-1" : "px-1"}`}>
    <span className="text-muted-foreground text-lg">{direction === "down" ? "↓" : "→"}</span>
  </div>
);

export default DiagramBox;
