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
  /** 목록 끝까지 스크롤했을 때 호출된다. 다음 장을 불러오는 데 쓴다 */
  onReachEnd?: () => void;
}
