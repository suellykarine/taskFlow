import { useState, type FormEvent } from "react";

export const useTaskForm = (onAddTask: (description: string) => void) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (description.trim() === "") {
      alert("Por favor, digite a descrição da tarefa.");
      return;
    }

    onAddTask(description);
    setDescription("");
  };

  return {
    description,
    setDescription,
    handleSubmit,
  };
};
