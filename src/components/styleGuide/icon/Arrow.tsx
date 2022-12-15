import styled from 'styled-components';
import { directionType } from '../../../types/direction';
import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { iconPropsType } from './types';
import { color } from '../../../styles/theme/color';

export const Arrow = IconDefaultProps(
  ({ size, direction, colorKey, className }: iconPropsType) => {
    return (
      <_Wrapper
        className={className}
        direction={direction}
        width={size}
        height={size}
        viewBox={`0 0 28 28`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.34766 13.6543C8.34766 13.9619 8.46191 14.2256 8.70801 14.4541L15.5459 21.1514C15.7393 21.3447 15.9854 21.4502 16.2754 21.4502C16.8555 21.4502 17.3213 20.9932 17.3213 20.4043C17.3213 20.1143 17.1982 19.8594 17.0049 19.6572L10.8438 13.6543L17.0049 7.65137C17.1982 7.44922 17.3213 7.18555 17.3213 6.9043C17.3213 6.31543 16.8555 5.8584 16.2754 5.8584C15.9854 5.8584 15.7393 5.96387 15.5459 6.15723L8.70801 12.8457C8.46191 13.083 8.34766 13.3467 8.34766 13.6543Z"
          fill={color[colorKey]}
        />
      </_Wrapper>
    );
  }
);

const _Wrapper = styled.svg<{ direction: directionType }>`
  transform: rotate(
    ${({ direction }) => {
      switch (direction) {
        case 'right':
          return '0.5';
        case 'bottom':
          return '0.75';
        case 'top':
          return '0.25';
      }
    }}turn
  );
`;
