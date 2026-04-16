import { Status } from '../badge/StatusBadge/StatusBadge';

export type TableVariant = 'HEAD_TEACHER' | 'GENERAL_TEACHER' | 'DORMITORY_TEACHER';

interface BaseStudyRequest {
  application_id: string;
  type_name: string;
  created_at: string;
  start_date: string;
  end_date: string;
  reason: string;
  student_name: string;
  student_gcn: string;
}

export interface GeneralStudyRequest extends BaseStudyRequest {
  status: Status;
}

export interface HeadStudyRequest extends BaseStudyRequest {
  teacher_name: string;
}

export interface DormitoryStudyRequest extends BaseStudyRequest {
  teacher_name: string;
}

interface BaseTableProps {
  onRowClick: (id: string) => void;
}

interface HeadTeacherTableProps extends BaseTableProps {
  variant: 'HEAD_TEACHER';
  data: HeadStudyRequest[];
  selectedIds: string[];
  onSelectChange: (ids: string[]) => void;
}

interface GeneralTeacherTableProps extends BaseTableProps {
  variant: 'GENERAL_TEACHER';
  data: GeneralStudyRequest[];
  selectedIds: string[];
  onSelectChange: (ids: string[]) => void;
}

interface DormitoryTeacherTableProps extends BaseTableProps {
  variant: 'DORMITORY_TEACHER';
  data: DormitoryStudyRequest[];
}

export type TableProps =
  | HeadTeacherTableProps
  | GeneralTeacherTableProps
  | DormitoryTeacherTableProps;