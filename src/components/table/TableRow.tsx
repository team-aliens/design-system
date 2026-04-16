import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { TypeBadge } from '../badge/TypeBadge/TypeBadge';
import { StatusBadge } from '../badge/StatusBadge/StatusBadge';
import { CheckBox } from '../checkBox';
import {
  HeadStudyRequest,
  GeneralStudyRequest,
  DormitoryStudyRequest,
  TableVariant,
} from './types';
import { GRID_TEMPLATE } from './constants';

type TableRowProps =
  | {
      variant: 'HEAD_TEACHER';
      data: HeadStudyRequest;
      checked: boolean;
      onCheck: (id: string) => void;
      onRowClick: (id: string) => void;
    }
  | {
      variant: 'GENERAL_TEACHER';
      data: GeneralStudyRequest;
      checked: boolean;
      onCheck: (id: string) => void;
      onRowClick: (id: string) => void;
    }
  | {
      variant: 'DORMITORY_TEACHER';
      data: DormitoryStudyRequest;
      onRowClick: (id: string) => void;
    };

export function TableRow(props: TableRowProps) {
  const { variant, data, onRowClick } = props;

  return (
    <StyledRow $variant={variant}>
      {variant !== 'DORMITORY_TEACHER' && (
        <Cell onClick={(e) => e.stopPropagation()}>
          <CheckBox
            status={props.checked}
            onChange={() => props.onCheck(data.application_id)}
          />
        </Cell>
      )}
      <Cell $color={theme.teacherColor.gray[600]}>
        {`${data.student_gcn} ${data.student_name}`}
      </Cell>
      <Cell $color={theme.teacherColor.gray[400]}>
        {data.created_at.slice(0, 10)}
      </Cell>
      <Cell>
        <TypeBadge label={data.type_name} />
      </Cell>
      {(variant === 'HEAD_TEACHER' || variant === 'DORMITORY_TEACHER') && (
        <Cell $color={theme.teacherColor.gray[500]}>{data.teacher_name}</Cell>
      )}
      <Cell
        $color={theme.teacherColor.gray[600]}
        onClick={() => onRowClick(data.application_id)}
      >
        {data.reason}
      </Cell>
      <Cell $color={theme.teacherColor.gray[400]}>
        {`${data.start_date} ~ ${data.end_date}`}
      </Cell>
      {variant === 'GENERAL_TEACHER' && (
        <Cell>
          <StatusBadge status={data.status} />
        </Cell>
      )}
    </StyledRow>
  );
}

const StyledRow = styled.div<{ $variant: TableVariant }>`
  display: grid;
  grid-template-columns: ${({ $variant }) => GRID_TEMPLATE[$variant]};
  align-items: center;
  padding: 0 40px;
  gap: 60px;
  height: 80px;
  border-bottom: 1px solid ${theme.teacherColor.blue[50]};
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${theme.teacherColor.gray[50]};
  }
`;

const Cell = styled.div<{ $color?: string }>`
  font-size: ${theme.font.headlineS};
  color: ${({ $color }) => $color ?? 'inherit'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
