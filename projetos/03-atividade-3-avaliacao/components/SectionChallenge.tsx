'use client';

import React, { useState } from 'react';
import {
  Monitor,
  Smartphone,
  Utensils,
  Gamepad2,
  GraduationCap,
  Sparkles,
  Layers,
  ChevronRight,
  Eye,
} from 'lucide-react';

export default function SectionChallenge() {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedTheme, setSelectedTheme] = useState<number>(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const themes = [
    {
      title: 'Lanchonete',
      description: 'Apresente três produtos, com imagens, preços e ingredientes.',
      icon: Utensils,
      color: 'blue',
      examples: ['X-Burguer Artesanal', 'Batata Rústica', 'Suco Natural da Fruta'],
    },
    {
      title: 'Galeria de jogos',
      description: 'Apresente três jogos, com imagens, categorias e detalhes.',
      icon: Gamepad2,
      color: 'indigo',
      examples: ['Aventura Espacial', 'RPG de Estratégia', 'Corrida Radical'],
    },
    {
      title: 'Cursos e oficinas',
      description: 'Apresente três opções, com imagens, duração e informações.',
      icon: GraduationCap,
      color: 'sky',
      examples: ['Desenvolvimento Web', 'Design de Interfaces', 'Lógica de Programação'],
    },
  ];

  const toggleCardDetail = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  return (
    <section id="desafio" className="py-10 scroll-mt-16 border-b border-slate-200/90">
      {/* Section Title */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          🎯 O desafio
        </h2>
      </div>

      {/* Caixa de destaque com estilo moderno e fluido */}
      <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-blue-50/50 to-indigo-50/40 border border-blue-200/90 text-blue-950 font-medium text-base sm:text-lg mb-6 leading-relaxed shadow-2xs">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
          <p>
            Criar, em dupla, uma nova versão do projeto-base, demonstrando os conhecimentos praticados em aula.
          </p>
        </div>
      </div>

      {/* Texto de orientação */}
      <p className="text-slate-700 text-base leading-relaxed mb-6">
        Escolham um dos temas e mantenham a estrutura principal da página: cabeçalho, menus, destaque inicial, três cartões e rodapé.
      </p>

      {/* Três cartões pequenos de temas com interação de clique e seleção */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {themes.map((theme, index) => {
          const Icon = theme.icon;
          const isSelected = selectedTheme === index;
          return (
            <div
              key={theme.title}
              onClick={() => setSelectedTheme(index)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-50/50 border-blue-400 shadow-sm ring-1 ring-blue-300 -translate-y-0.5'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full">
                      Tema selecionado
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5 flex items-center justify-between">
                  <span>{theme.title}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {theme.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                <span>Clique para simular este tema</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota */}
      <p className="text-sm text-slate-500 italic mb-8 border-l-2 border-blue-400 pl-3">
        O projeto-base é o ponto de partida. A versão entregue deverá apresentar a identidade e o conteúdo escolhidos pela dupla.
      </p>

      {/* PRÉVIA COMPACTA */}
      <div className="mt-8 bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">
                Uma estrutura, diferentes temas
              </h3>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200/80 font-medium text-slate-700">
                {themes[selectedTheme].title}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Esboço da organização
            </p>
          </div>

          {/* Botões de alternância Computador / Celular */}
          <div className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setDeviceView('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                deviceView === 'desktop'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Computador</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceView('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                deviceView === 'mobile'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Celular</span>
            </button>
          </div>
        </div>

        {/* Legenda */}
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          No computador, os cartões ficam lado a lado. Em telas menores, o menu muda de posição e os cartões se reorganizam.
        </p>

        {/* Moldura de navegador interativa */}
        <div className="border border-slate-300/90 rounded-xl bg-white overflow-hidden shadow-xs transition-all">
          {/* Barra de título do navegador */}
          <div className="bg-slate-100/90 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
            </div>

            <div className="flex-1 max-w-sm mx-auto text-center">
              <span className="text-[11px] font-mono text-slate-600 bg-white border border-slate-200/80 rounded-md px-3 py-0.5 inline-block w-full truncate shadow-2xs">
                https://meu-site.tiiny.site · {deviceView === 'desktop' ? '1024px (Computador)' : '375px (Celular)'}
              </span>
            </div>

            <span className="text-[10px] text-slate-500 font-medium">
              Esboço da organização
            </span>
          </div>

          {/* Área de visualização (altura aproximada de 280px) com rolagem interna */}
          <div className="max-h-[280px] h-[280px] overflow-y-auto p-3.5 sm:p-4 bg-slate-100/60 text-slate-700 transition-all select-none">
            {deviceView === 'desktop' ? (
              /* VISTA COMPUTADOR: Cabeçalho, menu lateral, destaque, 3 cartões lado a lado, rodapé */
              <div className="flex flex-col gap-2.5 max-w-2xl mx-auto text-xs animate-in fade-in duration-200">
                {/* Cabeçalho */}
                <div className="bg-white border border-dashed border-slate-300 rounded-lg p-2.5 text-center font-bold text-slate-800 shadow-2xs flex items-center justify-between px-4">
                  <span className="font-semibold text-blue-600">Nome do site</span>
                  <span className="text-[10px] text-slate-400 font-mono">Cabeçalho</span>
                </div>

                {/* Conteúdo com Menu lateral e Área Principal */}
                <div className="flex gap-2.5 items-stretch min-h-[145px]">
                  {/* Menu lateral */}
                  <div className="w-28 shrink-0 bg-white border border-dashed border-slate-300 rounded-lg p-2.5 flex flex-col justify-center gap-1.5 text-[11px] shadow-2xs">
                    <div className="text-slate-400 font-mono text-[9px] uppercase tracking-wider mb-0.5">
                      Menu lateral
                    </div>
                    <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                      Início
                    </span>
                    <span className="text-slate-600 px-2 py-0.5 hover:text-slate-900">
                      Galeria
                    </span>
                    <span className="text-slate-600 px-2 py-0.5 hover:text-slate-900">
                      Contato
                    </span>
                  </div>

                  {/* Área direita: Apresentação + 3 cartões lado a lado */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="bg-blue-50/80 border border-dashed border-blue-300/90 rounded-lg p-2 text-center text-blue-900 font-semibold shadow-2xs">
                      Apresentação
                    </div>

                    <div className="grid grid-cols-3 gap-2 flex-1">
                      {[1, 2, 3].map((num) => {
                        const isExpanded = expandedCard === num;
                        const exampleText = themes[selectedTheme].examples[num - 1];
                        return (
                          <div
                            key={num}
                            className="bg-white border border-dashed border-slate-300 rounded-lg p-2 text-center flex flex-col items-center justify-between font-medium text-slate-700 shadow-2xs hover:border-blue-300 transition-colors"
                          >
                            <span className="font-bold text-slate-800 text-[11px]">
                              Cartão {num}
                            </span>
                            <span className="text-[10px] text-slate-500 truncate w-full px-1">
                              {exampleText}
                            </span>

                            {/* Mini interativo demonstrando ação do JavaScript */}
                            <button
                              type="button"
                              onClick={() => toggleCardDetail(num)}
                              className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-semibold bg-slate-100 hover:bg-blue-50 text-blue-600 rounded border border-slate-200 transition-colors"
                            >
                              <Eye className="w-2.5 h-2.5" />
                              <span>{isExpanded ? 'Esconder' : 'Detalhes'}</span>
                            </button>

                            {isExpanded && (
                              <div className="w-full mt-1 p-1 bg-blue-50 rounded text-[9px] text-blue-800 animate-in fade-in">
                                Detalhes exibidos!
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Rodapé */}
                <div className="bg-white border border-dashed border-slate-300 rounded-lg p-2 text-center text-slate-500 text-[11px] shadow-2xs">
                  Rodapé
                </div>
              </div>
            ) : (
              /* VISTA CELULAR: Menu acima do conteúdo e cartões empilhados */
              <div className="flex flex-col gap-2 max-w-[290px] mx-auto text-xs animate-in fade-in duration-200">
                {/* Cabeçalho */}
                <div className="bg-white border border-dashed border-slate-300 rounded-lg p-2 text-center font-bold text-slate-800 shadow-2xs">
                  Nome do site
                </div>

                {/* Menu horizontal/superior acima do conteúdo */}
                <div className="bg-white border border-dashed border-slate-300 rounded-lg px-2 py-1.5 flex items-center justify-center gap-2 text-[11px] shadow-2xs">
                  <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
                    Início
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600">Galeria</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600">Contato</span>
                </div>

                {/* Apresentação */}
                <div className="bg-blue-50/80 border border-dashed border-blue-300/90 rounded-lg p-2 text-center text-blue-900 font-semibold shadow-2xs">
                  Apresentação
                </div>

                {/* Cartões empilhados */}
                <div className="flex flex-col gap-2">
                  {[1, 2, 3].map((num) => {
                    const isExpanded = expandedCard === num;
                    const exampleText = themes[selectedTheme].examples[num - 1];
                    return (
                      <div
                        key={num}
                        className="bg-white border border-dashed border-slate-300 rounded-lg p-2 text-center flex items-center justify-between font-medium text-slate-700 shadow-2xs"
                      >
                        <div className="text-left">
                          <span className="font-bold text-slate-800 text-[11px] block">
                            Cartão {num}
                          </span>
                          <span className="text-[10px] text-slate-500 truncate block max-w-[130px]">
                            {exampleText}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleCardDetail(num)}
                          className="px-2 py-1 text-[9px] font-semibold bg-slate-100 hover:bg-blue-50 text-blue-600 rounded border border-slate-200 transition-colors"
                        >
                          {isExpanded ? 'Esconder' : 'Detalhes'}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Rodapé */}
                <div className="bg-white border border-dashed border-slate-300 rounded-lg p-1.5 text-center text-slate-500 text-[11px] shadow-2xs">
                  Rodapé
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
