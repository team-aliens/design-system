import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { iconPropsType } from './types';
import { color } from '../../../styles/theme/color';

export const SeeMore = IconDefaultProps(({ colorKey, size }: iconPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11765_17370)">
        <path
          d="M10.5366 19.4277C10.5366 20.2527 11.2116 20.9277 12.0366 20.9277C12.8616 20.9277 13.5366 20.2527 13.5366 19.4277C13.5366 18.6027 12.8616 17.9277 12.0366 17.9277C11.2116 17.9277 10.5366 18.6027 10.5366 19.4277ZM10.5366 4.42773C10.5366 5.25273 11.2116 5.92773 12.0366 5.92773C12.8616 5.92773 13.5366 5.25273 13.5366 4.42773C13.5366 3.60273 12.8616 2.92773 12.0366 2.92773C11.2116 2.92773 10.5366 3.60273 10.5366 4.42773ZM10.5366 11.9277C10.5366 12.7527 11.2116 13.4277 12.0366 13.4277C12.8616 13.4277 13.5366 12.7527 13.5366 11.9277C13.5366 11.1027 12.8616 10.4277 12.0366 10.4277C11.2116 10.4277 10.5366 11.1027 10.5366 11.9277Z"
          fill={color[colorKey]}
        />
      </g>
      <defs>
        <clipPath id="clip0_11765_17370">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 24) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});
