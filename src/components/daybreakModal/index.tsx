import styled from 'styled-components';
import { theme } from '../.././styles/theme';
import OutsideClickHandler from 'react-outside-click-handler';
import { Header, HeaderPropsType } from './Header';
import { Content, ContentPropsType } from './Content';

interface DaybreakModalProps extends HeaderPropsType, ContentPropsType {
  close: () => void;
}

export const DaybreakModal = ({
  title,
  content,
  textCount,
  close,
}: DaybreakModalProps) => {
  return (
    <_Background>
      <OutsideClickHandler onOutsideClick={close}>
        <_Modal>
          <Header title={title}></Header>
          <Content content={content} textCount={textCount}></Content>
        </_Modal>
      </OutsideClickHandler>
    </_Background>
  );
};

const _Background = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: rgba(16, 16, 16, 0.3);
  z-index: 10;
`;

const _Modal = styled.div`
  width: 368px;
  height: 416px;
  padding: 28px;
  border: 1px solid ${theme.teacherColor.blue[100]};
  border-radius: 20px;
  background: ${theme.teacherColor.gray[50]};
  box-shadow: 0 8px 16px 0 rgba(15, 110, 254, 0.1);
`;
