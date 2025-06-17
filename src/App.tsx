import { Header } from "./components/Header";
import { ReportModal } from "./components/ReportModal";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useTaskReport } from "./Hooks/useTaskReport";
import { useTasks } from "./Hooks/useTasks";
import type { TaskStatus } from "./types";

function App() {
  const { tasks, isLoading, isError, addTask, updateTask, removeTask } =
    useTasks();
  const {
    isReportModalOpen,
    reportData,
    generateReport,
    closeReportModal,
    isGenerating,
  } = useTaskReport();

  const handleUpdateTask = (taskId: number, status: TaskStatus) => {
    updateTask({ taskId, status });
  };

  if (isLoading) {
    return (
      <div
        className="container"
        style={{ textAlign: "center", paddingTop: "4rem" }}
      >
        <h1 className="gradient-text">Carregando TaskFlow...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">Ocorreu um erro ao buscar as tarefas.</div>
    );
  }

  return (
    <main className="container">
      <Header onGenerateReport={generateReport} />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateStatus={handleUpdateTask}
        onDelete={removeTask}
      />
      {isReportModalOpen && reportData && (
        <ReportModal reportData={reportData} onClose={closeReportModal} />
      )}
    </main>
  );
}

export default App;
