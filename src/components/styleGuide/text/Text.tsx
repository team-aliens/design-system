import styled from 'styled-components';
import { fontKeyOfType } from '../../../styles/theme/font';
import { marginCssType, marginToCss } from '../../../utils/distance';
import { styledType } from '../../../types/styled';

interface PropsType extends marginCssType, styledType {
  display?: 'inline' | 'inline-block' | 'block';
  size?: fontKeyOfType;
  /** 타입 지정 필요 */
  onClick?: any;
  cursor?: 'pointer';
  align?: 'center' | 'start' | 'end';
}

export const Text = ({
  display = 'block',
  size = 'bodyM',
  children,
  color = 'gray9',
  className,
  onClick,
  margin,
  align,
  cursor,
}: PropsType) => {
  return (
    <_Text
      className={className}
      display={display}
      color={color}
      size={size}
      onClick={onClick}
      margin={margin}
      cursor={cursor}
      align={align}
    >
      {children}
    </_Text>
  );
};

const _Text = styled.div<PropsType>`
  display: ${({ display }) => display};
  color: ${({ color, theme }) => theme.color[color]};
  ${({ size, theme }) => theme.font[size]};
  margin: ${({ margin }) => marginToCss({ margin })};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ align }) => align};
`;
