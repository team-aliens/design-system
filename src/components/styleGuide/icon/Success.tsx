import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { iconPropsType } from './types';

export const Success = IconDefaultProps(
  ({ size, className }: iconPropsType) => {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3058_4686)">
          <path
            d="M10.0007 15.172L19.1927 5.979L20.6077 7.393L10.0007 18L3.63672 11.636L5.05072 10.222L10.0007 15.172Z"
            fill="#005DE8"
          />
        </g>
        <defs>
          <clipPath id="clip0_3058_4686">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
