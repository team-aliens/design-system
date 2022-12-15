import styled from 'styled-components';
import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Label } from './Label';
import { ItemBox } from './ItemsBox';
import { SelectedBox } from './SelectedBox';
import { marginCssType, _Wrapper } from '../../utils/distance';

/** 하위 컴포넌트의 PropsType을 extends해서 사용했을 때 이 컴포넌트에 만들어서 내려준 setState같은 타입은 존재하지 않는데도 있다고 판단됨 */
export interface DropDownProps<T> extends marginCssType {
  className?: string;
  items: ReadonlyArray<T>;
  value?: T;
  placeholder: string;
  onChange: (value: T) => void;
  width?: number;
  disable?: boolean;
  label?: string;
}

export const DropDown = <T extends string>({
  className,
  items,
  value,
  onChange,
  placeholder,
  disable = false,
  width,
  label,
  margin,
}: DropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<T | string>(value ? value : placeholder);

  useEffect(() => {
    setText(value ? value : placeholder);
  }, [value]);

  return (
    <_Wrapper margin={margin} className={className}>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        {label && <Label label={label} />}
        <_DropDownBox width={width}>
          <SelectedBox
            disable={disable}
            setIsOpen={setIsOpen}
            placeholder={placeholder}
            text={text}
            isOpen={isOpen}
          />
          <ItemBox
            items={items}
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

const _DropDownBox = styled.div<{ width: number }>`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 2;
  position: relative;
`;
