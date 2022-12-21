import styled, { css } from 'styled-components';

interface PropsType {
  disabled?: boolean;
  status: boolean;
}

export const Box = ({ disabled, status }: PropsType) => {
  return (
    <_Wrapper disabled={disabled} status={status}>
      {status && (
        <svg
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 4L5.31482 8.5L13.5 1" stroke="white" stroke-width="2" />
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
  width: 24px;
  height: 24px;
  ${({ status, disabled, theme }) => {
    const { gray2, primaryLighten1, gray3, gray5, primary } = theme.color;
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
        background-color: ${gray2};
        border: 2px solid ${gray3};
      `;
    }
    if (!status && !disabled) {
      return css`
        border: 2px solid ${gray5};
      `;
    }
  }}
`;
