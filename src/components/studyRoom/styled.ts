import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

 const _Seat = styled(Text)<{ background: string }>`
  min-width: 80px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  background-color: ${({ background }) => background};
`;

const _SeatBlock = styled.div<{
  isEdit: boolean;
  isSelected: boolean;
}>`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid
    ${({ theme, isSelected, isEdit }) =>
      isEdit ? (isSelected ? theme.color.primary : theme.color.gray4) : 'none'};
`;
