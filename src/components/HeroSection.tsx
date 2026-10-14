import React from 'react';
import { ArrowDown, Mail, Sparkles, Camera, Film, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-white/10">
      {/* Background imagery with measured contrast scrim */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="/src/assets/images/Logo.png"
          alt="Obra Creations Logo"
          className="w-full h-full max-h-[75vh] object-contain object-center filter brightness-50 contrast-105 opacity-35 select-none"
          style={{ backgroundColor: '#FFFFFF' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/50 to-[#0c0d10]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Editorial Subtitle / Studio Credential */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 rounded-full backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-sky-300" />
          <span className="text-xs uppercase tracking-[0.2em] text-stone-300 font-medium">
            Timeless Photography & Cinematic Video
          </span>
          <span className="text-stone-500">·</span>
          <span className="text-xs text-sky-300 font-medium">Est. 2019</span>
        </div>

        {/* Primary Hero Title with Exact User Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal text-white tracking-tight leading-[1.08] mb-6 text-balance">
          Obra Creations <br />
          <span className="italic font-light text-stone-300">by Daniel Obra</span>
        </h1>

        {/* Narrative lead */}
        <p className="max-w-2xl mx-auto text-stone-300 font-sans-clean text-base sm:text-lg leading-relaxed mb-10 font-light text-balance">
          Framing the authentic emotion, quiet intimacy, and grand celebrations of your life's greatest milestones with artistic precision and cinematic flair.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-stone-950 hover:bg-stone-100 font-medium text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Explore Portfolio Grids</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="mailto:obracreations2022@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/30 font-medium text-sm rounded-xl transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Stats & Capabilities Strip */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Experience</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Since 2019</span>
            <p className="text-[11px] text-stone-400 mt-1">Over 7 years behind the lens</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Weddings & Prenup</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Countless Stories</span>
            <p className="text-[11px] text-stone-400 mt-1">Preserved for generations</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Cinematics</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Same-Day Edit</span>
            <p className="text-[11px] text-stone-400 mt-1">Relive what happened on your special day</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-wider text-stone-400 block mb-1">Aerial Tech</span>
            <span className="text-2xl font-serif-luxury text-white font-semibold">Excellent Aerials</span>
            <p className="text-[11px] text-stone-400 mt-1">Epic landscape establishing shots</p>
          </div>
        </div>
      </div>
    </section>
  );
};
