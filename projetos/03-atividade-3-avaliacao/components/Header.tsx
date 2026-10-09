import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative pt-10 pb-8 border-b border-slate-200/90 overflow-hidden">
      {/* Subtle modern ambient background glow */}
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 -left-12 w-64 h-64 bg-indigo-50/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="flex flex-col gap-4">
        {/* Top Tag & Discipline Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-2xs">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Roteiro prático</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 text-xs font-medium">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Atividade Avaliativa
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-tight tracking-tight">
          3ª Avaliação: Personalização de um Site Responsivo
        </h1>

        {/* Identification & Academic Context */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-sm text-slate-600">
          <p className="font-semibold text-slate-900 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
            Professor Ábner Lucas — IFPA Campus Breves
          </p>
          <span className="hidden sm:inline text-slate-300" aria-hidden="true">|</span>
          <p className="text-slate-500 text-xs sm:text-sm">
            Programação Web · Técnico em Informática
          </p>
        </div>

        {/* Presentation description */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
          Transforme o projeto-base em um site com o tema da sua dupla. Personalize, teste e publique o resultado.
        </p>

        {/* Metadata markers with modern styling */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm">
          <span className="px-3 py-1 rounded-lg bg-slate-100/80 border border-slate-200/80 font-medium text-slate-700">
            Em dupla
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-100/80 border border-slate-200/80 font-medium text-slate-700">
            HTML, CSS e JavaScript
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-100/80 border border-slate-200/80 font-medium text-slate-700">
            Responsivo
          </span>
          <span className="px-3 py-1 rounded-lg bg-blue-50/70 border border-blue-200/70 font-semibold text-blue-700">
            Tiiny.host
          </span>
        </div>
      </div>
    </header>
  );
}
