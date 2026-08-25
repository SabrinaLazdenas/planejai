# 💜 Planejaí — Educador Financeiro com IA

O **Planejaí** é uma aplicação web de educação e planejamento financeiro que utiliza **Inteligência Artificial generativa** para analisar o perfil financeiro do usuário, auxiliar na definição de metas e oferecer orientações personalizadas.

Projeto desenvolvido durante o **Bootcamp Santander AI React Front-end 2026**, com foco na prática de React, TypeScript, integração com API de IA e construção de uma aplicação completa.

---

## ✨ Funcionalidades

### 📊 Simulação financeira

O usuário informa:

* 💰 Renda mensal
* 🏠 Custos fixos de vida
* 💳 Dívidas e parcelas
* 🎯 Nome da meta financeira
* 💵 Valor da meta
* 📅 Prazo desejado

A aplicação calcula o valor disponível mensalmente e a economia necessária para alcançar o objetivo dentro do prazo.

### 🤖 Análise financeira com Inteligência Artificial

O Planejaí utiliza a **API do Google Gemini** para gerar uma análise personalizada a partir dos dados da simulação.

A IA fornece:

* ✅ Avaliação da viabilidade da meta
* 🔎 Diagnóstico financeiro
* 💡 Sugestões para reorganização do orçamento
* 💼 Ideias para geração de renda extra
* 📈 Sugestões de investimento
* 🎯 Orientações personalizadas

### 💬 Educador Financeiro

O usuário pode conversar diretamente com o educador financeiro através de um **chat integrado ao Gemini**, fazendo perguntas relacionadas à sua organização financeira.

### 📚 Histórico de simulações

As simulações realizadas ficam armazenadas localmente e podem ser consultadas posteriormente.

É possível:

* Visualizar metas criadas
* Conferir valores e prazos
* Consultar a economia mensal necessária
* Acessar detalhes das simulações
* Excluir simulações

### 🎯 Resultados personalizados

Após realizar uma simulação, o usuário recebe um resumo contendo:

* 💰 Valor da meta
* 📅 Prazo
* 💵 Economia mensal necessária
* 📊 Renda mensal
* 🏠 Custos fixos
* 💳 Dívidas e parcelas
* 🤖 Insights gerados pela IA

---

## 🛠️ Tecnologias utilizadas

| Tecnologia           | Utilização                  |
| -------------------- | --------------------------- |
| ⚛️ React             | Construção da interface     |
| 🔷 TypeScript        | Tipagem e desenvolvimento   |
| ⚡ Vite               | Ambiente de desenvolvimento |
| 🎨 Tailwind CSS      | Estilização                 |
| 🧭 React Router      | Navegação entre páginas     |
| 🤖 Google Gemini API | Inteligência Artificial     |
| 💾 LocalStorage      | Persistência das simulações |
| 🧩 Lucide React      | Ícones                      |
| 🔍 ESLint            | Qualidade do código         |
| ✨ Prettier           | Formatação                  |

---

## 🧠 Conceitos praticados

Durante o desenvolvimento foram aplicados conceitos de:

* Componentização com React
* Hooks
* TypeScript
* Gerenciamento de estado
* React Router
* Formulários e validações
* Persistência de dados com LocalStorage
* Consumo de API REST
* Integração com Inteligência Artificial generativa
* Estruturação de prompts
* Tratamento de respostas da IA
* Estruturação de respostas em JSON
* Cálculos financeiros
* Design responsivo
* Organização de código

---

## 🤖 Integração com Gemini

A aplicação utiliza a **API do Google Gemini** para gerar análises financeiras e respostas do educador financeiro.

Os dados da simulação são utilizados para construir um prompt estruturado, permitindo que a IA gere respostas personalizadas que são posteriormente apresentadas na interface da aplicação.

> ⚠️ Para utilizar a integração com o Gemini, é necessário configurar uma API Key própria através de uma variável de ambiente.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SabrinaLazdenas/planejai.git
```

### 2. Acesse a pasta

```bash
cd planejai
```

### 3. Instale as dependências

```bash
pnpm install
```

### 4. Configure a API do Gemini

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_GEMINI_API_KEY=sua_api_key_aqui
```

### 5. Execute o projeto

```bash
pmpn dev
```

O Vite disponibilizará a aplicação no endereço indicado pelo terminal.

---

## 📌 Objetivo do projeto

O objetivo do **Planejaí** é transformar conceitos de organização financeira em uma experiência simples, visual e personalizada, utilizando tecnologia e Inteligência Artificial para auxiliar o usuário no planejamento de suas metas financeiras.

---

## 📚 Sobre o desenvolvimento

Este projeto foi desenvolvido como parte do processo de aprendizado em **React e Inteligência Artificial**, permitindo colocar em prática conhecimentos de desenvolvimento Front-end, integração com APIs, gerenciamento de estado, persistência de dados e utilização de IA generativa.

O projeto também proporcionou experiência na resolução de problemas reais durante o desenvolvimento, incluindo integração e atualização da API do Gemini.

---

## 👩‍💻 Desenvolvido por

**Sabrina Lazdenas**

Estudante de Engenharia de Software e desenvolvedora em formação, com interesse em desenvolvimento de software, Inteligência Artificial e tecnologia.

---

😊 **Se você gostou do projeto, fique à vontade para explorar o código!**

