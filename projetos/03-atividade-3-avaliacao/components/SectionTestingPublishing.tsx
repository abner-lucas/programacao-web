'use client';

import React, { useSyncExternalStore, useMemo } from 'react';
import {
  CheckSquare,
  Smartphone,
  UploadCloud,
  ChevronDown,
  ExternalLink,
  RotateCcw,
  Sparkles,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { CHECKLIST_ITEMS, checklistStore } from '@/lib/checklist-store';

export default function SectionTestingPublishing() {
  const rawState = useSyncExternalStore(
    checklistStore.subscribe,
    checklistStore.getSnapshot,
    checklistStore.getServerSnapshot
  );

  const checkedState = useMemo(() => {
    try {
      const parsed = JSON.parse(rawState);
      if (Array.isArray(parsed) && parsed.length === CHECKLIST_ITEMS.length) {
        return parsed as boolean[];
      }
    } catch {
      // ignore
    }
    return Array(CHECKLIST_ITEMS.length).fill(false);
  }, [rawState]);

  const handleToggle = (index: number) => {
    const updated = [...checkedState];
    updated[index] = !updated[index];
    checklistStore.set(updated);
  };

  const handleResetChecklist = () => {
    const reset = Array(CHECKLIST_ITEMS.length).fill(false);
    checklistStore.set(reset);
  };

  const checkedCount = checkedState.filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const isAllChecked = checkedCount === totalCount;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  return (
    <section id="teste-publicacao" className="py-10 scroll-mt-16 border-b border-slate-200/90">
      {/* Título da Seção */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          ✅ Teste e publique
        </h2>
      </div>

      {/* Caixa do Checklist Dinâmica */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 mb-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Confira antes de entregar</span>
              {isAllChecked && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 animate-in fade-in">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Completo
                </span>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {checkedCount} de {totalCount} itens conferidos ({progressPercent}%)
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {checkedCount > 0 && (
              <button
                type="button"
                onClick={handleResetChecklist}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Limpar marcações</span>
              </button>
            )}
          </div>
        </div>

        {/* Barra de progresso visual fluida com gradiente */}
        <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
          <div
            className={`h-2 transition-all duration-300 ease-out rounded-full ${
              isAllChecked
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}
            style={{ width: `${(checkedCount / totalCount) * 100}%` }}
          />
        </div>

        {/* Notificação dinâmica comemorativa se todos estiverem marcados */}
        {isAllChecked && (
          <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50/60 border border-emerald-200/90 text-emerald-950 flex items-center gap-3 animate-in fade-in slide-in-from-top-1">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs sm:text-sm font-semibold">
              Excelente! Todos os 6 itens foram conferidos. Seu projeto está estruturado para a publicação e avaliação!
            </p>
          </div>
        )}

        {/* Itens do Checklist */}
        <div className="space-y-2.5">
          {CHECKLIST_ITEMS.map((item, index) => {
            const isChecked = checkedState[index];
            return (
              <label
                key={index}
                className={`group flex items-start gap-3.5 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                  isChecked
                    ? 'bg-blue-50/40 border-blue-200/90 text-slate-900 shadow-2xs'
                    : 'bg-white border-slate-200/80 hover:bg-slate-50/70 hover:border-slate-300 text-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle(index)}
                  className="mt-0.5 w-4.5 h-4.5 rounded-md text-blue-600 border-slate-300 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer transition-transform group-hover:scale-105"
                />
                <span
                  className={`text-sm leading-relaxed transition-colors ${
                    isChecked ? 'font-medium text-slate-900' : 'text-slate-700'
                  }`}
                >
                  {item}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Detalhe recolhível: Como testar a responsividade */}
      <details className="group border border-slate-200/90 rounded-2xl bg-white overflow-hidden mb-4 shadow-2xs transition-all">
        <summary className="p-4 sm:p-5 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50/80 flex items-center justify-between select-none transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Smartphone className="w-4 h-4" />
            </div>
            <span>Como testar a responsividade</span>
          </div>
          <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <div className="px-4 sm:px-6 pb-6 pt-3 border-t border-slate-100 text-slate-700 text-sm leading-relaxed">
          <p>
            Reduza a janela do navegador ou use o modo de dispositivos das ferramentas de desenvolvedor. Confira o menu, os textos, as imagens e as três configurações da galeria: três, duas e uma coluna.
          </p>
        </div>
      </details>

      {/* Detalhe recolhível: Como publicar no Tiiny.host */}
      <details className="group border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all">
        <summary className="p-4 sm:p-5 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50/80 flex items-center justify-between select-none transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <UploadCloud className="w-4 h-4" />
            </div>
            <span>Como publicar no Tiiny.host</span>
          </div>
          <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <div className="px-4 sm:px-6 pb-6 pt-3 border-t border-slate-100 text-slate-700 text-sm leading-relaxed space-y-4">
          {/* Cinco passos numerados */}
          <ol className="space-y-3 text-slate-700">
            {[
              'Dentro da pasta do projeto, selecione index.html, style.css, script.js e a pasta img. Compacte essa seleção em um arquivo ZIP.',
              'Abra o ZIP e confira: index.html deve aparecer diretamente na raiz. A pasta img deve permanecer com as imagens dentro.',
              'Acesse o Tiiny.host, envie o ZIP e escolha um nome disponível para o endereço do site.',
              'Conclua a publicação e copie o link público. Faça login ou cadastro se a plataforma solicitar.',
              'Abra o link em outro navegador ou no celular e confira o resultado. Confirme que a publicação não está identificada como prévia temporária.',
            ].map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 border border-blue-200/80 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {/* Nota curta dentro desse detalhe */}
          <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <p>
              Plano gratuito: um projeto ativo, até 3 MB por projeto e três envios por dia, contando atualizações. Use imagens leves e confira os limites antes de publicar.
            </p>
          </div>

          {/* Orientação de atualização */}
          <p className="text-slate-600 text-xs sm:text-sm italic border-l-2 border-blue-500 pl-3">
            Para corrigir o site, gere um novo ZIP e atualize o mesmo projeto no Tiiny.host, preservando o endereço entregue.
          </p>

          {/* Links e Botão de Ação */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="https://tiiny.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-xs hover:shadow hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Abrir Tiiny.host</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://helpdesk.tiiny.host/en/article/plan-limits-explained-projects-uploads-visits-and-bandwidth-1ihflbr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 underline underline-offset-2 transition-colors"
            >
              <span>Consultar limites do plano</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </details>
    </section>
  );
}
