import type { Task } from "../types";

const MOCKED_TASKS: Task[] = [
  {
    id: 1,
    description: "Configurar o design da aplicação no HTML/CSS",
    status: "Concluída",
  },
  {
    id: 2,
    description: "Criar a estrutura de pastas e arquivos do projeto React",
    status: "Concluída",
  },
  {
    id: 3,
    description: "Definir os tipos e dados mocados das tarefas",
    status: "Em Andamento",
  },
  {
    id: 4,
    description: "Criar o componente TaskItem para exibir uma tarefa",
    status: "Pendente",
  },
  {
    id: 5,
    description: "Conectar o projeto ao GitHub",
    status: "Concluída",
  },
];

export default MOCKED_TASKS;
