import { Linkedin, Instagram, Youtube, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-black border-t border-card-border pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center rounded-lg rotate-45">
                <span className="text-black font-bold text-xl -rotate-45">C</span>
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-brand-yellow leading-none">CONSULTIO</h2>
                <p className="text-[8px] text-text-muted uppercase tracking-wider font-medium">Consultoria, tecnologia e crescimento</p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Aceleramos negócios com estratégia, tecnologia e execução para gerar crescimento previsível e sustentável.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-bold mb-8 relative inline-block">
              Navegação
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-yellow" />
            </h3>
            <ul className="space-y-4">
              {['Home', 'Soluções', 'Cases', 'Método', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-text-muted hover:text-brand-yellow flex items-center justify-between group text-sm transition-colors">
                    {item}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-yellow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-white font-bold mb-8 relative inline-block">
              Soluções
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-yellow" />
            </h3>
            <ul className="space-y-4">
              {[
                'Estratégia Comercial',
                'Tráfego e Geração de Demanda',
                'CRM e Processos',
                'Automação com IA',
                'Dashboards e BI',
                'Consultoria de Crescimento'
              ].map((item) => (
                <li key={item}>
                  <a href="#solucoes" className="text-text-muted hover:text-brand-yellow flex items-center justify-between group text-sm transition-colors">
                    {item}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-yellow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold mb-8 relative inline-block">
              Contato
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-yellow" />
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-text-muted group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-card-bg border border-card-border flex items-center justify-center group-hover:border-brand-yellow/50 transition-colors">
                  <Phone className="w-5 h-5 text-brand-yellow" />
                </div>
                <span className="text-sm group-hover:text-white transition-colors">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4 text-text-muted group cursor-pointer text-sm">
                <div className="w-10 h-10 rounded-xl bg-card-bg border border-card-border flex items-center justify-center group-hover:border-brand-yellow/50 transition-colors">
                  <Mail className="w-5 h-5 text-brand-yellow" />
                </div>
                <span className="group-hover:text-white transition-colors">contato@consultio.com.br</span>
              </li>
              <li className="flex items-center gap-4 text-text-muted group cursor-pointer text-sm">
                <div className="w-10 h-10 rounded-xl bg-card-bg border border-card-border flex items-center justify-center group-hover:border-brand-yellow/50 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <span className="group-hover:text-white transition-colors">São Paulo - SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Final Line */}
        <div className="pt-10 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-text-muted font-medium">
          <p>© {currentYear} CONSULTIO. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-yellow transition-colors">Política de Privacidade</a>
            <span className="text-card-border opacity-50">|</span>
            <a href="#" className="hover:text-brand-yellow transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
