import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Arrow } from '../../styleGuide/icon';

interface PropsType {
  disable?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  text: string;
  isOpen: boolean;
}

export const SelectedBox = ({
  disable,
  setIsOpen,
  text,
  isOpen,
}: PropsType) => {
  return (
    <_DropDownSelectedBox
      disable={disable}
      onClick={() => !disable && setIsOpen(!isOpen)}
    >
      <_Text>{text}</_Text>
      <_ArrowBox>
        <Arrow colorKey={'gray7'} direction="bottom" />
      </_ArrowBox>
    </_DropDownSelectedBox>
  );
};

const _ArrowBox = styled.span`
  display: flex;
  flex-shrink: 0;
`;

const _DropDownSelectedBox = styled.div<{
  disable: boolean;
}>`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${theme.teacherColor.gray[500]};
  padding: 10px 16px 10px 32px;
  align-items: center;
  border-radius: 12px;
  background-color: ${theme.teacherColor.gray[50]};
  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
  > p {
    color: ${theme.teacherColor.gray[600]};
    ${theme.font.titleM}
  }
`;

/** 라벨이 길어도 줄바꿈되지 않고 한 줄로 유지된다 */
const _Text = styled.p`
  flex: 1;
  text-align: center;
  white-space: nowrap;
`;
