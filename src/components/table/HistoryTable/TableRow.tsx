import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { HistoryTableItem } from './types';

type TableRowProps = {
  data: HistoryTableItem;
  onRowClick: (id: string) => void;
};

export function TableRow(props: TableRowProps) {
  const { data, onRowClick } = props;

  return (
    <StyledRow onClick={() => onRowClick(data.application_id)}>
      <Cell $fontSize={theme.font.bodyM}>{data.type_name}</Cell>
      <Cell>{data.reason}</Cell>
      <Cell>{`${data.start_date} ~ ${data.end_date}`}</Cell>
    </StyledRow>
  );
}

const StyledRow = styled.div`
  height: 54px;
  flex: 0 0 54px;
  display: grid;
  grid-template-columns: 92px 1fr 159px;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  transition: background 0.15s ease;
`;

const Cell = styled.div<{ $fontSize?: string }>`
  display: flex;
  ${({ $fontSize }) => ($fontSize ? $fontSize : theme.font.bodyS)};
  color: ${theme.teacherColor.gray[600]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
