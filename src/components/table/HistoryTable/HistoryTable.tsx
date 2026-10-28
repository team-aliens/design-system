import styled from 'styled-components';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { HistoryTableProps } from './types';
import { useReachEnd } from '../../../hooks/useReachEnd';
import { getSortedDates } from '../../../utils/date';

export function HistoryTable(props: HistoryTableProps) {
  const { data, onRowClick, onReachEnd } = props;
  const sentinelRef = useReachEnd(onReachEnd);

  return (
    <StyledTable>
      <TableHeader />
      <RowContainer>
        {data.map((item) => (
          <TableRow
            key={item.application_id}
            data={{ ...item, dates: getSortedDates(item.dates) }}
            onRowClick={onRowClick}
          />
        ))}
        {onReachEnd && <div ref={sentinelRef} />}
      </RowContainer>
    </StyledTable>
  );
}

const StyledTable = styled.div`
  width: 100%;
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const RowContainer = styled.div`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
