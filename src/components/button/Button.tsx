import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  primaryLighten1,
  primaryLighten2,
  primary,
  primaryDarken1,
  primaryDarken2,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  gray8,
  errorDarken1,
  errorDarken2,
  error,
  errorLighten1,
  errorLighten2,
} from '../../styles/theme/color';
import { marginToCss, marginCssType } from '../../utils/distance';

type kindType = 'contained' | 'outline' | 'text' | 'underline' | 'rounded';
type colorType = 'primary' | 'gray' | 'error';
type sizeType = 'default' | 'medium' | 'large';

interface propsType extends marginCssType {
  className?: string;
  kind?: kindType;
  size?: sizeType;
  color?: colorType;
  children?: ReactNode;
  disabled?: boolean;
  Icon?: JSX.Element;
  onClick?: () => void;
  clickType?: 'submit' | 'button';
}

export const Button = ({
  className,
  kind = 'contained',
  size = 'default',
  color = 'primary',
  children,
  disabled = false,
  onClick,
  Icon,
  clickType = 'submit',
  margin,
}: propsType) => {
  return (
    <_Wrapper
      className={className}
      size={size}
      kind={kind}
      color={color}
      disabled={disabled}
      onClick={!disabled && onClick}
      type={clickType}
      margin={margin}
    >
      {Icon && <Icon.type size={18} colorKey={iconColorToKey(kind, color)} />}
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.button<propsType>`
  height: 47px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  padding: 14px 16px;
  ${({ theme }) => theme.font.BtnM};
  border-radius: ${({ kind }) => (kind === 'rounded' ? 24 : 4)}px;
  max-width: 1030px;
  min-width: ${({ children }) => (children[1] ? 80 : 50)}px;
  width: ${({ size }) => {
    switch (size) {
      case 'medium':
        return '480px';
      case 'large':
        return '100%';
    }
  }};
  ${({ margin }) => marginToCss({ margin })};
  ${({ color, disabled, kind }) => cssGenerator(kind, color, disabled)};
`;

const iconColorToKey = (kind: kindType, color: colorType) => {
  switch (color) {
    case 'primary':
      return kind === 'contained' ? 'gray1' : 'primaryDarken2';
    case 'gray':
      return kind === 'contained' ? 'gray8' : 'gray6';
    case 'error':
      return kind === 'contained' ? 'gray1' : 'error';
  }
};

const cssGenerator = (kind: kindType, color: colorType, disabled: boolean) => {
  switch (kind) {
    case 'contained':
      switch (color) {
        case 'primary':
          return css`
            cursor: ${disabled && 'no-drop'};
            background-color: ${primary};
            color: ${gray1};
            opacity: ${disabled ? 0.5 : 1};
            :hover {
              background-color: ${!disabled && primaryDarken1};
            }
            :active {
              background-color: ${!disabled && primaryDarken2};
            }
          `;
        case 'gray':
          return css`
            background-color: ${gray3};
            cursor: ${disabled && 'no-drop'};
            color: ${gray8};
            opacity: ${disabled ? 0.5 : 1};
            :hover {
              background: ${!disabled && gray4};
            }
            :active {
              background: ${!disabled && gray5};
            }
          `;
        case 'error':
          return css`
            background-color: ${error};
            cursor: ${disabled && 'no-drop'};
            color: ${gray1};
            opacity: ${disabled ? 0.5 : 1};
            :hover {
              background: ${!disabled && errorDarken1};
            }
            :active {
              background: ${!disabled && errorDarken2};
            }
          `;
      }
    case 'outline':
      switch (color) {
        case 'primary':
          return css`
            background-color: ${gray1};
            color: ${primaryDarken2};
            opacity: ${disabled ? 0.5 : 1};
            cursor: ${disabled && 'no-drop'};
            border: 1px solid ${kind === 'outline' ? primary : 'transparent'};
            :hover {
              background-color: ${!disabled && primary};
              color: ${!disabled && gray1};
              border: ${!disabled && `1px solid ${primary}`};
              > svg > path {
                fill: ${gray1};
              }
            }
            :active {
              background-color: ${!disabled && primaryDarken1};
              color: ${!disabled && gray1};
              border: ${!disabled && `1px solid ${primaryDarken1}`};
            }
          `;
        case 'gray':
          return css`
            background-color: ${gray1};
            color: ${gray6};
            opacity: ${disabled ? 0.5 : 1};
            cursor: ${disabled && 'no-drop'};
            border: 1px solid ${gray4};
            :hover {
              border: ${!disabled && `1px solid ${gray4}`};
              background-color: ${!disabled && gray2};
            }
            :active {
              border: ${!disabled && `1px solid ${gray4}`};
              background-color: ${!disabled && gray3};
            }
          `;
        case 'error':
          return css`
            background-color: ${gray1};
            color: ${error};
            cursor: ${disabled && 'no-drop'};
            opacity: ${disabled ? 0.5 : 1};
            border: 1px solid ${error};
            :hover {
              background-color: ${!disabled && error};
              color: ${!disabled && gray1};
              > svg > path {
                fill: ${gray1};
              }
            }
            :active {
              background: ${!disabled && errorDarken1};
              color: ${!disabled && gray1};
            }
          `;
      }
    case 'text':
      switch (color) {
        case 'primary':
          return css`
            color: ${primaryDarken2};
            opacity: ${disabled ? 0.5 : 1};
            cursor: ${disabled && 'no-drop'};
            border: 1px solid ${gray2};
            :hover {
              background-color: ${!disabled && gray2};
            }
            :active {
              background-color: ${!disabled && gray3};
            }
          `;
        case 'gray':
          return css`
            background-color: ${gray1};
            color: ${gray6};
            opacity: ${disabled ? 0.5 : 1};
            cursor: ${disabled && 'no-drop'};
            :hover {
              background-color: ${!disabled && gray2};
            }
            :active {
              background-color: ${!disabled && gray3};
            }
          `;
        case 'error':
          return css`
            background-color: ${gray1};
            color: ${error};
            cursor: ${disabled && 'no-drop'};
            opacity: ${disabled ? 0.5 : 1};
            :hover {
              background-color: ${!disabled && gray2};
            }
            :active {
              background: ${!disabled && gray3};
            }
          `;
      }
    case 'underline':
      return css`
        cursor: ${disabled && 'no-drop'};
        color: ${color === 'primary'
          ? primary
          : color === 'gray'
          ? gray6
          : error};
        opacity: ${disabled ? 0.5 : 1};
        text-decoration-line: underline;
      `;
    case 'rounded':
      switch (color) {
        case 'primary':
          return css`
            background-color: ${primaryLighten2};
            color: ${disabled ? primaryLighten1 : primaryDarken2};
            cursor: ${disabled && 'no-drop'};
          `;
        case 'gray':
          return css`
            background-color: ${gray2};
            color: ${disabled ? gray4 : gray6};
            cursor: ${disabled && 'no-drop'};
          `;
        case 'error':
          return css`
            background-color: ${errorLighten2};
            color: ${disabled ? errorLighten1 : errorDarken2};
            cursor: ${disabled && 'no-drop'};
          `;
      }
  }
};
