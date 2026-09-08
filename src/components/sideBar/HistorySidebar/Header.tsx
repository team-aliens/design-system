import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { StatusChip } from './StatusChip';
import { StudyStatus } from './types';

interface HeaderProps {
  studentName: string;
  status?: StudyStatus;
  /** 넘기면 이름 위에 뒤로가기 버튼을 그린다 */
  onBack?: () => void;
}

export function Header({ studentName, status, onBack }: HeaderProps) {
  return (
    <_Wrapper>
      {onBack && (
        <_BackButton type="button" onClick={onBack} aria-label="뒤로 가기">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4359 17.3359L17.9026 24.8026L16.0026 26.6693L5.33594 16.0026L16.0026 5.33594L17.9026 7.2026L10.4359 14.6693H26.6693V17.3359H10.4359Z"
              fill="currentColor"
            />
          </svg>
        </_BackButton>
      )}
      <_TitleRow>
        <_Title>{studentName}</_Title>
        {status && <StatusChip status={status} />}
      </_TitleRow>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const _BackButton = styled.button`
  display: flex;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.teacherColor.gray[600]};
`;

const _TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const _Title = styled.h2`
  ${theme.font.headlineL}
  color: ${theme.teacherColor.gray[600]};
`;
