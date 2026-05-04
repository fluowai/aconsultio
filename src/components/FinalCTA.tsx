import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-bg-deep border border-brand-yellow/30 rounded-[40px] p-8 md:p-16 lg:p-24 overflow-hidden shadow-[0_0_50px_rgba(255,214,0,0.1)] group"
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 blur-[120px] -z-1" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-yellow/10 blur-[100px] -z-1 rounded-full" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Sua operação pode <span className="text-brand-yellow text-glow">crescer</span> com muito mais clareza, controle e <span className="text-brand-yellow text-glow">resultado.</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Agende uma reunião de diagnóstico com um especialista e descubra como podemos acelerar seu negócio.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary py-5 px-10 text-lg md:text-xl font-bold shadow-2xl group-hover:shadow-brand-yellow/20"
            >
              Agendar diagnóstico estratégico
              <ArrowRight className="w-6 h-6 ml-2" />
            </motion.button>
          </div>
          
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 Z" fill="url(#grad)" fillOpacity="0.1" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FFD600', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
