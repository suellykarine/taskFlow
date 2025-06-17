export type TaskStatus = "Pendente" | "Em Andamento" | "Concluída";

export interface Task {
  id: number;
  description: string;
  status: TaskStatus;
}

export interface ReportTask {
  tarefa_id: number;
  descricao: string;
  status: string;
  data_criacao: string;
  data_conclusao: string | null;
}

export interface ReportSection {
  quantidade: number;
  tarefas: ReportTask[];
}

export interface TasksReport {
  "quantidade total de tarefas": number;
  "tarefas concluidas": ReportSection;
  "tarefas pendentes": ReportSection;
  "tarefas em andamento": ReportSection;
}
