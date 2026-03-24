import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  variant?: "default" | "primary" | "secondary";
  children?: ReactNode;
  className?: string;
}

const SectionCard = ({ title, description, icon, variant = "default", children, className = "" }: SectionCardProps) => {
  const accents = {
    default: "",
    primary: "glow-primary border-primary/20",
    secondary: "glow-secondary border-secondary/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`glass-card p-6 transition-shadow duration-300 ${accents[variant]} ${className}`}
    >
      {icon && <div className="mb-3 text-primary">{icon}</div>}
      <h3 className="text-lg font-semibold mb-1 text-foreground">{title}</h3>
      {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
      {children}
    </motion.div>
  );
};

export default SectionCard;
