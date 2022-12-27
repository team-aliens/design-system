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
}

export const StudyRoom = ({
  east_description,
  west_description,
  south_description,
  north_description,
  total_height_size,
  total_width_size,
  seats,
}: PropsType) => {
  const arr2Generator = (x: number, y: number) => {
    let arr = [];
    for (let i = 0; i < x; i++) {
      arr[i] = [];
      for (let j = 0; j < y; j++) arr[i][j] = 0;
    }
    return arr;
  };

  let arr: seatType[][] = arr2Generator(total_width_size, total_height_size);

  for (let i = 0; i < seats.length; i++)
    arr[seats[i].width_location - 1][seats[i].height_location - 1] = seats[i];

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
        {arr.map((seat, idx) => (
          <_Seats>
            {seat.map((seat, idx) => (
              <>
                {seat ? (
                  seat.number ? (
                    <_Seat
                      display="inline-block"
                      background={seat.type.color || '#b1d0ff'}
                      color="gray1"
                      size="bodyS"
                    >
                      {seat.type ? seat.type.name : seat.number}
                    </_Seat>
                  ) : (
                    <_Seat
                      display="inline-block"
                      background={'gray4'}
                      color="gray1"
                      size="bodyS"
                    >
                      사용불가
                    </_Seat>
                  )
                ) : (
                  <_Seat background={'gray1'} />
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

const _Seat = styled(Text)<{ background: string }>`
  min-width: 80px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
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
