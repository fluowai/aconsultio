import { motion } from 'motion/react';
import { TrendingDown, TrendingUp, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const cases = [
  {
    icon: TrendingDown,
    title: 'Redução de 42% no CAC',
    description: 'Empresa do segmento de tecnologia SaaS B2B.',
  },
  {
    icon: TrendingUp,
    title: '+187% em oportunidades comerciais',
    description: 'Empresa do segmento industrial B2B.',
  },
  {
    icon: Zap,
    title: '3,4x de eficiência operacional',
    description: 'Empresa do segmento de serviços financeiros.',
  },
  {
    icon: Target,
    title: 'Processo comercial previsível em 90 dias',
    description: 'Empresa do segmento de serviços B2B.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Results() {
  return (
    <section id="cases" className="py-20 lg:py-32 bg-bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Resultados que geram <span className="text-brand-yellow text-glow">impacto real</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="dash-card dash-card-glow group relative"
            >
              <div className="w-10 h-10 flex items-center justify-center text-brand-yellow mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-extrabold mb-3 text-brand-yellow leading-tight">
                {item.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel indicators (static) */}
        <div className="flex justify-center items-center gap-3">
          <button className="p-1 hover:text-brand-yellow transition-colors"><ChevronLeft /></button>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-yellow w-6' : 'bg-card-border'} transition-all`} />
          ))}
          <button className="p-1 hover:text-brand-yellow transition-colors"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}
