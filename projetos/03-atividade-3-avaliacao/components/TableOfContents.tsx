import React from 'react';
import { Target, Palette, CheckSquare, UploadCloud, ArrowRight } from 'lucide-react';

export default function TableOfContents() {
  const sections = [
    { href: '#desafio', label: 'O desafio', icon: Target, desc: 'Tema e estrutura' },
    { href: '#personalizacao', label: 'Personalização', icon: Palette, desc: 'HTML, CSS e JS' },
    { href: '#teste-publicacao', label: 'Teste e publicação', icon: CheckSquare, desc: 'Checklist e Tiiny.host' },
    { href: '#entrega-avaliacao', label: 'Entrega e avaliação', icon: UploadCloud, desc: 'Critérios e notas' },
  ];

  return (
    <nav
      aria-label="Sumário da atividade"
      className="my-8 p-4 sm:p-5 bg-gradient-to-br from-slate-50 via-white to-slate-50/80 border border-slate-200/90 rounded-2xl shadow-2xs"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Neste roteiro
          </h2>
          <span className="text-[11px] text-slate-400">4 etapas orientadas</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {sections.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group relative p-3 bg-white hover:bg-blue-50/40 border border-slate-200/90 hover:border-blue-300/80 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 group-hover:bg-blue-600 text-blue-600 group-hover:text-white border border-blue-100 group-hover:border-blue-600 flex items-center justify-center transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors truncate">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-slate-400 group-hover:text-slate-500 transition-colors truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
