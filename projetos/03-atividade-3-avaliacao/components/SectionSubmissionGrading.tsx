import React from 'react';
import { PackageCheck, Users, Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { assignmentConfig } from '@/lib/assignment-config';

export default function SectionSubmissionGrading() {
  const gradingCards = [
    {
      title: 'Personalização — 2,0 pontos',
      description: 'Alterações em HTML e CSS verificadas durante o desenvolvimento.',
      points: '2,0 pts',
      color: 'border-l-blue-500',
    },
    {
      title: 'Responsividade e JavaScript — 2,0 pontos',
      description: 'Ajustes de layout e funcionamento dos botões na prática.',
      points: '2,0 pts',
      color: 'border-l-indigo-500',
    },
    {
      title: 'Projeto final — 4,0 pontos',
      description: 'Página completa, organizada, funcional e publicada.',
      points: '4,0 pts',
      color: 'border-l-emerald-500',
    },
    {
      title: 'Participação individual — 2,0 pontos',
      description: 'Explicação do código e pequena alteração realizada por cada integrante.',
      points: '2,0 pts',
      color: 'border-l-violet-500',
    },
  ];

  return (
    <section id="entrega-avaliacao" className="py-10 scroll-mt-16 border-b border-slate-200/90">
      {/* Título da Seção */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          📤 Entregue e apresente
        </h2>
      </div>

      {/* Grid com Caixa de entrega e Caixa de apresentação */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {/* Caixa de entrega */}
        <div className="p-6 bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl shadow-2xs flex flex-col justify-between transition-all duration-200 hover:shadow-xs">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                O que entregar
              </h3>
            </div>

            <ul className="space-y-2.5 mb-4 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span>Arquivo ZIP com o projeto completo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span>Link público do site publicado no Tiiny.host.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span>Identificação dos dois integrantes.</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Envie o ZIP e o link na tarefa da 3ª avaliação, no ambiente indicado pelo professor, dentro do prazo informado.
            </p>

            {assignmentConfig.submissionDeadline && (
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Prazo de entrega: {assignmentConfig.submissionDeadline}</span>
              </div>
            )}

            {assignmentConfig.submissionPlatformUrl && (
              <div className="mt-2.5">
                <a
                  href={assignmentConfig.submissionPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold hover:underline"
                >
                  <span>Abrir tarefa no ambiente de aula</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Caixa de apresentação */}
        <div className="p-6 bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl shadow-2xs flex flex-col justify-between transition-all duration-200 hover:shadow-xs">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Cada integrante participa
              </h3>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              Explique uma parte do código e realize uma pequena alteração solicitada pelo professor, como trocar uma imagem, mudar uma cor ou ajustar o texto de um botão.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 mt-3">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Momento de validação prática: cada estudante demonstra domínio sobre as linhas de código produzidas.
            </p>
          </div>
        </div>
      </div>

      {/* Pontuação da 3ª avaliação */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>Pontuação da 3ª avaliação</span>
          </h3>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-800 font-bold text-sm shadow-2xs self-start sm:self-auto">
            <span>Total: 10,0 pontos</span>
          </div>
        </div>

        {/* Quatro cartões compactos com estilo moderno e barras de destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
          {gradingCards.map((card) => (
            <div
              key={card.title}
              className={`p-4 bg-gradient-to-b from-slate-50/90 to-white border border-slate-200/90 hover:border-slate-300 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs border-l-4 ${card.color}`}
            >
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p className="text-xs sm:text-sm text-slate-500 italic border-l-2 border-blue-400 pl-3">
          A avaliação considera o desenvolvimento em aula, a entrega final e a compreensão individual do código.
        </p>
      </div>
    </section>
  );
}
