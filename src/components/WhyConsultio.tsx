import { motion } from 'motion/react';
import { Eye, TrendingUp, Settings, Database } from 'lucide-react';

const reasons = [
  {
    icon: Eye,
    title: 'Visão 360 da operação',
    description: 'Integramos estratégia, processos, tecnologia e dados para uma gestão completa e clara.',
  },
  {
    icon: TrendingUp,
    title: 'Foco em crescimento previsível',
    description: 'Criamos sistemas que geram mais controle, previsibilidade e eficiência.',
  },
  {
    icon: Settings,
    title: 'Execução com método',
    description: 'Não entregamos apenas ideias. Executamos, acompanhamos e ajustamos a operação.',
  },
  {
    icon: Database,
    title: 'Dados para decisão',
    description: 'Transformamos dados em insights para reduzir riscos e aumentar resultados.',
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

export default function WhyConsultio() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-bg-deep border-y border-card-border">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Por que a <span className="text-brand-yellow">Consultio?</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="dash-card group relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 blur-3xl group-hover:bg-brand-yellow/10 transition-colors" />
              
              <div className="w-10 h-10 rounded-full border border-brand-yellow/30 bg-bg-black flex items-center justify-center mb-6 text-brand-yellow">
                <reason.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold mb-3">{reason.title}</h3>
              <p className="text-text-muted leading-relaxed text-xs">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
