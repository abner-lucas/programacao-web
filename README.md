# 🌐 Portal de Programação Web

Repositório central de estudos, páginas e projetos práticos desenvolvidos na disciplina de **Programação Web** (Prof. Ábner Lucas · IFPA Campus Breves).

---

## 📌 Visão Geral

Este repositório foi organizado para servir tanto como **material didático de consulta** quanto como um **portal interativo publicado via GitHub Pages**. Ao acessar a raiz do projeto, estudantes e visitantes encontram um portal completo para navegação entre os projetos práticos desenvolvidos em aula.

---

## 📂 Estrutura do Repositório

```text
github-page/
├── index.html                           # 🌟 Portal Principal da Disciplina (Raiz GitHub Pages)
├── style.css                            # Estilização moderna e responsiva do Portal
├── script.js                            # Filtro interativo e navegação dinâmica
├── README.md                            # Documentação geral do repositório
│
├── docs/                                # Documentação e roteiros oficiais em PDF
│   ├── Atividade_Diagnostica_Layout_Interativo.pdf
│   └── Atividade_Diagnostica_Web.pdf
│
└── projetos/                            # Projetos práticos e páginas da disciplina
    ├── 01-atividade-diagnostica/        # 📄 Portal de Instruções da Atividade Diagnóstica
    │   ├── index.html                   # Interface com menu lateral, modais e login simulado
    │   ├── style.css                    # Estilos com Flexbox, Transform e modais
    │   ├── script.js                    # Abertura de modais e interatividade de formulário
    │   └── docs/                        # PDF disponível para download direto
    │
    └── 02-patas-e-cia/                  # 🐾 Projeto Base: Creche de Cães "Patas & Cia"
        ├── index.html                   # Landing page semântica totalmente comentada
        ├── style.css                    # Grid (190px 1fr), Flexbox e media queries responsivas
        ├── script.js                    # Manipulação de DOM (classList.toggle)
        └── img/                         # Imagens dos serviços e favicon
    │
    └── 03-atividade-3-avaliacao/        # 📝 3ª Avaliação: Personalização de um Site Responsivo
        ├── app/, components/, lib/      # Código-fonte (Next.js + Tailwind)
        ├── index.html, _next/           # Versão estática publicada (gerada por npm run build:pages)
        └── package.json
```

---

## 🚀 Projetos Integrados

### 1. [Portal da Atividade Diagnóstica](./projetos/01-atividade-diagnostica/)
* **Tema**: Ambiente de divulgação e simulação da Atividade Diagnóstica Prática.
* **Recursos**:
  * Barra lateral com navegação por modais (Orientações, Requisitos Técnicos, Critérios de Avaliação).
  * Formulário de acesso simulado com validação e feedback dinâmico via JavaScript (`success-box`).
  * Botão de download direto do roteiro da atividade em PDF.
  * Botão de retorno direto ao Portal Principal.

### 2. [Patas & Cia (Projeto Base Didático)](./projetos/02-patas-e-cia/)
* **Tema**: Landing page para serviços de creche e cuidados caninos.
* **Recursos**:
  * Código 100% comentado linha a linha para aprendizado de iniciantes.
  * CSS Grid para divisão entre barra lateral e área de conteúdo.
  * Grid de cartões de serviços com exibição expansível de detalhes no clique do botão.
  * Totalmente responsivo para celulares, tablets e computadores.

### 3. [3ª Avaliação · Personalização de um Site Responsivo](./projetos/03-atividade-3-avaliacao/)
* **Tema**: Transformar o projeto Patas & Cia em um site com outro tema (em dupla).
* **Recursos**: roteiro do desafio, orientações de personalização, checklist interativo, publicação no Tiiny.host e critérios de entrega.
* **Como atualizar**: dentro da pasta, rode `npm install` (uma vez) e depois `npm run build:pages`.

---

## 🛠️ Tecnologias e Conceitos Trabalhados

- **HTML5**: Semântica (`<header>`, `<nav>`, `<aside>`, `<main>`, `<section>`, `<footer>`), acessibilidade e formulários.
- **CSS3**: CSS Grid, Flexbox, Variáveis CSS, `transform`, `transition`, sombreamento e `@media` queries.
- **JavaScript (Vanilla)**: Manipulação do DOM (`querySelector`, `addEventListener`, `classList.toggle`), eventos de clique e submissão de formulários.
- **Git & GitHub Pages**: Versionamento e publicação estática automatizada.

---

## 🌐 Publicação no GitHub Pages

O projeto está pronto para publicação imediata no **GitHub Pages**:
1. No repositório no GitHub, acesse **Settings** > **Pages**.
2. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
3. Clique em **Save**. A página raiz `index.html` será disponibilizada publicamente.

---

> *Material desenvolvido para fins acadêmicos e pedagógicos.*

