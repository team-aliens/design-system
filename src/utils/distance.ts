import { directionType } from '../types/direction';
import styled from 'styled-components';

/** 이거 배열말고 그냥 매개변수로 받아야 타이핑이 줄어들음 */
type marginType =
  | [number, number, number, number]
  | [number | directionType, number]
  | [number];

export interface marginCssType {
  margin?: marginType;
}

export const marginToCss = ({ margin }: marginCssType) => {
  if (!margin) return;

  switch (margin[0]) {
    case 'top':
      return `${margin[1]}px 0 0 0`;
    case 'bottom':
      return `0 0 ${margin[1]}px 0`;
    case 'left':
      return `0 0 0 ${margin[1]}px`;
    case 'right':
      return `0 ${margin[1]}px 0 0`;
    default:
      let css = '';
      for (let i = 0; i < margin.length; i++) css += margin[i] + 'px ';
      return css;
  }
};

export const _Wrapper = styled.div<marginCssType>`
  margin: ${({ margin }) => marginToCss({ margin })};
`;
