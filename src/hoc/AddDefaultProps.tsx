import { ComponentType } from 'react';
import { iconDefaultProps } from '../components/styleGuide/icon/types';

export function commonDefaultProps<T>(C: ComponentType, defaultProps: T) {
  C.defaultProps = defaultProps;
  return ({ ...args }: T) => <C {...args} />;
}

export const IconDefaultProps = (C: ComponentType) =>
  commonDefaultProps(C, iconDefaultProps);
