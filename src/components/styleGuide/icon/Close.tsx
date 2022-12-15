import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { iconPropsType } from './types';
import { color } from '../../../styles/theme/color';

export const Close = IconDefaultProps(
  ({ size, colorKey, className }: iconPropsType) => {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox={`0 0 24 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.876025 14.6208C0.348681 15.1482 0.32357 16.0898 0.888581 16.6297C1.42848 17.1947 2.38272 17.1696 2.91007 16.6423L8.99963 10.5527L15.0892 16.6423C15.6291 17.1822 16.5582 17.1947 17.0981 16.6297C17.6631 16.0898 17.6506 15.1482 17.1107 14.6083L11.0211 8.51869L17.1107 2.44168C17.6506 1.88922 17.6631 0.960092 17.0981 0.420192C16.5582 -0.144819 15.6291 -0.132263 15.0892 0.407636L8.99963 6.4972L2.91007 0.407636C2.38272 -0.119707 1.42848 -0.144819 0.888581 0.420192C0.32357 0.960092 0.348681 1.90178 0.876025 2.42912L6.96559 8.51869L0.876025 14.6208Z"
          fill={color[colorKey]}
        />
      </svg>
    );
  }
);
