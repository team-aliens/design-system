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
      <Arrow colorKey={'gray7'} direction="bottom" />
    </_DropDownSelectedBox>
  );
};

const _DropDownSelectedBox = styled.div<{
  disable: boolean;
}>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${theme.teacherColor.gray[500]};
  padding: 10px 16px 10px 32px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: ${theme.teacherColor.gray[50]};
  cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
  > p {
    color: ${theme.teacherColor.gray[600]};
    ${theme.font.titleM}
  }
`;

const _Text = styled.p`
  width: 109px;
  text-align: center;
`;
