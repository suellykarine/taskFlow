import type { Task, TaskStatus } from "../types";

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
