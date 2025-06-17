import { useTaskForm } from "../Hooks/useTaskForm";

interface TaskFormProps {
  onAddTask: (description: string) => void;
}

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const { description, setDescription, handleSubmit } = useTaskForm(onAddTask);

  return (
    <section className="form-section">
      <h2 className="gradient-text">Adicionar Nova Tarefa</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ex: Estilizar a aplicação com SASS..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="add-task-button">
          <span>+</span>
          <span>Adicionar</span>
        </button>
      </form>
    </section>
  );
};
