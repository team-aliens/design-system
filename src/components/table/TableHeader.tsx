import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { TableVariant } from './types';
import { CheckBox } from '../checkBox';
import { GRID_TEMPLATE } from './constants';

interface TableHeaderProps {
  variant: TableVariant;
  allChecked: boolean;
  onAllCheck: () => void;
}

const COLUMNS: Record<TableVariant, string[]> = {
  HEAD_TEACHER: [
    '학번이름',
    '신청날짜',
    '유형',
    '담당 선생님',
    '신청사유',
    '기간',
  ],
  GENERAL_TEACHER: ['학번이름', '신청날짜', '유형', '신청사유', '기간', '상태'],
  DORMITORY_TEACHER: [
    '학번이름',
    '신청날짜',
    '유형',
    '담당 선생님',
    '신청사유',
    '기간',
  ],
};

export function TableHeader({
  variant,
  allChecked,
  onAllCheck,
}: TableHeaderProps) {
  return (
    <StyledHeader $variant={variant}>
      {variant !== 'DORMITORY_TEACHER' && (
        <Cell>
          <CheckBox
            variant="teacherHeader"
            status={allChecked}
            onChange={onAllCheck}
          />
        </Cell>
      )}
      {COLUMNS[variant].map((col) => (
        <Cell key={col}>{col}</Cell>
      ))}
    </StyledHeader>
  );
}

const StyledHeader = styled.div<{ $variant: TableVariant }>`
  display: grid;
  grid-template-columns: ${({ $variant }) => GRID_TEMPLATE[$variant]};
  align-items: center;
  padding: 0 40px;
  gap: 40px;
  height: 80px;
  background: ${theme.teacherColor.blue[300]};
  border: 1px solid ${theme.teacherColor.blue[100]};
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

const Cell = styled.div`
  text-align: center;
  ${theme.font.bodyL};
  color: ${theme.teacherColor.gray[50]};
  white-space: nowrap;
`;
