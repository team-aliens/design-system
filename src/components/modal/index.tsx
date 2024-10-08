import { Fragment, ReactNode } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { Close } from '../styleGuide/icon/Close';
import { Content, contentPropsType } from './Content';
import { Header, headerPropsType } from './Header';

interface propsType extends headerPropsType, contentPropsType {
  className?: string;
  inputList?: JSX.Element[];
  buttonList: JSX.Element[];
  close: () => void;
  children?: ReactNode;
  width?: string;
}

export const Modal = ({
  title,
  content,
  inputList,
  buttonList,
  close,
  className,
  children,
  width = '560px',
}: propsType) => {
  return (
    <_Background>
      <OutsideClickHandler onOutsideClick={close}>
        <_Modal className={className} width={width}>
          <_CloseWrapper onClick={close}>
            <Close size={18} />
          </_CloseWrapper>
          <Header className={className} title={title} />
          {content && <Content className={className} content={content} />}
          <_InputWrapper className={className}>
            {inputList?.map((input, idx) => (
              <Fragment key={idx}>{input}</Fragment>
            ))}
          </_InputWrapper>
          {children}
          <_BtnWrapper className={className}>
            {buttonList.map((Btn, idx) => (
              <Fragment key={idx}>{Btn}</Fragment>
            ))}
          </_BtnWrapper>
        </_Modal>
      </OutsideClickHandler>
    </_Background>
  );
};

const _InputWrapper = styled.div`
  > div {
    margin-top: 16px;
    width: 100%;
  }
`;

const _CloseWrapper = styled.div`
  position: relative;
  cursor: pointer;
  > svg {
    position: absolute;
    right: 0;
  }
`;

const _BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  > button {
    margin-left: 14px;
  }
`;

const _Modal = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 8px;
  padding: 40px;
`;

const _Background = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
`;
