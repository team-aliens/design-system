import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Content, ContentPropsType } from './Content';

export type ApprovalType = 'approve' | 'reject';

interface propsType extends ContentPropsType {
  type: ApprovalType;
  onClick: () => void;
  close: () => void;
}

export const ApprovalModal = ({ type, onClick, close }: propsType) => {
  return (
    <_Background>
      <OutsideClickHandler onOutsideClick={close}>
        <_Modal>
          <Content
            type={type}
            title={
              type === 'approve'
                ? '선택한 인원들을 승인 하시겠습니까?'
                : '선택한 인원들을 거절 하시겠습니까?'
            }
          ></Content>
          <_BtnWrapper>
            <_Button onClick={close}>취소</_Button>
            <_Button approvalType={type} onClick={onClick}>
              {type === 'approve' ? '승인' : '거절'}
            </_Button>
          </_BtnWrapper>
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
  width: 364px;
  height: 252px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 28px 40px;
  border-radius: 12px;
  background: ${theme.teacherColor.gray[50]};
  box-shadow: 0 8px 16px 0 rgba(15, 110, 254, 0.1);
`;

const _BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const _Button = styled.button<{ approvalType?: ApprovalType }>`
  padding: 6px 24px;
  border-radius: 12px;
  background: ${({ approvalType, theme }) => {
    if (!approvalType) return theme.teacherColor.gray[400];
    return approvalType === 'approve'
      ? theme.teacherColor.blue[300]
      : theme.teacherColor.red[300];
  }};
  color: ${theme.teacherColor.gray[50]};
  ${theme.font.titleS};
`;
