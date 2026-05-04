import { motion } from 'motion/react';
import { Target, Users, LayoutDashboard, Cpu, PieChart, TrendingUp, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'Estratégia Comercial',
    description: 'Estruturamos processos comerciais sob medida para acelerar vendas e aumentar previsibilidade.',
  },
  {
    icon: Users,
    title: 'Tráfego e Geração de Demanda',
    description: 'Atraímos e qualificamos leads com campanhas de alta performance e funis inteligentes.',
  },
  {
    icon: LayoutDashboard,
    title: 'CRM e Processos',
    description: 'Organizamos seu funil comercial e processos para ter controle real da operação.',
  },
  {
    icon: Cpu,
    title: 'Automação com IA',
    description: 'Implementamos automações e agentes de IA para ganhar escala, velocidade e eficiência.',
  },
  {
    icon: PieChart,
    title: 'Dashboards e BI',
    description: 'Transformamos dados em painéis claros para acompanhar, prever e tomar decisões melhores.',
  },
  {
    icon: TrendingUp,
    title: 'Consultoria de Crescimento',
    description: 'Atuamos ao lado da sua equipe para destravar gargalos e acelerar o crescimento sustentável.',
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

export default function Solutions() {
  return (
    <section id="solucoes" className="section-padding py-20 lg:py-32">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Nossas <span className="text-brand-yellow">Soluções</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            Soluções completas para organizar, automatizar e escalar a operação da sua empresa com <span className="text-brand-yellow">método, tecnologia e dados.</span>
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="dash-card group hover:border-brand-yellow/50 transition-all cursor-default"
            >
              <div className="w-12 h-12 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl flex items-center justify-center mb-6 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                <solution.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold mb-4">{solution.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6 text-sm">
                {solution.description}
              </p>
              <button className="flex items-center gap-2 text-brand-yellow font-bold text-[12px] uppercase tracking-wider hover:gap-3 transition-all">
                Saiba mais <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Solutions Rail */}
      <div className="mt-24 bg-bg-deep border-y border-border-high py-5">
        <div className="container-custom flex flex-wrap justify-between gap-8 items-center overflow-hidden whitespace-nowrap">
          {[
            { icon: '◈', title: 'Estratégia Comercial' },
            { icon: '◿', title: 'Tráfego e Demanda' },
            { icon: '▤', title: 'CRM e Processos' },
            { icon: '✧', title: 'Automação com IA' },
            { icon: '📊', title: 'Dashboards e BI' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-brand-yellow font-bold text-lg">{item.icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
