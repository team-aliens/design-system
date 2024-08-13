import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface PropsType<T> {
  className?: string;
  items: ReadonlyArray<T>;
  onChange: (value: T) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string | T>>;
  disable?: boolean;
}

export const ItemBox = <T extends string>({
  items,
  onChange,
  isOpen,
  setIsOpen,
  setText,
  disable,
  className,
}: PropsType<T>) => {
  return (
    <_DropDownItemsBox className={className} isOpen={!disable && isOpen}>
      {items.map((i, idx) => (
        <_DropDownItem
          className={className}
          key={idx}
          onClick={() => {
            setIsOpen(false);
            setText(i);
            onChange(i);
          }}
        >
          {i}
        </_DropDownItem>
      ))}
    </_DropDownItemsBox>
  );
};

const _DropDownItemsBox = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 54px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray1};
  z-index: 100;
  @keyframes DropDownOpen {
    from {
      max-height: 0px;
    }
    to {
      max-height: 125px;
    }
  }
  max-height: 125px;
  animation: DropDownOpen 0.5s;
  box-shadow: 0px 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  flex-direction: column;
  overflow: auto;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const _DropDownItem = styled.div`
  width: 100%;
  min-height: 46px;
  padding: 9px 16px;
  ${({ theme }) => theme.font.bodyM}
  cursor: pointer;
  color: ${({ theme }) => theme.color.gray5};
  :hover {
    color: ${({ theme }) => theme.color.gray6};
  }
  & + * {
    border-top: 1px solid ${({ theme }) => theme.color.gray3};
  }
`;
