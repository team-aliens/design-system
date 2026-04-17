import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

interface PropsType {
  isEdit: boolean;
  isSelected: boolean;
  x: number;
  y: number;
  onClickSeat?: (xPosition: number, yPosition: number) => void;
}

export const Blank = ({ isEdit, onClickSeat, isSelected, x, y }: PropsType) => {
  return (
    <_SeatBlock isEdit={isEdit} isSelected={isSelected}>
      <_Seat onClick={() => isEdit && onClickSeat(x, y)} background={'gray1'} />
    </_SeatBlock>
  );
};

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
