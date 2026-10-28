import styled from 'styled-components';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableProps } from './types';

export function Table(props: TableProps) {
  const { variant, onRowClick } = props;

  const checkableProps = variant !== 'DORMITORY_TEACHER' ? props : null;

  const selectedIds = checkableProps?.selectedIds ?? [];

  // GENERAL_TEACHER는 요청 중(PENDING)인 신청만 선택할 수 있다
  const selectableIds = (
    (checkableProps?.data ?? []) as {
      application_id: string;
      status?: string;
    }[]
  )
    .filter(
      (item) => variant !== 'GENERAL_TEACHER' || item.status === 'PENDING'
    )
    .map((item) => item.application_id);

  const allChecked =
    checkableProps !== null &&
    selectableIds.length > 0 &&
    selectableIds.every((id) => selectedIds.includes(id));

  const handleAllCheck = () => {
    if (!checkableProps) return;
    if (allChecked) {
      checkableProps.onSelectChange([]);
    } else {
      checkableProps.onSelectChange(selectableIds);
    }
  };

  const handleCheck = (id: string) => {
    if (!checkableProps) return;
    if (!selectableIds.includes(id)) return;
    if (selectedIds.includes(id)) {
      checkableProps.onSelectChange(selectedIds.filter((v) => v !== id));
    } else {
      checkableProps.onSelectChange([...selectedIds, id]);
    }
  };

  return (
    <StyledTable>
      <TableHeader
        variant={variant}
        allChecked={allChecked}
        onAllCheck={handleAllCheck}
      />
      <div>
        {props.data.map((item) => {
          if (variant === 'DORMITORY_TEACHER') {
            return (
              <TableRow
                key={item.application_id}
                variant="DORMITORY_TEACHER"
                data={item}
                onRowClick={onRowClick}
              />
            );
          }
          return (
            <TableRow
              key={item.application_id}
              variant={variant}
              data={item}
              checked={checkableProps!.selectedIds.includes(
                item.application_id
              )}
              onCheck={handleCheck}
              onRowClick={onRowClick}
            />
          );
        })}
      </div>
    </StyledTable>
  );
}

const StyledTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
