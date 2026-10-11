# 💜 Planej.ai — Educador Financeiro com IA

O **Planej.ai** é uma aplicação web de educação e planejamento financeiro que utiliza Inteligência Artificial generativa para ajudar usuários a organizar seu orçamento, definir metas financeiras e receber orientações personalizadas.

Desenvolvido durante o **Bootcamp Santander AI React Front-end 2026**, o projeto foi uma oportunidade de praticar desenvolvimento com React e TypeScript, integração com IA generativa e publicação de uma aplicação web completa.

🌐 **Acesse a aplicação:** [Planej.ai](https://planejai-sabrina-lazdenas.vercel.app/)

📂 **Repositório:** [GitHub — Planej.ai](https://github.com/SabrinaLazdenas/planejai)

---

## ✨ Funcionalidades

### 📊 Simulação financeira

O usuário informa:

- 💰 Renda mensal
- 🏠 Custos fixos
- 💳 Dívidas e parcelas
- 🎯 Nome e valor da meta financeira
- 📅 Prazo para alcançar a meta

A aplicação apresenta os valores relacionados ao planejamento financeiro e a economia mensal necessária para alcançar o objetivo dentro do prazo informado.

### 🤖 Análise financeira com Inteligência Artificial

A integração com a API do Google Gemini permite gerar análises personalizadas com base nos dados da simulação, incluindo:

- ✅ Avaliação da viabilidade da meta
- 🔎 Diagnóstico financeiro
- 💡 Sugestões para reorganização do orçamento
- 💼 Ideias para geração de renda extra
- 📈 Sugestões relacionadas a investimentos
- 🎯 Orientações para apoiar o planejamento financeiro

### 💬 Educador financeiro virtual

O usuário pode conversar com um assistente integrado ao Gemini e fazer perguntas relacionadas à organização financeira e ao planejamento de metas.

### 📚 Histórico de simulações

As simulações podem ser armazenadas localmente no navegador e consultadas posteriormente.

Entre as funcionalidades estão:

- Visualizar metas criadas
- Consultar valores e prazos
- Conferir a economia mensal necessária
- Acessar os detalhes das simulações
- Excluir simulações

### 🎯 Resultados personalizados

Após realizar uma simulação, o usuário pode consultar um resumo com os dados informados, a meta estabelecida e os insights gerados pela IA.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação no projeto |
|---|---|
| React | Construção da interface por componentes |
| TypeScript | Tipagem estática e desenvolvimento |
| Vite | Ambiente de desenvolvimento e build |
| Tailwind CSS | Estilização da interface |
| React Router | Navegação entre páginas |
| Google Gemini API | Geração de análises e respostas com IA |
| LocalStorage | Armazenamento local das simulações |
| Lucide React | Ícones da interface |
| ESLint | Análise estática e qualidade do código |
| Prettier | Formatação do código |

---

## 🧠 Conceitos praticados

Durante o desenvolvimento, foram praticados conceitos como:

- Componentização com React
- Hooks e gerenciamento de estado
- Tipagem com TypeScript
- Navegação com React Router
- Formulários e validações
- Persistência de dados com LocalStorage
- Consumo de APIs REST
- Integração com Inteligência Artificial generativa
- Estruturação de prompts e respostas em JSON
- Cálculos relacionados ao planejamento financeiro
- Design responsivo
- Organização e manutenção do código
- Criação de um endpoint no servidor para intermediar requisições à API de IA
- Configuração de variáveis de ambiente para proteger credenciais

---

## 🔐 Segurança da aplicação

Durante o desenvolvimento do Planej.ai, foram adotadas práticas para proteger as credenciais da integração com Inteligência Artificial e separar as responsabilidades entre o front-end e o servidor.

- **Proteção da chave de API:** a chave do Google Gemini é armazenada na variável de ambiente `GEMINI_API_KEY` do servidor, em vez de ser disponibilizada diretamente no código enviado ao navegador.
- **Endpoint no servidor:** as solicitações ao Gemini são encaminhadas pela função `api/chat.ts`, evitando a exposição direta da credencial no front-end.
- **Validação das requisições:** o endpoint verifica o método HTTP e se a mensagem recebida é válida antes de processá-la.
- **Tratamento de erros:** as respostas de erro são tratadas para evitar a exposição desnecessária de detalhes internos ao usuário.
- **Configuração de ambiente:** as credenciais são configuradas fora do código-fonte, por meio das variáveis de ambiente da plataforma de hospedagem.

Essas medidas representam a aplicação de boas práticas iniciais de desenvolvimento seguro. Elas não substituem testes de segurança, monitoramento, controle de uso da API ou uma auditoria completa da aplicação.

---

## 🤖 Integração com o Google Gemini

O Planej.ai utiliza a API do Google Gemini para gerar análises financeiras e respostas do educador financeiro virtual.

Os dados da simulação são utilizados para construir prompts estruturados. As respostas da IA são processadas pela aplicação e apresentadas na interface em formato organizado.

A comunicação com a API é intermediada por um endpoint no servidor, permitindo manter a chave de acesso fora do código enviado ao navegador.

---

## 🚀 Como executar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- Uma chave de API do [Google AI Studio](https://aistudio.google.com/)

### 1. Clone o repositório

```bash
git clone https://github.com/SabrinaLazdenas/planejai.git
```

### 2. Acesse a pasta do projeto

```bash
cd planejai
```

### 3. Instale as dependências

```bash
pnpm install
```

### 4. Configure a variável de ambiente

Configure a variável `GEMINI_API_KEY` no ambiente do servidor que executa a função `api/chat.ts`.

Na Vercel, a configuração é feita em:

**Settings → Environment Variables**

Para desenvolvimento local, utilize uma configuração compatível com as funções de API da Vercel e mantenha a chave em uma variável de ambiente do servidor.

**Importante:** não coloque a chave em `VITE_GEMINI_API_KEY`, não a escreva diretamente no código e não envie credenciais ao GitHub.

### 5. Execute o projeto

```bash
pnpm dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação.

> **Observação:** o comando `pnpm dev` inicia o servidor de desenvolvimento do Vite. Como o projeto utiliza uma função de API da Vercel, a execução local dessa função também precisa estar configurada. O comando do Vite, isoladamente, pode não disponibilizar o endpoint `/api/chat`.

---

## 🎯 Objetivo do projeto

O objetivo do Planej.ai é transformar conceitos de organização financeira em uma experiência simples, visual e personalizada, utilizando tecnologia e Inteligência Artificial para apoiar o planejamento de metas.

As informações e sugestões geradas pela aplicação têm caráter educativo e não substituem a orientação de um profissional financeiro.

---

## 📚 Aprendizados

O desenvolvimento do Planej.ai proporcionou experiência prática com:

- Desenvolvimento de interfaces com React e TypeScript
- Integração com APIs e Inteligência Artificial generativa
- Gerenciamento de estado e persistência local
- Estruturação de prompts e processamento de respostas
- Publicação de uma aplicação web
- Resolução de problemas técnicos de integração
- Criação de um endpoint no servidor para intermediar chamadas à IA
- Aplicação de boas práticas para proteger credenciais

---

## 👩‍💻 Desenvolvido por

**Sabrina Lazdenas**

Estudante de Engenharia de Software e desenvolvedora em formação, com interesse em desenvolvimento de software, dados, Inteligência Artificial e cibersegurança.

🔗 [GitHub](https://github.com/SabrinaLazdenas)

---

💜 Se você gostou do projeto, fique à vontade para explorar o repositório e testar a aplicação!
