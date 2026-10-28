import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { HistoryTableItem } from './types';

type TableRowProps = {
  data: HistoryTableItem;
  onRowClick: (id: string) => void;
};

export function TableRow(props: TableRowProps) {
  const { data, onRowClick } = props;
  const { dates } = data;

  return (
    <StyledRow onClick={() => onRowClick(data.application_id)}>
      <Cell $fontSize={theme.font.bodyM}>{data.type_name}</Cell>
      <Cell>{data.reason}</Cell>
      <_Dates>
        {dates[0]?.replace(/-/g, '.')}
        {dates.length > 1 && <_Count>+{dates.length - 1}</_Count>}
      </_Dates>
    </StyledRow>
  );
}

const StyledRow = styled.div`
  height: 54px;
  flex: 0 0 54px;
  display: grid;
  grid-template-columns: 87px minmax(0, 1fr) 156px;
  align-items: center;
  gap: 42px;
  cursor: pointer;
  transition: background 0.15s ease;
`;

const Cell = styled.div<{ $fontSize?: string }>`
  display: block;
  ${({ $fontSize }) => ($fontSize ? $fontSize : theme.font.bodyS)};
  color: ${theme.teacherColor.gray[600]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const _Dates = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  ${theme.font.bodyS}
  color: ${theme.teacherColor.gray[600]};
  white-space: nowrap;
`;

const _Count = styled.span`
  padding: 2px 8px;
  border-radius: 999px;
  ${theme.font.captionM}
  line-height: 14px;
  background: ${theme.teacherColor.blue[50]};
  color: ${theme.teacherColor.blue[300]};
`;
