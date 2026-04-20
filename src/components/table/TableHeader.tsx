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
          <CheckBox status={allChecked} onChange={onAllCheck} />
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
  gap: 60px;
  height: 80px;
  background: ${theme.teacherColor.blue[50]};
  border: 1px solid ${theme.teacherColor.blue[100]};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
`;

const Cell = styled.div`
  ${theme.font.headlineS};
  color: ${theme.teacherColor.blue[200]};
  white-space: nowrap;
`;
