import * as S from './styled';

interface PropsType {
  isEdit: boolean;
  isSelected: boolean;
  x: number;
  y: number;
  onClickSeat?: (xPosition: number, yPosition: number) => void;
}

export const Blank = ({ isEdit, onClickSeat, isSelected, x, y }: PropsType) => {
  return (
    <S._SeatBlock isEdit={isEdit} isSelected={isSelected}>
      <S._Seat
        onClick={() => isEdit && onClickSeat(x, y)}
        background={'gray1'}
      />
    </S._SeatBlock>
  );
};
