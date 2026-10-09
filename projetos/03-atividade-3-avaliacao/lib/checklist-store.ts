export const CHECKLIST_ITEMS = [
  'HTML: O nome do site, a apresentação, os textos dos 3 cartões e o rodapé foram alterados, identificando os integrantes.',
  'Imagens: As 3 imagens foram substituídas, com caminhos corretos em src e descrições em alt.',
  'CSS: Nova combinação de cores aplicada e efeito de hover personalizado em botões ou links.',
  'JavaScript: Textos dos botões personalizados e ação de mostrar/esconder detalhes funcionando.',
  'Responsividade: Menu lateral no PC e no topo no celular, com galeria em 3, 2 e 1 coluna sem rolagem lateral.',
  'Publicação: ZIP publicado no Tiiny.host e link público testado/abrindo em outro navegador.',
];

const STORAGE_KEY = 'avaliacao_web_checklist_progress_v1';

let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const checklistStore = {
  getSnapshot(): string {
    if (typeof window === 'undefined') return '[]';
    return localStorage.getItem(STORAGE_KEY) || '[]';
  },
  getServerSnapshot(): string {
    return '[]';
  },
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', listener);
    }
    return () => {
      listeners = listeners.filter((l) => l !== listener);
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', listener);
      }
    };
  },
  set(checked: boolean[]) {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
      } catch {
        // ignore
      }
      emitChange();
    }
  },
};
