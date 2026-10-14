import React, { useState } from 'react';
import { Camera, Mail, Phone, Menu, X, ArrowLeft } from 'lucide-react';
import { getImageUrl } from '../imageAssets';

interface NavbarProps {
  onShowWelcome: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onShowWelcome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0d11]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line */}
        <a
          href="#hero"
          className="flex items-center gap-3 text-lg md:text-xl font-serif-luxury tracking-wider text-white font-semibold whitespace-nowrap shrink-0 group"
        >
          <span className="w-8 h-8 rounded-full border border-sky-400/30 bg-white/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
            <img src={getImageUrl('/src/assets/images/Logo.png')} alt="Obra Creations Logo" className="w-full h-full object-contain p-0.5" style={{ backgroundColor: '#FFFFFF' }} />
          </span>
          <span>Obra Creations</span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <button
            onClick={onShowWelcome}
            className="text-stone-400 hover:text-sky-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Welcome Note</span>
          </button>
          <a
            href="#portfolio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Portfolio Grids
          </a>
          <a
            href="#bio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Services & SDE
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
          </a>
        </nav>

        {/* Zone 3: Direct contact action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="tel:+639764585099"
            className="text-xs text-stone-300 hover:text-sky-300 font-mono flex items-center gap-1.5 transition-colors"
            title="Call Studio"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>+639764585099</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12141c] border-b border-white/10 px-6 py-6 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onShowWelcome();
            }}
            className="w-full text-left py-2 text-sky-300 font-medium text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Read Welcome Note</span>
          </button>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            Portfolio Grids
          </a>
          <a
            href="#bio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            About Daniel Obra
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            Services & SDE
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-white text-sm"
          >
            Contact Us
          </a>
          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href="tel:+639764585099"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-sky-400 text-slate-950 font-semibold text-xs uppercase tracking-wider rounded-lg"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: +639764585099</span>
            </a>
            <a
              href="https://www.facebook.com/ObraCreations2019"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 text-xs font-medium rounded-lg"
            >
              <span>Facebook: fb/ObraCreations2019</span>
            </a>
            <a
              href="mailto:obracreations2022@gmail.com"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10 text-xs font-mono rounded-lg"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>obracreations2022@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
