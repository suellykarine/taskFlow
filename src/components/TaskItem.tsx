import { FiTrash2 } from "react-icons/fi";
import type { Task, TaskStatus } from "../types";

interface TaskItemProps {
  task: Task;
  onUpdateStatus: (taskId: number, newStatus: TaskStatus) => void;
  onDelete: (taskId: number) => void;
}

const statusDetails: Record<TaskStatus, { text: string; icon: string }> = {
  Pendente: { text: "Pendente", icon: "⌛" },
  "Em Andamento": { text: "Andamento", icon: "⚙️" },
  Concluída: { text: "Concluída", icon: "✅" },
};

export const TaskItem = ({ task, onUpdateStatus, onDelete }: TaskItemProps) => {
  const getStatusClass = () => {
    return `status-${task.status.toLowerCase().replace(" ", "-")}`;
  };

  const availableStatuses: TaskStatus[] = [
    "Pendente",
    "Em Andamento",
    "Concluída",
  ];
  const otherStatuses = availableStatuses.filter(
    (status) => status !== task.status
  );

  return (
    <div className="task-item">
      <p className="description">{task.description}</p>

      <div className="task-actions">
        <span className={`status-label ${getStatusClass()}`}>
          {task.status}
        </span>

        <div className="status-buttons">
          {otherStatuses.map((status) => (
            <button
              key={status}
              className={`status-button ${status
                .toLowerCase()
                .replace(" ", "-")}`}
              onClick={() => onUpdateStatus(task.id, status)}
            >
              <span>{statusDetails[status].icon}</span>
              <span>{statusDetails[status].text}</span>
            </button>
          ))}
        </div>

        <button
          className="delete-btn"
          title="Excluir tarefa"
          onClick={() => onDelete(task.id)}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};
