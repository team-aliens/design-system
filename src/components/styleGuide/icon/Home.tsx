import { IconDefaultProps } from '../../../hoc/AddDefaultProps';
import { iconPropsType } from './types';
import { color } from '../../../styles/theme/color';

export const Home = IconDefaultProps(
  ({ size, colorKey, fill }: iconPropsType) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 24 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            fill
              ? 'M2.78711 11.327C2.78711 11.7187 3.08845 12.0577 3.57059 12.0577C3.80413 12.0577 4.01507 11.9297 4.2034 11.779L11.6766 5.50361C11.8876 5.32281 12.1286 5.32281 12.3396 5.50361L19.8052 11.779C19.986 11.9297 20.197 12.0577 20.4305 12.0577C20.875 12.0577 21.214 11.779 21.214 11.3421C21.214 11.0859 21.1161 10.8825 20.9202 10.7168L18.8033 8.93888V5.80495C18.8033 5.46594 18.5848 5.255 18.2458 5.255H17.2062C16.8747 5.255 16.6487 5.46594 16.6487 5.80495V7.12331L13.0778 4.12498C12.4224 3.57504 11.5938 3.57504 10.9383 4.12498L3.08845 10.7168C2.88504 10.8825 2.78711 11.1085 2.78711 11.327ZM5.23549 18.0996C5.23549 19.1844 5.9135 19.8398 7.03599 19.8398H16.9727C18.0876 19.8398 18.7732 19.1844 18.7732 18.0996V12.3741L12.4676 7.09317C12.1738 6.83704 11.8198 6.84457 11.5335 7.09317L5.23549 12.3741V18.0996ZM13.9819 18.4235H10.0268V13.6021C10.0268 13.248 10.2603 13.022 10.6144 13.022H13.4018C13.7559 13.022 13.9819 13.248 13.9819 13.6021V18.4235Z'
              : 'M2.78711 11.327C2.78711 11.7187 3.08845 12.0577 3.57059 12.0577C3.80413 12.0577 4.01507 11.9297 4.2034 11.779L5.06222 11.0558V18.0619C5.06222 19.1769 5.7327 19.8398 6.88532 19.8398H17.0781C18.2232 19.8398 18.9012 19.1769 18.9012 18.0619V11.0181L19.8052 11.779C19.986 11.9297 20.197 12.0577 20.4305 12.0577C20.875 12.0577 21.214 11.779 21.214 11.3421C21.214 11.0859 21.1161 10.8825 20.9202 10.7168L18.9012 9.01421V5.80495C18.9012 5.46594 18.6828 5.255 18.3438 5.255H17.3041C16.9727 5.255 16.7467 5.46594 16.7467 5.80495V7.20618L13.0778 4.12498C12.4224 3.57504 11.5938 3.57504 10.9383 4.12498L3.08845 10.7168C2.88504 10.8825 2.78711 11.1085 2.78711 11.327ZM14.1702 13.4062C14.1702 13.0522 13.9442 12.8262 13.5901 12.8262H10.4261C10.072 12.8262 9.83845 13.0522 9.83845 13.4062V18.3407H7.2846C6.81752 18.3407 6.56138 18.077 6.56138 17.6024V9.79769L11.6766 5.50361C11.8876 5.32281 12.1286 5.32281 12.3396 5.50361L17.3945 9.75249V17.6024C17.3945 18.077 17.1384 18.3407 16.6713 18.3407H14.1702V13.4062Z'
          }
          fill={color[colorKey]}
        />
      </svg>
    );
  }
);