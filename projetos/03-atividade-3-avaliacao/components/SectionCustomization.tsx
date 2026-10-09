'use client';

import React, { useState } from 'react';
import {
  FileCode,
  Image as ImageIcon,
  Palette,
  Sparkles,
  FolderTree,
  ChevronDown,
  Download,
  ExternalLink,
  Copy,
  Check,
  Info,
  Sliders,
  Folder,
} from 'lucide-react';
import { assignmentConfig } from '@/lib/assignment-config';

export default function SectionCustomization() {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string>('');

  const orientationCards = [
    {
      title: 'HTML — Conteúdo',
      description:
        'Troquem o nome do site, a apresentação, os textos dos três cartões e o rodapé. Identifiquem os integrantes.',
      icon: FileCode,
      tag: 'Estrutura',
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: 'Imagens — Identidade',
      description:
        'Substituam as três imagens. Confiram os caminhos em src e atualizem as descrições em alt.',
      icon: ImageIcon,
      tag: 'Mídia',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'CSS — Aparência',
      description:
        'Escolham uma nova combinação de cores e personalizem um efeito ao passar o cursor sobre um botão ou link.',
      icon: Palette,
      tag: 'Estilo',
      color: 'text-sky-600 bg-sky-50 border-sky-100',
    },
    {
      title: 'JavaScript — Interação',
      description:
        'Personalizem o texto inicial dos botões no HTML e os textos de abrir e fechar no JavaScript. Mantenham a ação de mostrar e esconder os detalhes.',
      icon: Sparkles,
      tag: 'Comportamento',
      color: 'text-violet-600 bg-violet-50 border-violet-100',
    },
  ];

  const handleCopyCode = async (filename: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedFile(filename);
      setCopyFeedback('Código copiado!');
      setTimeout(() => {
        setCopiedFile(null);
        setCopyFeedback('');
      }, 3000);
    } catch {
      setCopiedFile(filename);
      setCopyFeedback('Não foi possível copiar. Selecione e copie o código.');
      setTimeout(() => {
        setCopiedFile(null);
        setCopyFeedback('');
      }, 4000);
    }
  };

  const handleDownloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="personalizacao" className="py-10 scroll-mt-16 border-b border-slate-200/90">
      {/* Título da Seção */}
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600">
          <Palette className="w-4 h-4" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          🎨 Personalize o projeto
        </h2>
      </div>

      {/* Faixa de materiais com design moderno */}
      <div className="mb-6 p-5 sm:p-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/90 rounded-2xl shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Comece pelo projeto-base
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Baixe os arquivos, extraia o ZIP e abra a pasta no VS Code.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {assignmentConfig.hasBaseProjectFiles && assignmentConfig.baseProjectZipUrl ? (
              <>
                <a
                  href={assignmentConfig.baseProjectZipUrl}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-xs hover:shadow hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar projeto-base (.zip)</span>
                </a>
                <a
                  href="projeto-base/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200/90 shadow-2xs transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Visualizar online</span>
                </a>
              </>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200/90 text-slate-700 text-sm font-medium rounded-xl shadow-2xs">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span>O projeto-base será disponibilizado pelo professor.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quatro cartões de orientação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {orientationCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="group p-5 bg-white border border-slate-200/90 hover:border-blue-300/80 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 ${card.color}`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {card.tag}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Faixa essencial: Ajuste também a responsividade */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-blue-50/60 border border-blue-200/80 rounded-2xl mb-6 shadow-2xs">
        <div className="flex items-start gap-3 mb-2">
          <Sliders className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-1">
              Ajuste também a responsividade
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
              Apliquem as regras estudadas: menu lateral no computador e acima do conteúdo em telas menores; galeria com três, duas e uma coluna, conforme a largura da tela.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 italic border-l-2 border-blue-500 pl-3">
              Utilizem os códigos e as anotações das aulas. Cada integrante deve compreender as alterações realizadas.
            </p>
          </div>
        </div>
      </div>

      {/* Detalhe recolhível: Como organizar os arquivos */}
      <details className="group border border-slate-200/90 rounded-2xl bg-white overflow-hidden mb-6 shadow-2xs transition-all">
        <summary className="p-4 sm:p-5 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50/80 flex items-center justify-between select-none transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <FolderTree className="w-4 h-4" />
            </div>
            <span>Como organizar os arquivos</span>
          </div>
          <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <div className="px-4 sm:px-6 pb-6 pt-3 border-t border-slate-100 text-slate-700 text-sm leading-relaxed space-y-4">
          <p>
            Mantenham index.html, style.css e script.js na pasta principal. Guardem as imagens na pasta img e preservem os caminhos usados no HTML.
          </p>

          {/* Tabela estilizada */}
          <div className="overflow-x-auto border border-slate-200/80 rounded-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700 font-bold bg-slate-50">
                  <th className="py-3 px-4">Arquivo</th>
                  <th className="py-3 px-4">Finalidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 font-mono text-slate-900 font-semibold flex items-center gap-2">
                    <FileCode className="w-3.5 h-3.5 text-amber-500" />
                    <span>index.html</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">Estrutura e conteúdo</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 font-mono text-slate-900 font-semibold flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-sky-500" />
                    <span>style.css</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">Estilos e responsividade</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 font-mono text-slate-900 font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                    <span>script.js</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">Ações dos botões</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4 font-mono text-slate-900 font-semibold flex items-center gap-2">
                    <Folder className="w-3.5 h-3.5 text-emerald-500" />
                    <span>img/</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">Imagens e ícone do site</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>

      {/* Blocos de código recolhíveis se fornecidos pelo professor */}
      {assignmentConfig.hasBaseProjectFiles &&
        assignmentConfig.baseProjectFiles &&
        assignmentConfig.baseProjectFiles.length > 0 && (
          <div className="space-y-3 mt-4">
            {assignmentConfig.baseProjectFiles.map((file) => (
              <details
                key={file.filename}
                className="group border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-2xs"
              >
                <summary className="p-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:bg-slate-50 flex items-center justify-between select-none">
                  <span className="font-mono text-xs sm:text-sm">{file.label}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 pt-2 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-slate-500 font-mono">
                      {copiedFile === file.filename ? copyFeedback : file.filename}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyCode(file.filename, file.content)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                      >
                        {copiedFile === file.filename && copyFeedback === 'Código copiado!' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Código copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Copiar código</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDownloadFile(file.filename, file.content)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                      >
                        <Download className="w-3.5 h-3.5 text-slate-500" />
                        <span>Baixar arquivo</span>
                      </button>
                    </div>
                  </div>
                  <pre className="p-3 bg-slate-900 text-slate-100 text-xs rounded-xl overflow-x-auto font-mono max-h-72">
                    <code>{file.content}</code>
                  </pre>
                </div>
              </details>
            ))}
          </div>
        )}
    </section>
  );
}
