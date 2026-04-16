import styled from 'styled-components';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableProps } from './types';

export function Table(props: TableProps) {
  const { variant, onRowClick } = props;

  const checkableProps = variant !== 'DORMITORY_TEACHER' ? props : null;

  const selectedIds = checkableProps?.selectedIds ?? [];

  const allChecked =
  checkableProps !== null &&
  selectedIds.length > 0 &&
  (checkableProps.data as { application_id: string }[]).every((item) =>
    selectedIds.includes(item.application_id)
  );

  const handleAllCheck = () => {
    if (!checkableProps) return;
    if (allChecked) {
      checkableProps.onSelectChange([]);
    } else {
      checkableProps.onSelectChange(
        (checkableProps.data as { application_id: string }[]).map(
          (item) => item.application_id
        )
      );
    }
  };

  const handleCheck = (id: string) => {
    if (!checkableProps) return;
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
              checked={checkableProps!.selectedIds.includes(item.application_id)}
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