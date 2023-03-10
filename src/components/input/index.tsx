import styled from 'styled-components';
import { useState } from 'react';
import { Eye } from '../styleGuide/icon/Eye';
import { Label, labelPropsType } from './Label';
import { ErrorMsg, errorMsgPropsType } from './ErrorMsg';
import { marginCssType, _Wrapper } from '../../utils/distance';

interface PropsType extends marginCssType, errorMsgPropsType, labelPropsType {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  width?: number;
  name: string;
  className?: string;
  value: string | number;
  limit?: number;
}

/** input 에러 상태일 때에는 포커싱이 파란색..? */
export const Input = ({
  onChange,
  label,
  placeholder,
  width,
  type = 'text',
  errorMsg,
  name,
  value,
  className,
  margin,
  limit,
}: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isInputClicked, setIsInputClicked] = useState<boolean>(false);
  return (
    <_Wrapper margin={margin} className={className}>
      <Label className={className} label={label} />
      <_InputWrapper className={className} width={width}>
        <_Input
          className={className}
          onWheel={(e) => {
            //@ts-ignore
            document.activeElement.blur();
          }}
          onFocus={() => {
            setIsInputClicked(true);
          }}
          onBlur={() => {
            setIsInputClicked(false);
          }}
          onChange={onChange}
          type={(isOpen && 'text') || type}
          errorMsg={errorMsg}
          placeholder={isInputClicked ? '' : placeholder}
          value={value}
          maxLength={limit}
          name={name}
        />
        {type == 'password' && (
          <_IconBox className={className}>
            <Eye
              className={className}
              onClick={() => setIsOpen(!isOpen)}
              colorKey="gray5"
              state={isOpen}
            />
          </_IconBox>
        )}
      </_InputWrapper>
      <ErrorMsg className={className} errorMsg={errorMsg} />
    </_Wrapper>
  );
};

const _IconBox = styled.div`
  position: absolute;
  right: 12px;
  height: 24px;
`;

const _Input = styled.input<{ errorMsg: string }>`
  width: 100%;
  height: 46px;
  padding: 16px 9px;
  ${({ theme }) => theme.font.bodyM}
  border-radius: 4px;
  outline: 1px solid
    ${({ theme, errorMsg }) =>
      typeof errorMsg === 'undefined' || errorMsg === ''
        ? theme.color.gray5
        : theme.color.error};
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.primary};
  }
  :active {
    outline: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

const _InputWrapper = styled.label<{ width: '100%' | number }>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin-top: 4px;
`;
