export interface StudyHistoryRequest {
  application_id: string;
  type_name: string;
  created_at: string;
  start_date: string;
  end_date: string;
  reason: string;
  student_name: string;
  student_gcn: string;
  teacher_name: string;
}

export interface HistorySidebarProps {
  data: StudyHistoryRequest[];
  close: () => void;
  onApprove: () => void;
  onReject: () => void;
}
