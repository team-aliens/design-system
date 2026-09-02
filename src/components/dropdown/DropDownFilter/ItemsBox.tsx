import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import type { FilterOption } from '.';

interface PropsType {
  items: ReadonlyArray<FilterOption>;
  onChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string>>;
  disable?: boolean;
}

export const ItemBox = ({
  items,
  onChange,
  isOpen,
  setIsOpen,
  setText,
  disable,
}: PropsType) => {
  return (
    <_DropDownItemsBox isOpen={!disable && isOpen}>
      {items.map((item) => (
        <_DropDownItem
          key={item.value}
          onClick={() => {
            setIsOpen(false);
            setText(item.label);
            onChange(item.value);
          }}
        >
          {item.label}
        </_DropDownItem>
      ))}
    </_DropDownItemsBox>
  );
};

const _DropDownItemsBox = styled.div<{ isOpen: boolean }>`
  top: 54px;
  width: 100%;
  background-color: ${theme.teacherColor.gray[50]};
  z-index: 5;
  @keyframes DropDownOpen {
    from {
      max-height: 0px;
    }
    to {
      max-height: 306px;
    }
  }
  min-height: 306px;
  animation: DropDownOpen 0.5s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border: 1px solid ${theme.teacherColor.gray[600]};
  border-radius: 12px;
  flex-direction: column;
  overflow: auto;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const _DropDownItem = styled.div`
  width: 100%;
  min-height: 51px;
  display: flex;
  justify-content: center;
  padding: 8px 48px 8px 32px;
  ${theme.font.titleS}
  cursor: pointer;
  color: ${theme.teacherColor.gray[600]};
`;
