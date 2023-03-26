import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import { Box } from './Box';
import { Label } from './Label';

interface PropsType extends marginCssType {
  className?: string;
  disabled?: boolean;
  label?: string;
  status: boolean;
  size?: number;
  onChange: (status: boolean) => void;
}

/** checkBox 여러개 있을 때 처리를 딱히 안해둠 (사용할 때 고민해봅시다) */
export const CheckBox = ({
  className,
  disabled = false,
  label,
  status,
  onChange,
  size = 24,
  margin,
}: PropsType) => {
  return (
    <_Wrapper
      className={className}
      disabled={disabled}
      onClick={() => !disabled && onChange(!status)}
      margin={margin}
    >
      <Box size={size} status={status} disabled={disabled} />
      {label && <Label label={label} disabled={disabled} />}
    </_Wrapper>
  );
};

interface WrapperProps extends marginCssType {
  disabled: boolean;
}

const _Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  ${({ margin }) => marginToCss({ margin })};
`;
