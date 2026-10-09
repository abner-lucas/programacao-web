'use client';

import React, { useState, useEffect } from 'react';
import { Target, Palette, CheckSquare, UploadCloud, CheckCircle2 } from 'lucide-react';

interface NavbarStickyProps {
  checkedCount: number;
  totalCount: number;
}

export default function NavbarSticky({ checkedCount, totalCount }: NavbarStickyProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('desafio');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));

      const sections = ['desafio', 'personalizacao', 'teste-publicacao', 'entrega-avaliacao'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'desafio', label: 'O desafio', icon: Target },
    { id: 'personalizacao', label: 'Personalização', icon: Palette },
    { id: 'teste-publicacao', label: 'Teste e publicação', icon: CheckSquare },
    { id: 'entrega-avaliacao', label: 'Entrega e avaliação', icon: UploadCloud },
  ];

  return (
    <div className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        {/* Brand / Title identifier */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Link de retorno ao Portal da Disciplina */}
          <a
            href="../../index.html"
            className="shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 hover:text-blue-700 hover:border-blue-300 transition-colors"
            title="Voltar ao Portal da Disciplina"
          >
            ← Portal
          </a>
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-800 hover:text-blue-600 transition-colors min-w-0"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-semibold text-xs sm:text-sm tracking-tight truncate max-w-[130px] sm:max-w-none">
              3ª Avaliação · Programação Web
            </span>
          </a>
        </div>

        {/* Quick navigation pill links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Checklist tracker badge */}
        <a
          href="#teste-publicacao"
          className={`flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full border transition-all ${
            checkedCount === totalCount
              ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600'
          }`}
          title="Ver checklist de conferência"
        >
          <CheckCircle2
            className={`w-3.5 h-3.5 ${
              checkedCount === totalCount ? 'text-emerald-600' : 'text-blue-600'
            }`}
          />
          <span>
            Checklist: <strong className="font-semibold">{checkedCount}/{totalCount}</strong>
          </span>
        </a>
      </div>
    </div>
  );
}
