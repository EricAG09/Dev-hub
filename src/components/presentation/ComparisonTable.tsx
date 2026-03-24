import { motion } from "framer-motion";

interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
  title?: string;
}

const ComparisonTable = ({ headers, rows, title }: ComparisonTableProps) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card overflow-hidden"
  >
    {title && <div className="px-5 py-3 border-b border-border/50"><h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{title}</h4></div>}
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-3 text-left font-semibold text-foreground">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/30 last:border-0 hover:bg-accent/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-5 py-3 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default ComparisonTable;
