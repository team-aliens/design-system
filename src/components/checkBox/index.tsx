import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import { CheckBox } from './CheckBox';
import { Label } from './Label';

interface PropsType extends marginCssType {
  className?: string;
  disabled?: boolean;
  label?: string;
  status: boolean;
  checkSetState: Dispatch<SetStateAction<boolean>>;
}

/** checkBox 여러개 있을 때 처리를 딱히 안해둠 (사용할 때 고민해봅시다) */
export const Wrapper = ({
  className,
  disabled = false,
  label,
  status,
  checkSetState,
  margin,
}: PropsType) => {
  return (
    <_Wrapper
      className={className}
      disabled={disabled}
      onClick={() => !disabled && checkSetState(!status)}
      margin={margin}
    >
      <CheckBox status={status} disabled={disabled} />
      {label && <Label label={label} disabled={disabled} />}
    </_Wrapper>
  );
};

interface WrapperProps extends marginCssType {
  disabled: boolean;
}

const _Wrapper = styled.span<WrapperProps>`
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  margin: ${({ margin }) => marginToCss({ margin })};
`;
