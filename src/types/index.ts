export type TaskStatus = "Pendente" | "Em Andamento" | "Concluída";

export interface Task {
  id: number;
  description: string;
  status: TaskStatus;
}
