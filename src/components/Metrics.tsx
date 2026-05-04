import { motion } from 'motion/react';
import { Building2, Landmark, Layers, Star } from 'lucide-react';

const metrics = [
  {
    icon: Building2,
    value: '+150',
    label: 'empresas atendidas',
  },
  {
    icon: Landmark,
    value: '+R$ 35M',
    label: 'em receita impactada',
  },
  {
    icon: Layers,
    value: '+25',
    label: 'segmentos atendidos',
  },
  {
    icon: Star,
    value: '98%',
    label: 'satisfação dos clientes',
  },
];

export default function Metrics() {
  return (
    <section className="bg-border-high">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px]">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-bg-black py-10 px-8 text-center flex flex-col items-center justify-center group hover:bg-card-bg transition-colors"
          >
            <p className="text-4xl md:text-5xl font-extrabold text-brand-yellow mb-2 tabular-nums">
              {metric.value}
            </p>
            <p className="text-[11px] md:text-sm text-text-muted font-bold uppercase tracking-widest leading-none">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
