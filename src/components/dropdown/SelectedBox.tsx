import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Arrow } from '../styleGuide/icon';

interface PropsType<T> {
  className?: string;
  disable?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
  text: T | string;
  isOpen: boolean;
}

export const SelectedBox = <T extends string>({
  disable,
  setIsOpen,
  placeholder,
  text,
  isOpen,
  className,
}: PropsType<T>) => {
  return (
    <_DropDownSelectedBox
      className={className}
      disable={disable}
      onClick={() => !disable && setIsOpen(!isOpen)}
      isPlaceholder={text === placeholder}
    >
      <p className={className}>{text}</p>
      <Arrow
        className={className}
        colorKey={'gray5'}
        direction={isOpen ? 'top' : 'bottom'}
      />
    </_DropDownSelectedBox>
  );
};

const _DropDownSelectedBox = styled.div<{
  disable: boolean;
  isPlaceholder: boolean;
}>`
  width: 100%;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.color.gray5};
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  background-color: ${({ theme, disable }) =>
    disable ? theme.color.gray3 : theme.color.gray1};
  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
  > p {
    color: ${({ theme }) => theme.color.gray5};
    font-size: 17px;
  }
`;
