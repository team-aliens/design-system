import styled from 'styled-components';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ItemBox } from './ItemsBox';
import { SelectedBox } from './SelectedBox';

export interface FilterOption {
  label: string;
  value: string;
}

export interface DropDownFilterProps {
  className?: string;
  items: ReadonlyArray<FilterOption>;
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
  disable?: boolean;
}

export const DropDownFilter = ({
  items,
  value,
  onChange,
  placeholder,
  disable,
}: DropDownFilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const allOption: FilterOption = { label: '전체', value: 'ALL' };
  const options = [allOption, ...items];
  const selectedOption =
    options.find((item) => item.value === value) ?? allOption;
  const [text, setText] = useState<string>(selectedOption.label);

  useEffect(() => {
    setText(selectedOption.label);
  }, [selectedOption.label]);

  return (
    <_Wrapper>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <_DropDownBox>
          <SelectedBox
            disable={disable}
            setIsOpen={setIsOpen}
            text={text}
            isOpen={isOpen}
          />
          <ItemBox
            items={options}
            onChange={onChange}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setText={setText}
            disable={disable}
          />
        </_DropDownBox>
      </OutsideClickHandler>
    </_Wrapper>
  );
};

const _Wrapper = styled.div``;

/** 기본 191px, 라벨이 길면 내용에 맞춰 늘어난다 */
const _DropDownBox = styled.div`
  min-width: 191px;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 10;
`;
