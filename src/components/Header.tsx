import { motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Cases', href: '#cases' },
    { name: 'Método', href: '#metodo' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-black/80 backdrop-blur-md border-b border-border-high">
      <div className="container-custom h-20 flex items-center justify-between px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="logo-hexagon" />
          <div>
            <div className="text-xl font-extrabold text-brand-yellow leading-none tracking-tight">CONSULTIO</div>
            <div className="text-[10px] text-text-muted mt-0.5 uppercase tracking-wider font-semibold">Consultoria, tecnologia e crescimento</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6 list-none p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    link.active ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'text-text-primary hover:text-brand-yellow'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="btn-primary">
            Falar com um especialista
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-bg-black border-b border-card-border p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-text-primary hover:text-brand-yellow"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary w-full py-3 mt-4">
            Falar com um especialista
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </header>
  );
}
