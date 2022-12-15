import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { iconPropsType } from './types';
import { color } from '../../../styles/theme/color';

export const Search = IconDefaultProps(
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
          d="M10.7414 16.3142C11.9392 16.3142 13.0617 15.9526 13.9958 15.3348L17.2955 18.642C17.514 18.853 17.7927 18.9584 18.094 18.9584C18.7193 18.9584 19.1789 18.4688 19.1789 17.851C19.1789 17.5647 19.0809 17.286 18.87 17.0751L15.5929 13.7829C16.2709 12.8186 16.6702 11.651 16.6702 10.3853C16.6702 7.12333 14.0033 4.45648 10.7414 4.45648C7.48689 4.45648 4.8125 7.12333 4.8125 10.3853C4.8125 13.6473 7.47935 16.3142 10.7414 16.3142ZM10.7414 14.7322C8.35324 14.7322 6.39453 12.7734 6.39453 10.3853C6.39453 7.99722 8.35324 6.03851 10.7414 6.03851C13.1295 6.03851 15.0882 7.99722 15.0882 10.3853C15.0882 12.7734 13.1295 14.7322 10.7414 14.7322Z"
          fill={color[colorKey]}
        />
      </svg>
    );
  }
);
