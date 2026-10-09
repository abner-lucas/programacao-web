'use client';

import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pb-16">
      {/* Mensagem em uma faixa curta com fundo azul suave */}
      <div className="relative overflow-hidden p-5 sm:p-6 bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-blue-50/90 border border-blue-200/90 rounded-2xl text-center text-blue-950 font-semibold text-sm sm:text-base leading-relaxed mb-8 shadow-2xs">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Dê sua identidade ao projeto. Teste com atenção e compartilhe o resultado. Boa atividade!
          </span>
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0 hidden sm:inline" />
        </div>
      </div>

      {/* Linha de rodapé */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 pt-5 border-t border-slate-200/90">
        <p className="text-center sm:text-left font-medium">
          Professor Ábner Lucas · IFPA Campus Breves · Programação Web
        </p>

        {/* Botão discreto: Voltar ao topo */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Voltar ao início da página"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
