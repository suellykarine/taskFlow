import type { Task, TasksReport, TaskStatus } from "../types";

import initialTasks from "../data/tasks";

let tasks: Task[] = [...initialTasks];

const SIMULATED_DELAY = 500;

export const getTasks = (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...tasks]);
    }, SIMULATED_DELAY);
  });
};

export const createTask = (description: string): Promise<Task> => {
  return new Promise((resolve) => {
    const newTask: Task = {
      id: Date.now(),
      description,
      status: "Pendente",
    };
    tasks.push(newTask);
    setTimeout(() => {
      resolve(newTask);
    }, SIMULATED_DELAY);
  });
};

export const updateTaskStatus = (
  taskId: number,
  status: TaskStatus
): Promise<Task> => {
  return new Promise((resolve, reject) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], status };
      setTimeout(() => {
        resolve(tasks[taskIndex]);
      }, SIMULATED_DELAY);
    } else {
      reject(new Error("Tarefa não encontrada"));
    }
  });
};

export const deleteTask = (taskId: number): Promise<{}> => {
  return new Promise((resolve) => {
    tasks = tasks.filter((task) => task.id !== taskId);
    setTimeout(() => {
      resolve({});
    }, SIMULATED_DELAY);
  });
};

export const getTasksReport = (): Promise<TasksReport> => {
  const tarefasConcluidas = tasks.filter((t) => t.status === "Concluída");
  const tarefasPendentes = tasks.filter((t) => t.status === "Pendente");
  const tarefasEmAndamento = tasks.filter((t) => t.status === "Em Andamento");

  const dynamicReport: TasksReport = {
    "quantidade total de tarefas": tasks.length,
    "tarefas concluidas": {
      quantidade: tarefasConcluidas.length,

      tarefas: tarefasConcluidas.map((t) => ({
        tarefa_id: t.id,
        descricao: t.description,
        status: t.status.toLowerCase(),
        data_criacao: new Date().toISOString(),
        data_conclusao: new Date().toISOString(),
      })),
    },
    "tarefas pendentes": {
      quantidade: tarefasPendentes.length,
      tarefas: tarefasPendentes.map((t) => ({
        tarefa_id: t.id,
        descricao: t.description,
        status: t.status.toLowerCase(),
        data_criacao: new Date().toISOString(),
        data_conclusao: null,
      })),
    },
    "tarefas em andamento": {
      quantidade: tarefasEmAndamento.length,
      tarefas: tarefasEmAndamento.map((t) => ({
        tarefa_id: t.id,
        descricao: t.description,
        status: t.status.toLowerCase(),
        data_criacao: new Date().toISOString(),
        data_conclusao: null,
      })),
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dynamicReport);
    }, 500);
  });
};
