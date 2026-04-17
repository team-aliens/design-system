import styled, { css } from 'styled-components';
import { Search } from '../styleGuide/icon/Search';
import { ChangeEvent } from 'react';
import { marginCssType, marginToCss } from '../../utils/distance';

interface PropsType extends marginCssType {
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const SearchBox = ({
  className,
  value,
  onChange,
  disabled,
}: PropsType) => {
  return (
    <_Wrapper className={className} disabled={disabled}>
      <Search colorKey="gray5" size={28} className={className} />
      <_Input
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </_Wrapper>
  );
};

const _Input = styled.input`
  padding-left: 14px;
  border-left: 1px solid ${({ theme }) => theme.color.gray3};
  margin-left: 9px;
  :disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;

interface wrapperPropsType extends marginCssType {
  disabled: boolean;
}

const _Wrapper = styled.label<wrapperPropsType>`
  display: flex;
  align-items: center;
  width: 241px;
  height: 40px;
  ${({ margin }) => marginToCss({ margin })};
  background: ${({ theme }) => theme.color.gray1};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 30px;
  padding-left: 14px;
  ${({ disabled }) => css`
    opacity: ${disabled ? 0.4 : 1};
    cursor: ${disabled ? 'not-allowed' : 'default'};
  `}
`;
