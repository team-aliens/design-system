import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { StatusChip } from './StatusChip';
import { StudyStatus } from './types';

interface HeaderProps {
  studentName: string;
  status?: StudyStatus;
}

export function Header({ studentName, status }: HeaderProps) {
  return (
    <_TitleRow>
      <_Title>{studentName}</_Title>
      {status && <StatusChip status={status} />}
    </_TitleRow>
  );
}

const _TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const _Title = styled.h2`
  ${theme.font.headlineL}
  color: ${theme.teacherColor.gray[600]};
`;
