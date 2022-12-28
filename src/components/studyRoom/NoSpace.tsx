import * as S from './styled';

interface PropsType {
  isEdit: boolean;
  isSelected: boolean;
  x: number;
  y: number;
  onClickSeat?: (xPosition: number, yPosition: number) => void;
}

export const NoSpace = ({
  isEdit,
  onClickSeat,
  isSelected,
  x,
  y,
}: PropsType) => {
  console.log(x, y);
  return (
    <S._SeatBlock isEdit={isEdit} isSelected={isSelected}>
      <S._Seat
        onClick={() => isEdit && onClickSeat(x, y)}
        display="inline-block"
        background={'#DDDDDD'}
        color="gray1"
        size="bodyS"
      >
        사용불가
      </S._Seat>
    </S._SeatBlock>
  );
};
