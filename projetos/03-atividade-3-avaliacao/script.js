/**
 * 3ª AVALIAÇÃO: PERSONALIZAÇÃO DE UM SITE RESPONSIVO
 * Roteiro Interativo · IFPA Campus Breves · Prof. Ábner Lucas
 */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================================
    // 1. BARRA DE PROGRESSO DE LEITURA E MENU SUPERIOR
    // ========================================================
    const progressBar = document.getElementById('scroll-progress-bar');
    const sections = ['desafio', 'personalizacao', 'teste-publicacao', 'entrega-avaliacao'];
    const navLinks = document.querySelectorAll('.sticky nav a');

    const updateScrollProgress = () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
        if (progressBar) {
            progressBar.style.width = `${Math.min(100, Math.max(0, currentProgress))}%`;
        }

        // Destaque de seção ativa
        for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 180 && rect.bottom >= 180) {
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        const isActive = href === `#${sectionId}`;
                        if (isActive) {
                            link.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 bg-blue-50 text-blue-700 shadow-2xs';
                            const icon = link.querySelector('svg');
                            if (icon) icon.setAttribute('class', 'w-3.5 h-3.5 text-blue-600');
                        } else {
                            link.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50';
                            const icon = link.querySelector('svg');
                            if (icon) icon.setAttribute('class', 'w-3.5 h-3.5 text-slate-400');
                        }
                    });
                    break;
                }
            }
        }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    // ========================================================
    // 2. CHECKLIST INTERATIVO COM PERSISTÊNCIA LOCAL
    // ========================================================
    const STORAGE_KEY = 'avaliacao-3-checklist-state';
    const itemsContainer = document.getElementById('checklist-items-container');

    if (itemsContainer) {
        const checkboxes = itemsContainer.querySelectorAll('input[type="checkbox"]');
        const counterText = document.getElementById('checklist-counter-text');
        const checklistBar = document.getElementById('checklist-progress-bar');
        const navChecklistBadge = document.getElementById('checklist-badge-nav');
        const headerActions = document.getElementById('checklist-header-actions');
        const headerTitle = document.getElementById('checklist-header-title');

        // Carregar estado salvo
        let savedState = [];
        try {
            savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } catch (e) {
            savedState = [];
        }

        const updateChecklist = () => {
            let checkedCount = 0;
            checkboxes.forEach((cb, idx) => {
                const label = cb.closest('label');
                const isChecked = cb.checked;
                if (isChecked) checkedCount++;

                if (label) {
                    const span = label.querySelector('span');
                    if (isChecked) {
                        label.className = 'group flex items-start gap-3.5 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none bg-blue-50/40 border-blue-200/90 text-slate-900 shadow-2xs';
                        if (span) span.className = 'text-sm leading-relaxed transition-colors font-medium text-slate-900';
                    } else {
                        label.className = 'group flex items-start gap-3.5 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none bg-white border-slate-200/80 hover:bg-slate-50/70 hover:border-slate-300 text-slate-700';
                        if (span) span.className = 'text-sm leading-relaxed transition-colors text-slate-700';
                    }
                }
            });

            const total = checkboxes.length || 6;
            const percent = Math.round((checkedCount / total) * 100);
            const isAllChecked = checkedCount === total;

            // Atualiza texto da contagem
            if (counterText) {
                counterText.textContent = `${checkedCount} de ${total} itens conferidos (${percent}%)`;
            }

            // Atualiza barra de progresso
            if (checklistBar) {
                checklistBar.style.width = `${percent}%`;
                if (isAllChecked) {
                    checklistBar.className = 'h-2 transition-all duration-300 ease-out rounded-full bg-gradient-to-r from-emerald-500 to-teal-500';
                } else {
                    checklistBar.className = 'h-2 transition-all duration-300 ease-out rounded-full bg-gradient-to-r from-blue-600 to-indigo-600';
                }
            }

            // Atualiza badge no navbar
            if (navChecklistBadge) {
                const countStrong = navChecklistBadge.querySelector('strong');
                if (countStrong) {
                    countStrong.textContent = `${checkedCount}/${total}`;
                }
                if (isAllChecked) {
                    navChecklistBadge.className = 'flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full border transition-all bg-emerald-50 border-emerald-300 text-emerald-700';
                } else {
                    navChecklistBadge.className = 'flex items-center gap-2 px-2.5 py-1 text-xs font-medium rounded-full border transition-all bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600';
                }
            }

            // Botão Limpar Marcações
            if (headerActions) {
                if (checkedCount > 0) {
                    if (!headerActions.querySelector('.btn-reset-check')) {
                        const resetBtn = document.createElement('button');
                        resetBtn.type = 'button';
                        resetBtn.className = 'btn-reset-check inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors';
                        resetBtn.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                            <span>Limpar marcações</span>
                        `;
                        resetBtn.addEventListener('click', () => {
                            checkboxes.forEach(cb => cb.checked = false);
                            localStorage.removeItem(STORAGE_KEY);
                            updateChecklist();
                        });
                        headerActions.appendChild(resetBtn);
                    }
                } else {
                    headerActions.innerHTML = '';
                }
            }

            // Tag "Completo" ao lado do título
            if (headerTitle) {
                let badge = headerTitle.querySelector('.badge-completo');
                if (isAllChecked) {
                    if (!badge) {
                        badge = document.createElement('span');
                        badge.className = 'badge-completo inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200';
                        badge.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-emerald-600"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                            <span>Completo</span>
                        `;
                        headerTitle.appendChild(badge);
                    }
                } else if (badge) {
                    badge.remove();
                }
            }

            // Notificação comemorativa se completo
            const testSection = document.getElementById('teste-publicacao');
            if (testSection) {
                let successBox = testSection.querySelector('.checklist-success-alert');
                const progressContainer = checklistBar ? checklistBar.parentElement : null;
                if (isAllChecked) {
                    if (!successBox && progressContainer) {
                        successBox = document.createElement('div');
                        successBox.className = 'checklist-success-alert mb-5 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50/60 border border-emerald-200/90 text-emerald-950 flex items-center gap-3';
                        successBox.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-emerald-600 shrink-0"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
                            <p class="text-xs sm:text-sm font-semibold">Excelente! Todos os 6 itens foram conferidos. Seu projeto está estruturado para a publicação e avaliação!</p>
                        `;
                        progressContainer.parentNode.insertBefore(successBox, progressContainer.nextSibling);
                    }
                } else if (successBox) {
                    successBox.remove();
                }
            }

            // Salvar no localStorage
            const stateToSave = Array.from(checkboxes).map(cb => cb.checked);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
        };

        // Restaurar estado inicial
        checkboxes.forEach((cb, idx) => {
            if (savedState[idx]) {
                cb.checked = true;
            }
            cb.addEventListener('change', updateChecklist);
        });

        updateChecklist();
    }

    // ========================================================
    // 3. SELEÇÃO DE TEMAS E PRÉVIA INTERATIVA
    // ========================================================
    const themeCards = [
        document.getElementById('theme-card-0'),
        document.getElementById('theme-card-1'),
        document.getElementById('theme-card-2')
    ].filter(Boolean);

    const themeData = [
        {
            title: 'Lanchonete',
            examples: ['X-Burguer Artesanal', 'Batata Rústica', 'Suco Natural da Fruta']
        },
        {
            title: 'Galeria de jogos',
            examples: ['Aventura Espacial', 'RPG de Estratégia', 'Corrida Radical']
        },
        {
            title: 'Cursos e oficinas',
            examples: ['Desenvolvimento Web', 'Design de Interfaces', 'Lógica de Programação']
        }
    ];

    const previewBadge = document.getElementById('preview-theme-badge');
    const previewCardsGrid = document.getElementById('preview-cards-grid');

    const selectTheme = (idx) => {
        const theme = themeData[idx];
        if (!theme) return;

        themeCards.forEach((card, i) => {
            const isSelected = i === idx;
            const iconBox = card.querySelector('.w-9.h-9');
            let badge = card.querySelector('.badge-theme-tag');

            if (isSelected) {
                card.className = 'p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between bg-blue-50/50 border-blue-400 shadow-sm ring-1 ring-blue-300 -translate-y-0.5 theme-card';
                if (iconBox) iconBox.className = 'w-9 h-9 rounded-xl flex items-center justify-center transition-colors bg-blue-600 text-white';
                if (!badge) {
                    const header = card.querySelector('.flex.items-center.justify-between.mb-3');
                    if (header) {
                        badge = document.createElement('span');
                        badge.className = 'badge-theme-tag text-[11px] font-semibold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full';
                        badge.textContent = 'Tema selecionado';
                        header.appendChild(badge);
                    }
                }
            } else {
                card.className = 'p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs hover:-translate-y-0.5 theme-card';
                if (iconBox) iconBox.className = 'w-9 h-9 rounded-xl flex items-center justify-center transition-colors bg-slate-100 text-slate-700';
                if (badge) badge.remove();
            }
        });

        if (previewBadge) {
            previewBadge.textContent = theme.title;
        }

        if (previewCardsGrid) {
            const previewCardEls = previewCardsGrid.querySelectorAll(':scope > div');
            previewCardEls.forEach((cardEl, i) => {
                const nameSpan = cardEl.querySelector('span.text-\\[10px\\]');
                if (nameSpan && theme.examples[i]) {
                    nameSpan.textContent = theme.examples[i];
                }
            });
        }
    };

    themeCards.forEach((card, idx) => {
        card.addEventListener('click', () => selectTheme(idx));
    });

    // ========================================================
    // 4. ALTERNÂNCIA COMPUTADOR / CELULAR NA PRÉVIA
    // ========================================================
    const btnDesktop = document.getElementById('btn-device-desktop');
    const btnMobile = document.getElementById('btn-device-mobile');
    const previewAddress = document.getElementById('preview-browser-address');
    const previewFrame = document.getElementById('preview-frame');

    const setDeviceView = (device) => {
        if (device === 'desktop') {
            if (btnDesktop) btnDesktop.className = 'flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 bg-blue-600 text-white shadow-xs';
            if (btnMobile) btnMobile.className = 'flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50';
            if (previewAddress) previewAddress.textContent = 'https://meu-site.tiiny.site · 1024px (Computador)';
            if (previewCardsGrid) previewCardsGrid.className = 'grid grid-cols-3 gap-2 flex-1';
            if (previewFrame) {
                previewFrame.style.maxWidth = '100%';
                previewFrame.style.margin = '0';
            }
        } else {
            if (btnMobile) btnMobile.className = 'flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 bg-blue-600 text-white shadow-xs';
            if (btnDesktop) btnDesktop.className = 'flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50';
            if (previewAddress) previewAddress.textContent = 'https://meu-site.tiiny.site · 375px (Celular)';
            if (previewCardsGrid) previewCardsGrid.className = 'grid grid-cols-1 gap-2 flex-1';
            if (previewFrame) {
                previewFrame.style.maxWidth = '360px';
                previewFrame.style.margin = '0 auto';
            }
        }
    };

    if (btnDesktop) btnDesktop.addEventListener('click', () => setDeviceView('desktop'));
    if (btnMobile) btnMobile.addEventListener('click', () => setDeviceView('mobile'));

    // Botões "Detalhes" dentro dos cartões da prévia
    if (previewCardsGrid) {
        previewCardsGrid.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const parentCard = btn.closest('div');
                const descSpan = parentCard ? parentCard.querySelector('span.text-\\[10px\\]') : null;
                if (descSpan) {
                    descSpan.classList.toggle('font-bold');
                    descSpan.classList.toggle('text-blue-600');
                }
            });
        });
    }

    // ========================================================
    // 5. BOTÃO "VOLTAR AO TOPO"
    // ========================================================
    const scrollTopBtn = document.getElementById('btn-scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

