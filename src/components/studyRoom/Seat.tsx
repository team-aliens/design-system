import * as S from './styled';
import { seatType } from '.';

interface PropsType {
  isEdit: boolean;
  isSelected: boolean;
  x: number;
  y: number;
  seat: seatType;
  onClickSeat?: (xPosition: number, yPosition: number) => void;
}

export const Seat = ({
  isEdit,
  isSelected,
  onClickSeat,
  y,
  x,
  seat,
}: PropsType) => {
  return (
    <S._SeatBlock isEdit={isEdit} isSelected={isSelected}>
      <S._Seat
        onClick={() => isEdit && onClickSeat(x, y)}
        display="inline-block"
        background={seat.type ? seat.type?.color : '#b1d0ff'}
        color="gray1"
        size="bodyS"
      >
        {seat.student ? seat.student.name : seat.number}
      </S._Seat>
    </S._SeatBlock>
  );
};
