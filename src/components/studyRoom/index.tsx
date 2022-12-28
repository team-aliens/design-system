import { Blank } from './Blank';
import { NoSpace } from './NoSpace';
import { Seat } from './Seat';
import * as S from './styled';

interface SeatType {
  id: string;
  name: string;
  color: string;
}

type SeatStatusType = 'AVAILABLE' | 'UNAVAILABLE' | 'EMPTY';

type SeatStatus = 'IN_USE' | SeatStatusType;

export type seatType = {
  id?: string;
  width_location: number;
  height_location: number;
  number: number | null;
  type: SeatType | null;
  status: SeatStatus;
  student?: {
    id: string;
    gcn: string;
    name: string;
    profile_image_url: string;
  } | null;
};

interface PropsType {
  east_description: string;
  west_description: string;
  south_description: string;
  north_description: string;
  total_width_size: number;
  total_height_size: number;
  seats: seatType[];
  isEdit?: boolean;
  onClickSeat?: (xPosition: number, yPosition: number) => void;
  selectedPosition?: {
    x: number;
    y: number;
  };
}

const arr2Generator = (x: number, y: number) => {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr[i] = [];
    for (let j = 0; j < y; j++) arr[i][j] = 0;
  }
  return arr;
};

export const StudyRoom = ({
  east_description,
  west_description,
  south_description,
  north_description,
  total_height_size,
  total_width_size,
  seats,
  isEdit = false,
  onClickSeat = (x, y) => {},
  selectedPosition = {
    x: -1,
    y: -1,
  },
}: PropsType) => {
  let arr: seatType[][] = arr2Generator(total_height_size, total_width_size);

  for (let i = 0; i < seats.length; i++)
    arr[seats[i].height_location - 1][seats[i].width_location - 1] = seats[i];
  return (
    <S._Wrapper>
      <S._EastDirection size="titleM" color="primaryLighten1">
        {east_description}
      </S._EastDirection>
      <S._WestDirection size="titleM" color="primaryLighten1">
        {west_description}
      </S._WestDirection>
      <S._SouthDirection size="titleM" color="primaryLighten1">
        {south_description}
      </S._SouthDirection>
      <S._NorthDirection size="titleM" color="primaryLighten1">
        {north_description}
      </S._NorthDirection>
      <S._Room>
        {arr.map((seatY, y) => (
          <S._Seats>
            {seatY.map((seat, x) => {
              const isSelected =
                isEdit &&
                selectedPosition?.x === x &&
                selectedPosition?.y === y;
              return (
                <div>
                  {!seat || seat.status === 'EMPTY' ? (
                    <Blank
                      x={x}
                      y={y}
                      isSelected={isSelected}
                      onClickSeat={onClickSeat}
                      isEdit={isEdit}
                    />
                  ) : seat.status === 'UNAVAILABLE' ? (
                    <NoSpace
                      x={x}
                      y={y}
                      isSelected={isSelected}
                      onClickSeat={onClickSeat}
                      isEdit={isEdit}
                    />
                  ) : (
                    <Seat
                      seat={seat}
                      isEdit={isEdit}
                      isSelected={isSelected}
                      onClickSeat={onClickSeat}
                      x={x}
                      y={y}
                    />
                  )}
                </div>
              );
            })}
          </S._Seats>
        ))}
      </S._Room>
    </S._Wrapper>
  );
};
