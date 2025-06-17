import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getTasksReport } from "../services/api";
import type { TasksReport } from "../types";

export const useTaskReport = () => {
  const queryClient = useQueryClient();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportData, setReportData] = useState<TasksReport | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = async () => {
    setIsGenerating(true);

    const data = await queryClient.fetchQuery({
      queryKey: ["taskReport"],
      queryFn: getTasksReport,
    });
    setReportData(data);
    setIsReportModalOpen(true);
    setIsGenerating(false);
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
    setReportData(null);
  };

  return {
    isReportModalOpen,
    isGenerating,
    reportData,
    generateReport,
    closeReportModal,
  };
};
