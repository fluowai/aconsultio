import { motion } from 'motion/react';
import { Search, ListChecks, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico',
    description: 'Analisamos sua operação, ferramentas, processos, dados e gargalos.',
  },
  {
    number: '02',
    icon: ListChecks,
    title: 'Planejamento',
    description: 'Definimos estratégia, prioridades, plano e arquitetura operacional personalizada.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementação',
    description: 'Executamos o plano com agilidade, tecnologia e acompanhamento próximo.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Escala',
    description: 'Otimizamos continuamente para escalar resultados com eficiência e previsibilidade.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Method() {
  return (
    <section id="metodo" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Método <span className="text-brand-yellow">Consultio</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Horizontal Line Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-card-border -translate-y-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-4 gap-12 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-bg-black border-2 border-brand-yellow flex items-center justify-center mb-8 relative shadow-[0_0_20px_rgba(255,214,0,0.2)]">
                  <span className="text-brand-yellow font-bold text-xl">{step.number}</span>
                  <div className="absolute inset-0 rounded-full border border-brand-yellow blur-sm animate-pulse" />
                </div>

                <div className="bg-card-bg border border-card-border p-8 rounded-2xl w-full hover:border-brand-yellow/50 transition-all duration-300 shadow-xl group">
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
