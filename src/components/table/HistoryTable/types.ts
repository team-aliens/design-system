export interface HistoryTableItem {
  application_id: string;
  type_name: string;
  start_date: string;
  end_date: string;
  reason: string;
}

export interface HistoryTableProps {
  data: HistoryTableItem[];
  onRowClick: (id: string) => void;
}
