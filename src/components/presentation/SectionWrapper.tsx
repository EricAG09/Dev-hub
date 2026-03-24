import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, subtitle, icon, children }: SectionWrapperProps) => (
  <section id={id} className="min-h-screen flex flex-col justify-center py-16 px-6 md:px-12 lg:px-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto w-full"
    >
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          {icon && <div className="text-primary">{icon}</div>}
          <h2 className="section-title">{title}</h2>
        </div>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      <div>{children}</div>
    </motion.div>
  </section>
);

export default SectionWrapper;
