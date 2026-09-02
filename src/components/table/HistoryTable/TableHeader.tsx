import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { CheckBox } from '../../checkBox';
import { GRID_TEMPLATE } from '../constants';

const COLUMNS = ['유형', '사유', '기간'];

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
  grid-template-columns: 92px 1fr 159px;
  align-items: center;
  gap: 24px;
  height: 39px;
  border-bottom: 1px solid ${theme.teacherColor.gray[300]};
`;

const Cell = styled.div`
  ${theme.font.bodyM};
  color: ${theme.teacherColor.blue[300]};
  white-space: nowrap;
`;
