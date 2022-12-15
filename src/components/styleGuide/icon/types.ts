import { colorKeyOfType } from '../../../styles/theme/color';
import { directionType } from '../../../types/direction';

/** 사용하지 않는 매개변수도 사용가능한 문제 논의 필요 */
export interface iconPropsType {
  size?: 18 | 24 | 28 | 36;
  colorKey?: colorKeyOfType;
  className?: string;
  fill?: boolean;
  direction?: directionType;
  state?: boolean;
  onClick?: () => void;
}

export const iconDefaultProps: iconPropsType = {
  size: 24,
  colorKey: 'gray9',
  fill: true,
};
