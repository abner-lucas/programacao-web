// FUNCIONALIDADE 1: Sistema de Modais (Popups Interativos)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloqueia scroll do fundo
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaura scroll
    }
}

// Fechar modal ao clicar na área escura (overlay)
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Fechar modal com a tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
});

// Navegação de seções
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// FUNCIONALIDADE 2: Interatividade do Formulário (Requisito JS da Atividade)
// O objetivo da atividade pede para "mostrar ou esconder uma caixa" ou "alterar um texto"
const form = document.getElementById('login-form');
const loginBox = document.getElementById('login-box');
const successBox = document.getElementById('success-box');

if (form) {
    form.addEventListener('submit', function(event) {
        // 1. Evita o comportamento padrão (recarregar a página)
        event.preventDefault();
        
        // 2. Esconde a caixa de login
        loginBox.classList.add('hidden');
        
        // 3. Mostra a mensagem de sucesso (Ação exigida na orientação)
        successBox.classList.remove('hidden');
    });
}

// Função extra para resetar a simulação
function resetLogin() {
    if (form) {
        form.reset(); // Limpa os inputs
    }
    if (successBox) {
        successBox.classList.add('hidden');
    }
    if (loginBox) {
        loginBox.classList.remove('hidden');
    }
}

// Controle de destaque no menu lateral
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function() {
        if (!this.classList.contains('nav-back')) {
            document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

