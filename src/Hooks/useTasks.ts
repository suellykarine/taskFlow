import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "../services/api";
import type { Task, TaskStatus } from "../types";

export const useTasks = () => {
  const queryClient = useQueryClient();

  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const { mutate: addTask } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: updateTask } = useMutation({
    mutationFn: (variables: { taskId: number; status: TaskStatus }) =>
      updateTaskStatus(variables.taskId, variables.status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: removeTask } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return {
    tasks: tasks || [],
    isLoading,
    isError,
    addTask,
    updateTask,
    removeTask,
  };
};
