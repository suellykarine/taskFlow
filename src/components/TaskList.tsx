import type { Task, TaskStatus } from "../types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onUpdateStatus: (taskId: number, status: TaskStatus) => void;
  onDelete: (taskId: number) => void;
}

export const TaskList = ({
  tasks,
  onUpdateStatus,
  onDelete,
}: TaskListProps) => {
  return (
    <section className="task-list-section">
      <h2 className="gradient-text">Minhas Tarefas</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};
