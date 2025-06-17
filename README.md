# ✨ TaskFlow

Um gerenciador de tarefas simples e moderno, desenvolvido front-end com React, TypeScript e ferramentas modernas.

## 🚀 Funcionalidades

* **Gerenciamento Completo de Tarefas (CRUD):**
    * **Criar:** Adicionar novas tarefas com uma descrição.
    * **Ler:** Visualizar a lista completa de tarefas.
    * **Atualizar:** Alterar o status de uma tarefa entre `Pendente`, `Em Andamento` e `Concluída`.
    * **Deletar:** Remover tarefas da lista.
* **Geração de Relatório:** Visualizar um resumo quantitativo de tarefas pendentes e concluídas em uma janela modal.
* **Interface Reativa:** As atualizações na lista de tarefas são refletidas na tela instantaneamente, usando técnicas de atualização otimista para uma melhor experiência do usuário.
* **Design Moderno:** Interface limpa com efeitos de degradê e animações sutis para uma interação agradável.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias no front-end:

* **[React](https://react.dev/)**: Biblioteca principal para a construção da interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Para adicionar tipagem estática e segurança ao código JavaScript.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida para o desenvolvimento.
* **[SASS/SCSS](https://sass-lang.com/)**: Pré-processador CSS para estilos mais organizados e poderosos.
* **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Para gerenciamento de estado do servidor, cache, re-fetching e mutações de forma eficiente.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Para a utilização de ícones consistentes e de alta qualidade na interface.

---

## 🏁 Começando

Siga as instruções abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/suellykarine/taskFlow
    ```
  

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd taskflow
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` ).

---

## 📁 Arquitetura do Projeto

O projeto segue uma arquitetura de componentes bem definida para promover a separação de responsabilidades:

* **`src/components/`**: Contém todos os componentes React reutilizáveis e de apresentação (ex: `TaskItem`, `TaskList`, `Header`).
* **`src/hooks/`**: Onde reside a lógica de negócio. Hooks customizados (`useTasks`, `useTaskReport`) isolam a complexidade do gerenciamento de estado e da comunicação com a API.
* **`src/services/`**: Responsável pela comunicação com a API. Atualmente contém uma API "mocado" que simula as respostas do backend.
* **`src/types/`**: Centraliza todas as definições de tipos e interfaces do TypeScript.
* **`src/assets/scss/`**: Contém os arquivos de estilo SASS, organizados em uma estrutura de base e componentes.

---

## 🔌 API Backend

Este projeto foi desenhado para consumir uma API backend desenvolvida em **Python/Django**. Atualmente, o front-end está operando com uma **API mocado** para permitir o desenvolvimento e teste independentes da interface. A integração com a API real seria o próximo grande passo, substituindo as funções mocadas por chamadas de rede reais.

### API a ser implentada
https://github.com/suellykarine/api-task-flow

---

