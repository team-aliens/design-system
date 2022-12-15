import { iconPropsType } from './types';
import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { color } from '../../../styles/theme/color';

export const Add = IconDefaultProps(
  ({ size, colorKey, className }: iconPropsType) => {
    return (
      <svg
        width={size}
        height={size}
        className={className}
        viewBox={`0 0 24 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.54632 12.5625H11.1417V17.1579C11.1417 17.625 11.5259 18.0167 12.0006 18.0167C12.4752 18.0167 12.8594 17.625 12.8594 17.1579V12.5625H17.4548C17.9219 12.5625 18.3136 12.1783 18.3136 11.7037C18.3136 11.2291 17.9219 10.8449 17.4548 10.8449H12.8594V6.24944C12.8594 5.78237 12.4752 5.39062 12.0006 5.39062C11.5259 5.39062 11.1417 5.78237 11.1417 6.24944V10.8449H6.54632C6.07924 10.8449 5.6875 11.2291 5.6875 11.7037C5.6875 12.1783 6.07924 12.5625 6.54632 12.5625Z"
          fill={color[colorKey]}
        />
      </svg>
    );
  }
);
