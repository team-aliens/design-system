export type StudyStatus =
  | 'PENDING'
  | 'FIRST_APPROVED'
  | 'SECOND_APPROVED'
  | 'REJECTED';

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
  /** 넘기지 않으면 이름 옆 상태 뱃지를 그리지 않는다 */
  status?: StudyStatus;
}

export interface HistorySidebarProps {
  data: StudyHistoryRequest[];
  close: () => void;
  onApprove: () => void;
  onReject: () => void;
}
