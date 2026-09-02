import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { CheckBoxVariant } from './index';

interface PropsType {
  disabled?: boolean;
  status: boolean;
  size?: number;
  variant?: CheckBoxVariant;
}

export const Box = ({ size, disabled, status, variant }: PropsType) => {
  return (
    <_Wrapper size={size} disabled={disabled} status={status} variant={variant}>
      {status && (
        <svg
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4L5.31482 8.5L13.5 1"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled.span<PropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  border-radius: 2px;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  color: white;
  ${({ status, disabled, theme, variant }) => {
    const { gray, blue } = theme.teacherColor;
    const { primaryLighten1, primary } = theme.color;
    if (status && !disabled && variant === 'teacherRow') {
      return css`
        color: ${blue[300]};
        border: 2px solid ${blue[300]};
      `;
    }
    if (!status && !disabled && variant === 'teacherRow') {
      return css`
        border: 2px solid ${gray[500]};
      `;
    }
    if (status && !disabled && variant === 'teacherHeader') {
      return css`
        border: 2px solid ${gray[50]};
      `;
    }
    if (!status && !disabled && variant === 'teacherHeader') {
      return css`
        border: 2px solid ${gray[50]};
      `;
    }
    if (status && disabled) {
      return css`
        background-color: ${primaryLighten1};
      `;
    }
    if (status && !disabled) {
      return css`
        background-color: ${primary};
      `;
    }
    if (!status && disabled) {
      return css`
        background-color: ${gray[100]};
        border: 2px solid ${gray[200]};
      `;
    }
    if (!status && !disabled) {
      return css`
        border: 2px solid ${gray[500]};
      `;
    }
  }}
`;
