import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

export const _Seats = styled.div`
  display: flex;
`;

export const _SeatBlock = styled.div<{
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

export const _Seat = styled(Text)<{ background: string }>`
  min-width: 80px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  background-color: ${({ background }) => background};
`;

export const _EastDirection = styled(Text)`
  position: absolute;
  transform: rotate(90deg) translateX(-50%);
  right: 0;
`;
export const _SouthDirection = styled(Text)`
  position: absolute;
  transform: translateX(-50%);
  bottom: 0;
`;
export const _NorthDirection = styled(Text)`
  position: absolute;
  transform: translateX(-50%);
  top: 0;
`;
export const _WestDirection = styled(Text)`
  position: absolute;
  transform: rotate(-90deg) translateX(50%);
  left: 0;
`;

export const _Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 684px;
  height: 684px;
`;

export const _Room = styled.div`
  border: 2px solid ${({ theme }) => theme.color.primary};
  width: 600px;
  border-radius: 10px;
  height: 600px;
  overflow: scroll;
`;
