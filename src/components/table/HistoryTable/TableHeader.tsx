import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const COLUMNS = ['유형', '사유', '신청 날짜'];

export function TableHeader() {
  return (
    <StyledHeader>
      {COLUMNS.map((col) => (
        <Cell key={col}>{col}</Cell>
      ))}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 87px minmax(0, 1fr) 156px;
  align-items: center;
  gap: 42px;
  height: 39px;
  flex-shrink: 0;
  border-bottom: 1px solid ${theme.teacherColor.gray[300]};
`;

const Cell = styled.div`
  ${theme.font.bodyM};
  color: ${theme.teacherColor.blue[300]};
  white-space: nowrap;
`;
