export const CHECKLIST_ITEMS = [
  'O nome, os textos, as imagens e as cores foram personalizados.',
  'Os três cartões apresentam conteúdo completo.',
  'Os menus levam aos destinos corretos da página.',
  'Os botões mostram e escondem os detalhes.',
  'O layout funciona no computador e no celular, sem rolagem lateral.',
  'O link publicado abre corretamente em outro navegador.',
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
