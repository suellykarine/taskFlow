import type { Task, TaskStatus } from "../types";

import initialTasks from "../data/tasks";

let tasks: Task[] = [...initialTasks];

const SIMULATED_DELAY = 500;

export const getTasks = (): Promise<Task[]> => {
  console.log("API MOCK: Buscando tarefas...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("API MOCK: Tarefas retornadas!", tasks);
      resolve([...tasks]);
    }, SIMULATED_DELAY);
  });
};

export const createTask = (description: string): Promise<Task> => {
  console.log("API MOCK: Criando tarefa com descrição:", description);
  return new Promise((resolve) => {
    const newTask: Task = {
      id: Date.now(),
      description,
      status: "Pendente",
    };
    tasks.push(newTask);
    setTimeout(() => {
      console.log("API MOCK: Tarefa criada!", newTask);
      resolve(newTask);
    }, SIMULATED_DELAY);
  });
};

export const updateTaskStatus = (
  taskId: number,
  status: TaskStatus
): Promise<Task> => {
  console.log(`API MOCK: Atualizando tarefa ${taskId} para status ${status}`);
  return new Promise((resolve, reject) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], status };
      setTimeout(() => {
        console.log("API MOCK: Tarefa atualizada!", tasks[taskIndex]);
        resolve(tasks[taskIndex]);
      }, SIMULATED_DELAY);
    } else {
      reject(new Error("Tarefa não encontrada"));
    }
  });
};

export const deleteTask = (taskId: number): Promise<{}> => {
  console.log(`API MOCK: Deletando tarefa ${taskId}`);
  return new Promise((resolve) => {
    tasks = tasks.filter((task) => task.id !== taskId);
    setTimeout(() => {
      console.log(`API MOCK: Tarefa ${taskId} deletada.`);
      resolve({});
    }, SIMULATED_DELAY);
  });
};
