<div align="center">

# 🍔🍕 MixBite

### Uma mistura de sabores, do clique à mesa.

**Hambúrgueres · Pizzas · Pastéis · Milk-shakes**

Plataforma web institucional e cardápio digital do **MixBite**, restaurante fictício da Zona Norte de Natal/RN, construída com HTML, CSS e JavaScript puros, sem frameworks.

[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-F2B705?style=for-the-badge)](#-roadmap)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-063C18?style=for-the-badge&logo=github&logoColor=white)](https://arthurdevjunioria.github.io/MixBite/)
[![Licença](https://img.shields.io/badge/Licença-GPL-063C18?style=for-the-badge)](./LICENSE)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Sem frameworks](https://img.shields.io/badge/Zero-Frameworks-063C18?style=flat-square)

[**🌐 Ver o site ao vivo**](https://arthurdevjunioria.github.io/MixBite/) · [**🚀 Rodar localmente**](#-como-executar-localmente) · [**🗺️ Roadmap**](#-roadmap) · [**🤝 Contribuir**](#-como-contribuir)

</div>

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Decisões técnicas](#-decisões-técnicas)
- [Arquitetura e estrutura de pastas](#-arquitetura-e-estrutura-de-pastas)
- [Como executar localmente](#-como-executar-localmente)
- [Solução de problemas](#-solução-de-problemas)
- [Roadmap](#-roadmap)
- [Como contribuir](#-como-contribuir)
- [Desenvolvedores](#-desenvolvedores)
- [Licença](#-licença)

---

## 🎯 Sobre o projeto

O **MixBite** nasceu como um projeto de portfólio que simula a presença digital completa de um estabelecimento gastronômico real. A marca reúne quatro clássicos do fast-food artesanal em um só lugar (**hambúrgueres, pizzas, pastéis e milk-shakes**) e oferece uma experiência rápida, acolhedora e visualmente apetitosa para o público da Zona Norte de Natal.

Do ponto de vista técnico, o desafio era outro: **construir um site multipágina de verdade, sem depender de nenhum framework**, aplicando na prática:

| Princípio | Como aparece no projeto |
| :--- | :--- |
| 🧱 **Componentização** | Header e footer escritos uma única vez e injetados em todas as páginas via `fetch` |
| 🗂️ **Organização escalável** | Páginas, estilos, scripts e mídia separados por domínio |
| 🎨 **Identidade consistente** | Variáveis CSS globais, tipografia local e paleta única |
| ⚡ **Performance percebida** | Pré-carregamento de imagens do carrossel e fonte variável local |
| ♿ **Semântica** | HTML5 semântico e navegação por âncoras |

---

## 📸 Demonstração

> 💡 **Dica para os mantenedores:** adicione as capturas de tela na pasta `docs/screenshots/` e remova os comentários abaixo para exibi-las.

<!--
<div align="center">
  <img src="docs/screenshots/home-desktop.png" alt="Página inicial do MixBite no desktop" width="80%">
  <br><br>
  <img src="docs/screenshots/menu-desktop.png" alt="Página de cardápio do MixBite" width="49%">
  <img src="docs/screenshots/home-mobile.png" alt="Página inicial do MixBite no celular" width="25%">
</div>
-->

👉 Enquanto isso, veja tudo funcionando em **[arthurdevjunioria.github.io/MixBite](https://arthurdevjunioria.github.io/MixBite/)**.

---

## ✨ Funcionalidades

### Já disponíveis

- **🏠 Landing page institucional:** apresentação da marca, destaques do cardápio, localização, avaliações de clientes e canais de contato.
- **🎠 Carrossel promocional interativo:**
  - rotação automática a cada **7 segundos**;
  - transição suave por opacidade;
  - **pré-carregamento** das imagens para evitar "piscadas";
  - navegação manual por indicadores.
- **🧩 Componentes dinâmicos:** `header.html` e `footer.html` reutilizados em todas as páginas, com **resolução inteligente de caminhos relativos** entre a raiz e as subpastas.
- **📖 Página de cardápio:** catálogo visual categorizado com os produtos da casa.

### Em desenvolvimento

- **🛒 Carrinho de compras:** adição e remoção de itens, subtotal dinâmico e finalização do pedido. Veja o [roadmap](#-roadmap).

---

## 🧠 Decisões técnicas

<details>
<summary><b>Por que sem frameworks?</b></summary>

<br>

O objetivo é dominar os fundamentos: DOM, eventos, assincronicidade, CSS moderno e organização de arquivos. Frameworks são ótimos, mas resolvem problemas que só fazem sentido depois de entendermos o problema original.

</details>

<details>
<summary><b>Como funciona a injeção de header e footer?</b></summary>

<br>

O arquivo `src/js/global.js` busca os componentes com a **Fetch API**, insere o HTML retornado na página e **ajusta os caminhos** de links e imagens conforme a profundidade da página atual. Assim, o mesmo `header.html` funciona tanto em `/index.html` quanto em `/src/pages/menu.html`.

```text
index.html            →  src/components/header.html   (caminho a partir da raiz)
src/pages/menu.html   →  ../components/header.html     (caminho a partir da subpasta)
```

**Vantagem:** uma alteração no menu de navegação é feita em um único arquivo e reflete em todo o site.

</details>

<details>
<summary><b>Como o carrossel evita "piscadas" entre os slides?</b></summary>

<br>

As imagens dos banners são carregadas antecipadamente com `new Image()`, de modo que o navegador já as tenha em cache quando a transição de opacidade acontece. O temporizador automático (7s) coexiste com a navegação manual pelos indicadores.

</details>

<details>
<summary><b>Por que a fonte é local?</b></summary>

<br>

A **Montserrat Variable** fica em `assets/fonts/` e é carregada via `@font-face`. Isso elimina a dependência de CDNs externos, melhora a previsibilidade do carregamento e permite diversos pesos em um único arquivo.

</details>

---

## 📂 Arquitetura e estrutura de pastas

```text
MixBite/
├── index.html                  # Página inicial (landing page)
├── LICENSE                     # Licença GNU
├── README.md                   # Documentação do projeto
├── assets/
│   ├── fonts/                  # Tipografia local (Montserrat Variable)
│   └── imgs/
│       ├── brand/              # Identidade visual (logos)
│       ├── home/               # Banners do carrossel, mapa e avatares
│       ├── icons/              # Ícones SVG da interface e redes sociais
│       └── menu/               # Fotografias dos produtos do cardápio
└── src/
    ├── components/
    │   ├── header.html         # Cabeçalho fixo reutilizável
    │   └── footer.html         # Rodapé reutilizável com créditos
    ├── css/
    │   ├── global.css          # Reset, variáveis CSS, fontes, header e footer
    │   ├── home.css            # Estilos da página inicial
    │   ├── menu.css            # Estilos do cardápio
    │   └── carrinho.css        # Estilos da página de carrinho
    ├── js/
    │   ├── global.js           # Injeção de componentes e ajuste de rotas
    │   ├── home.js             # Lógica do carrossel automático/manual
    │   ├── menu.js             # Interações do cardápio
    │   └── carrinho.js         # Lógica do carrinho (em implementação)
    └── pages/
        ├── menu.html           # Página completa do cardápio
        └── carrinho.html       # Página do carrinho de pedidos
```

### Convenção de arquivos

Cada página segue o mesmo padrão: **um HTML, um CSS e um JS próprios**, somados aos arquivos `global.*` compartilhados.

| Camada | Compartilhado | Específico da página |
| :--- | :--- | :--- |
| 🎨 CSS | `global.css` | `home.css` · `menu.css` · `carrinho.css` |
| ⚙️ JS | `global.js` | `home.js` · `menu.js` · `carrinho.js` |
| 🧩 HTML | `header.html` · `footer.html` | `index.html` · `menu.html` · `carrinho.html` |

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| :--- | :--- |
| **HTML5 semântico** | Estrutura acessível e navegação por âncoras |
| **CSS3 modular** | Custom Properties (`:root`), Flexbox, transições e `@font-face` com tipografia variável |
| **JavaScript ES6+** | Manipulação do DOM, pré-carregamento de assets (`new Image()`) e **Fetch API** para componentes |
| **GitHub Pages** | Hospedagem estática gratuita |

---

## 🚀 Como executar localmente

> ⚠️ O projeto usa a **Fetch API** para carregar `header.html` e `footer.html`. Abrir o `index.html` direto pelo navegador (`file://`) é bloqueado por política **CORS**. Use sempre um servidor local.

### Pré-requisitos

- Um navegador moderno (Chrome, Edge, Firefox ou Safari)
- [Git](https://git-scm.com/)
- Um servidor local, com uma das opções abaixo

### 1. Clone o repositório

```bash
git clone https://github.com/ArthurdevjuniorIA/MixBite.git
```
```bash
cd Site-Mixbite-Restaurante
```

### 2. Inicie um servidor local (escolha uma opção)

**Opção A: VS Code + Live Server (recomendado)**

1. Abra a pasta no **Visual Studio Code**.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` → **Open with Live Server** (ou em **Go Live**, no canto inferior direito).

**Opção B: Python**

```bash
python -m http.server 5500
```

Acesse `http://localhost:5500`.

**Opção C: Node.js**

```bash
npx serve .
```

---

## 🩺 Solução de problemas

| Sintoma | Causa provável | Como resolver |
| :--- | :--- | :--- |
| Header e footer não aparecem | Página aberta via `file://` | Rode por um servidor local (veja acima) |
| Erro de CORS no console | Mesmo motivo | Idem |
| Imagens ou CSS quebrados em subpáginas | Caminho relativo incorreto | Confira a profundidade da página e o ajuste de rotas em `global.js` |

---

## 🗺️ Roadmap

- [x] Landing page institucional
- [x] Carrossel promocional com troca automática e manual
- [x] Componentização de header e footer via `fetch`
- [x] Página de cardápio
- [ ] **Carrinho de compras**
  - [ ] Adicionar e remover itens
  - [ ] Alterar quantidades
  - [ ] Calcular subtotal e total dinamicamente
  - [ ] Finalizar pedido (por exemplo, mensagem pronta para WhatsApp)
- [ ] Persistência do carrinho com `localStorage`
- [ ] Filtro e busca por categoria no cardápio
- [ ] Melhorias de acessibilidade (foco visível, `aria-*`, contraste)
- [ ] Auditoria de desempenho com Lighthouse

---

## 🤝 Como contribuir

Contribuições são bem-vindas!

1. Faça um **fork** do projeto.
2. Crie uma branch para sua alteração:
   ```bash
   git checkout -b feat/nome-da-feature
   ```
3. Faça commits claros, seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/):
   ```bash
   git commit -m "feat: adiciona contador de quantidade no carrinho"
   ```
4. Envie para o seu fork:
   ```bash
   git push origin feat/nome-da-feature
   ```
5. Abra um **Pull Request** descrevendo o que mudou e por quê.

### Boas práticas do projeto

- Mantenha **um CSS e um JS por página** e coloque o que é comum em `global.*`.
- Use as **variáveis CSS** de `:root` em vez de valores soltos de cor ou espaçamento.
- Não adicione bibliotecas ou frameworks. A proposta é código puro.
- Comprima as imagens antes de adicioná-las em `assets/imgs/`.

---

## 👨‍💻 Desenvolvedores

Projeto idealizado e desenvolvido em equipe por:

<div align="center">

| Desenvolvedor | GitHub |
| :---: | :---: |
| **Arthur Kauã** | [@ArthurdevjuniorIA](https://github.com/ArthurdevjuniorIA) |
| **Andrew Rafael** | [@andrewqdev](https://github.com/andrewqdev) |
| **Marcus Paulo** | [@marcuspdev](https://github.com/marcuspdev) |

</div>

---

## 📄 Licença

Este projeto está sob a licença **GNU General Public License (GPL)**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes sobre permissões de uso, modificação e distribuição.

---

<div align="center">

Feito com 🍔, 🍕 e muito ☕ em **Natal/RN**

⭐ Se o projeto te ajudou ou inspirou, deixe uma estrela no repositório!

</div>
