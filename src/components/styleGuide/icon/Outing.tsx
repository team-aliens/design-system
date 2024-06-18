import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { iconPropsType } from './types';
import { color } from '../../../styles/theme/color';

export const Outing = IconDefaultProps(({ size, colorKey }: iconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      width={size}
      height={size}
      fill="none"
    >
      <path
        fill={color[colorKey]}
        d="M440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-120v-80l240-40v-445q0-15-9-27t-23-14l-208-34v-80l220 36q44 8 72 41t28 77v512l-320 54Zm-160 0v-80h80v-560q0-34 23.5-57t56.5-23h400q34 0 57 23t23 57v560h80v80H120Zm160-80h400v-560H280v560Z"
      />
    </svg>
  );
});
