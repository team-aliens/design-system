import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

interface SeatType {
  id: string;
  name: string;
  color: string;
}

type SeatStatusType = 'AVAILABLE' | 'UNAVAILABLE' | 'EMPTY';

type SeatStatus = 'IN_USE' | SeatStatusType;

type seatType = {
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
  let arr: seatType[][] = arr2Generator(total_width_size, total_height_size);

  for (let i = 0; i < seats.length; i++)
    arr[seats[i].width_location - 1][seats[i].height_location - 1] = seats[i];
  console.log(arr);
  return (
    <_Wrapper>
      <_EastDirection size="titleM" color="primaryLighten1">
        {east_description}
      </_EastDirection>
      <_WestDirection size="titleM" color="primaryLighten1">
        {west_description}
      </_WestDirection>
      <_SouthDirection size="titleM" color="primaryLighten1">
        {south_description}
      </_SouthDirection>
      <_NorthDirection size="titleM" color="primaryLighten1">
        {north_description}
      </_NorthDirection>
      <_Room>
        {arr.map((seatY, y) => (
          <_Seats>
            {seatY.map((seat, x) => (
              <>
                {!seat || seat.status === 'EMPTY' ? (
                  <_SeatBlock
                    isEdit={isEdit}
                    isSelected={
                      isEdit &&
                      selectedPosition?.x === x &&
                      selectedPosition?.y === y
                    }
                  >
                    <_Seat
                      onClick={() => isEdit && onClickSeat(x, y)}
                      background={'gray1'}
                    />
                  </_SeatBlock>
                ) : seat.status === 'UNAVAILABLE' ? (
                  <_SeatBlock
                    isEdit={isEdit}
                    isSelected={
                      isEdit &&
                      selectedPosition?.x === x &&
                      selectedPosition?.y === y
                    }
                  >
                    <_Seat
                      onClick={() => isEdit && onClickSeat(x, y)}
                      display="inline-block"
                      background={'gray4'}
                      color="gray1"
                      size="bodyS"
                    >
                      사용불가
                    </_Seat>
                  </_SeatBlock>
                ) : (
                  <_SeatBlock
                    isEdit={isEdit}
                    isSelected={
                      isEdit &&
                      selectedPosition?.x === x &&
                      selectedPosition?.y === y
                    }
                  >
                    <_Seat
                      onClick={() => isEdit && onClickSeat(x, y)}
                      display="inline-block"
                      background={seat.type ? seat.type.color : '#b1d0ff'}
                      color="gray1"
                      size="bodyS"
                    >
                      {seat.student ? seat.student.name : seat.number}
                    </_Seat>
                  </_SeatBlock>
                )}
              </>
            ))}
          </_Seats>
        ))}
      </_Room>
    </_Wrapper>
  );
};

const _Seats = styled.div`
  display: flex;
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

const _Seat = styled(Text)<{ background: string }>`
  min-width: 80px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  background-color: ${({ background }) => background};
`;

const _EastDirection = styled(Text)`
  position: absolute;
  transform: rotate(90deg) translateX(-50%);
  right: 0;
`;
const _SouthDirection = styled(Text)`
  position: absolute;
  transform: translateX(-50%);
  bottom: 0;
`;
const _NorthDirection = styled(Text)`
  position: absolute;
  transform: translateX(-50%);
  top: 0;
`;
const _WestDirection = styled(Text)`
  position: absolute;
  transform: rotate(-90deg) translateX(50%);
  left: 0;
`;

const _Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 684px;
  height: 684px;
`;

const _Room = styled.div`
  border: 2px solid ${({ theme }) => theme.color.primary};
  width: 600px;
  border-radius: 10px;
  height: 600px;
  overflow: scroll;
`;
