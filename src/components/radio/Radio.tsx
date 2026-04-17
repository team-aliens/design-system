import styled, { css } from 'styled-components';

interface PropsType {
  className?: string;
  disabled?: boolean;
  isChecked: boolean;
}

/** radio 여러개 있을 때 처리를 딱히 안해둠 (사용할 때 고민해봅시다) name 속성을 추가하는 형태로 해야할듯*/
export const Radio = ({
  className,
  disabled = false,
  isChecked,
}: PropsType) => {
  return (
    <_Radio className={className} disabled={disabled} isChecked={isChecked}>
      <_Inner disabled={disabled} isChecked={isChecked} />
    </_Radio>
  );
};

const _Inner = styled.div<{ isChecked: boolean; disabled: boolean }>`
  width: 10px;
  border-radius: 70%;
  height: 10px;
  background-color: ${({ isChecked, disabled, theme }) => {
    const { primaryLighten1, primary } = theme.color;
    if (isChecked && disabled) return primaryLighten1;
    if (isChecked && !disabled) return primary;
  }};
`;

const _Radio = styled.div<{ isChecked: boolean; disabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  width: 20px;
  height: 20px;
  ${({ isChecked, disabled, theme }) => {
    const { gray2, primaryLighten1, gray3, gray5, primary } = theme.color;
    if (isChecked && disabled) {
      return css`
        border: 2px solid ${primaryLighten1};
      `;
    }
    if (isChecked && !disabled) {
      return css`
        border: 2px solid ${primary};
      `;
    }
    if (!isChecked && disabled) {
      return css`
        background-color: ${gray2};
        border: 2px solid ${gray3};
      `;
    }
    if (!isChecked && !disabled) {
      return css`
        border: 2px solid ${gray5};
      `;
    }
  }}
`;
