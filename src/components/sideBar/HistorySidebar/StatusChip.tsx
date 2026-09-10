import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { StudyStatus } from './types';

const { gray, blue, red } = theme.teacherColor;

const CHIP_STYLES: Record<
  StudyStatus,
  { background: string; color: string; border: string }
> = {
  PENDING: {
    background: 'transparent',
    color: gray[400],
    border: `1px solid ${gray[400]}`,
  },
  FIRST_APPROVED: {
    background: 'transparent',
    color: blue[200],
    border: `1px solid ${blue[200]}`,
  },
  REJECTED: {
    background: 'transparent',
    color: red[200],
    border: `1px solid ${red[200]}`,
  },
  SECOND_APPROVED: {
    background: blue[50],
    color: blue[400],
    border: 'none',
  },
};

const CHIP_LABELS: Record<StudyStatus, string> = {
  PENDING: '요청 중',
  FIRST_APPROVED: '1차 승인',
  REJECTED: '거절 됨',
  SECOND_APPROVED: '최종 승인',
};

interface StatusChipProps {
  status: StudyStatus;
}

export function StatusChip({ status }: StatusChipProps) {
  return <_Chip $status={status}>{CHIP_LABELS[status]}</_Chip>;
}

const _Chip = styled.span<{ $status: StudyStatus }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 6px 12px;
  border-radius: 2000px;
  white-space: nowrap;
  ${theme.font.bodyS};
  background: ${({ $status }) => CHIP_STYLES[$status].background};
  color: ${({ $status }) => CHIP_STYLES[$status].color};
  border: ${({ $status }) => CHIP_STYLES[$status].border};
`;
