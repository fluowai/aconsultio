import { motion } from 'motion/react';
import { ArrowRight, Play, TrendingUp, Users, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-border-high">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,214,0,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 items-start">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="text-[52px] font-extrabold leading-[1.1] mb-6">
              Estratégia, processos e tecnologia para <span className="text-brand-yellow">escalar</span> sua operação com <span className="text-brand-yellow">previsibilidade.</span>
            </h1>
            <p className="text-text-secondary text-lg leading-[1.6] mb-10 max-w-[90%]">
              A Consultio organiza marketing, vendas, operação e inteligência para empresas crescerem com controle, eficiência e resultados sustentáveis.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-20">
              <button className="btn-primary py-4 px-10 text-[15px]">
                Quero estruturar minha operação
              </button>
              <button className="btn-secondary py-4 px-8 text-base border-brand-yellow/50">
                Conhecer soluções
              </button>
            </div>

            {/* In-Hero Method Cards */}
            <div className="grid grid-cols-2 gap-5">
              <div className="dash-card border-l-[3px] border-l-brand-yellow/80">
                <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-2">MÉTODO CONSULTIO</div>
                <div className="text-sm font-bold text-white">01 — Diagnóstico</div>
                <p className="text-[12px] text-text-muted mt-1 leading-tight">Análise profunda de gargalos e dados operação.</p>
              </div>
              <div className="dash-card">
                <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-2">PRÓXIMA ETAPA</div>
                <div className="text-sm font-bold text-white">02 — Planejamento</div>
                <p className="text-[12px] text-text-muted mt-1 leading-tight">Arquitetura operacional personalizada e ágil.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-5 pt-8"
          >
            {/* Dashboard Card 1: Revenue */}
            <div className="dash-card dash-card-glow self-end w-[280px]">
              <div className="text-[11px] text-text-muted uppercase tracking-widest font-bold mb-2">Receita Prevista</div>
              <div className="text-3xl font-extrabold mb-1">R$ 7.431.942</div>
              <div className="text-[12px] text-success font-bold flex items-center gap-1">
                ↑ +32,8% vs. mês anterior
              </div>
            </div>

            {/* Dashboard Card 2: New Business */}
            <div className="dash-card dash-card-glow w-[320px] ml-10">
              <div className="text-[11px] text-text-muted uppercase tracking-widest font-bold mb-2">Novos Negócios</div>
              <div className="text-3xl font-extrabold mb-1">2.847</div>
              <div className="text-[12px] text-success font-bold flex items-center gap-1">
                ↑ +28,4% vs. mês anterior
              </div>
            </div>

            {/* Dashboard Card 3: Conversion */}
            <div className="dash-card dash-card-glow self-end w-[260px] flex items-center gap-4">
               <div className="flex-1">
                  <div className="text-[11px] text-text-muted uppercase tracking-widest font-bold mb-2">Conversão</div>
                  <div className="text-3xl font-extrabold">32,8%</div>
               </div>
               <div className="w-14 h-14 border-4 border-border-high border-t-brand-yellow rounded-full flex items-center justify-center font-bold text-[10px]">
                 HIGH
               </div>
            </div>

            {/* Dashboard Card 4: Impact */}
            <div className="dash-card bg-card-bg/50 border-dashed">
              <div className="text-[11px] text-text-muted uppercase tracking-widest font-bold mb-3">Impacto Real</div>
              <div className="flex gap-4">
                <div className="flex-1 border-l-2 border-brand-yellow pl-3">
                  <div className="text-lg font-extrabold leading-none">-42% CAC</div>
                  <div className="text-[10px] text-text-muted mt-1">SaaS B2B</div>
                </div>
                <div className="flex-1 border-l-2 border-brand-yellow pl-3">
                  <div className="text-lg font-extrabold leading-none">+187% Opps</div>
                  <div className="text-[10px] text-text-muted mt-1">Indústria</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
