import type { TasksReport } from "../types";

interface ReportModalProps {
  reportData: TasksReport;
  onClose: () => void;
}

export const ReportModal = ({ reportData, onClose }: ReportModalProps) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="gradient-text">Relatório de Tarefas</h2>

        <p className="gradient-text">
          <strong>Total de Tarefas:</strong>{" "}
          {reportData["quantidade total de tarefas"]}
        </p>

        <div className="report-section section-completed">
          <h3>Concluídas ({reportData["tarefas concluidas"].quantidade})</h3>
          <ul>
            {reportData["tarefas concluidas"].tarefas.map((task) => (
              <li key={task.tarefa_id}>
                <strong>{task.descricao}</strong>
                <small>
                  Criada em: {formatDate(task.data_criacao)} | Concluída em:{" "}
                  {formatDate(task.data_conclusao)}
                </small>
              </li>
            ))}
          </ul>
        </div>

        <div className="report-section section-pending">
          <h3>Pendentes ({reportData["tarefas pendentes"].quantidade})</h3>
          <ul>
            {reportData["tarefas pendentes"].tarefas.map((task) => (
              <li key={task.tarefa_id}>
                <strong>{task.descricao}</strong>
                <small>Criada em: {formatDate(task.data_criacao)}</small>
              </li>
            ))}
          </ul>
        </div>
        <div className="report-section section-waiting">
          <h3>
            Em andamento ({reportData["tarefas em andamento"].quantidade})
          </h3>
          <ul>
            {reportData["tarefas pendentes"].tarefas.map((task) => (
              <li key={task.tarefa_id}>
                <strong>{task.descricao}</strong>
                <small>Criada em: {formatDate(task.data_criacao)}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
