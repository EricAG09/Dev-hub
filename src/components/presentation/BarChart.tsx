import { motion } from "framer-motion";

interface BarChartProps {
  data: { label: string; value: number; color?: "primary" | "secondary" }[];
  title?: string;
  maxValue?: number;
}

const BarChart = ({ data, title, maxValue }: BarChartProps) => {
  const max = maxValue || Math.max(...data.map(d => d.value));
  return (
    <div className="glass-card p-6">
      {title && <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">{title}</h4>}
      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium text-foreground">{item.label}</span>
              <span className="text-muted-foreground">{item.value}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`h-full rounded-full ${item.color === "secondary" ? "bg-secondary" : "bg-primary"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
