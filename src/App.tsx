import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./Hooks/useTasks";
import type { TaskStatus } from "./types";

function App() {
  const { tasks, isLoading, isError, addTask, updateTask, removeTask } =
    useTasks();

  const handleUpdateTask = (taskId: number, status: TaskStatus) => {
    updateTask({ taskId, status });
  };

  if (isLoading) {
    return <div className="container">Carregando TaskFlow...</div>;
  }

  if (isError) {
    return (
      <div className="container">Ocorreu um erro ao buscar as tarefas.</div>
    );
  }

  return (
    <main className="container">
      <header>
        <h1 className="gradient-text">TaskFlow</h1>
        <button className="report-button">Relatório</button>
      </header>

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onUpdateStatus={handleUpdateTask}
        onDelete={removeTask}
      />
    </main>
  );
}

export default App;
