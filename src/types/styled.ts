import { ReactNode } from 'react';
import { colorKeyOfType } from '../styles/theme/color';

export interface styledType {
  className?: string;
  color?: colorKeyOfType;
  children?: ReactNode;
}
