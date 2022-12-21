import { directionType } from '../types/direction';
import styled from 'styled-components';

/** 이거 배열말고 그냥 매개변수로 받아야 타이핑이 줄어들음 */
type marginType =
  | [number, number, number, number]
  | [number | directionType, number | 'auto']
  | [number];

export interface marginCssType {
  margin?: marginType[] | marginType;
}

const mgReturn = (mg: marginType) => {
  if (mg[0] === 0 && mg[1] === 'auto') {
    return `margin: 0 auto;`;
  }

  const unitTransform = (m: 'auto' | number) => (m === 'auto' ? m : m + 'px');

  switch (mg[0]) {
    case 'top':
      return `margin-top: ${unitTransform(mg[1])};`;
    case 'bottom':
      return `margin-bottom: ${unitTransform(mg[1])};`;
    case 'left':
      return `margin-left: ${unitTransform(mg[1])};`;
    case 'right':
      return `margin-right: ${unitTransform(mg[1])};`;
    default:
      let css = 'margin: ';
      for (let j = 0; j < mg.length; j++) css += mg[j] + 'px ';
      return css + ';';
  }
};

export const marginToCss = ({ margin }: marginCssType) => {
  if (!margin) return;
  let mgCss = '';

  if (Array.isArray(margin[0])) {
    for (let i = 0; i < margin.length; i++) {
      // @ts-expect-error
      mgCss += mgReturn(margin[i]);
    }
  } else {
    // @ts-expect-error
    mgCss = mgReturn(margin);
  }

  return mgCss;
};

export const _Wrapper = styled.div<marginCssType>`
  ${({ margin }) => marginToCss({ margin })};
`;
