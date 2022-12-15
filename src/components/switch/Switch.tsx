import styled from 'styled-components';
import { useState } from 'react';

interface PropsType {
  disabled?: boolean;
  className?: string;
}

export const Switch = ({ className, disabled = false }: PropsType) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <_SwitchBox
      onClick={() => !disabled && setIsChecked(!isChecked)}
      disabled={disabled}
      isChecked={isChecked}
      className={className}
    >
      <_Circle disabled={disabled} isChecked={isChecked} />
    </_SwitchBox>
  );
};

const _Circle = styled.div<{ isChecked: boolean; disabled: boolean }>`
  width: 20px;
  box-shadow: 0px 1px 1px 1px rgba(52, 52, 52, 0.16);
  position: absolute;
  transition: 0.15s;
  left: ${({ isChecked }) => (isChecked ? '16' : '0')}px;
  height: 20px;
  border-radius: 70%;
  background-color: ${({ isChecked, disabled, theme }) => {
    const { primaryLighten1, primary, gray1 } = theme.color;
    if (isChecked && disabled) return primaryLighten1;
    if (isChecked && !disabled) return primary;
    if (!isChecked && disabled) return gray1;
    if (!isChecked && !disabled) return gray1;
  }};
`;

const _SwitchBox = styled.div<{ isChecked: boolean; disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  width: 36px;
  height: 14px;
  background-color: ${({ isChecked, disabled, theme }) => {
    const { primaryLighten1, primaryLighten2, gray4, gray5 } = theme.color;
    if (isChecked && disabled) return primaryLighten2;
    if (isChecked && !disabled) return primaryLighten1;
    if (!isChecked && disabled) return gray4;
    if (!isChecked && !disabled) return gray5;
  }};
`;
