import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export type Status = 'FIRST_APPROVED' | 'FINAL_APPROVED' | 'REJECTED' | 'PENDING';

interface StatusBadgeProps {
  status: Status;
}

const STATUS_STYLES: Record<
  Status,
  { background: string; color: string; border?: string }
> = {
  FIRST_APPROVED: {
    background: theme.teacherColor.blue[50],
    color: theme.teacherColor.blue[200],
    border: `1px solid ${theme.teacherColor.blue[200]}`,
  },
  FINAL_APPROVED: {
    background: theme.teacherColor.blue[50],
    color: theme.teacherColor.blue[400],
    border: `1px solid ${theme.teacherColor.blue[400]}`,
  },
  REJECTED: { 
    background: theme.teacherColor.red[50],
    color: theme.teacherColor.red[200],
    border: `1px solid ${theme.teacherColor.red[200]}`,
  },
  PENDING: {
    background: theme.teacherColor.gray[100],
    color: theme.teacherColor.gray[400],
    border: `1px solid ${theme.teacherColor.gray[400]}`,
  },
};

const STATUS_LABELS: Record<Status, string> = {
  FIRST_APPROVED: '1차 승인',
  FINAL_APPROVED: '최종 승인',
  REJECTED: '거절됨',
  PENDING: '요청 중',
};

const StyledStatusBadge = styled.span<{ $status: Status }>`
  width: 124px;
  height: 47px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2000px;
  font-size: ${theme.font.headlineS};
  background: ${({ $status }) => STATUS_STYLES[$status].background};
  color: ${({ $status }) => STATUS_STYLES[$status].color};
  border: ${({ $status }) => STATUS_STYLES[$status].border ?? 'none'};
`;


export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <StyledStatusBadge $status={status}>
      {STATUS_LABELS[status]}
    </StyledStatusBadge>
  );
}
