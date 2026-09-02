import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface ReasonBoxProps {
  reason: string;
}

export function ReasonBox({ reason }: ReasonBoxProps) {
  return <_Box>{reason}</_Box>;
}

const _Box = styled.div`
  width: 100%;
  padding: 12px;
  background: ${theme.teacherColor.gray[50]};
  border: 1px solid ${theme.teacherColor.gray[200]};
  border-radius: 8px;
  ${theme.font.bodyM}
  color: ${theme.teacherColor.gray[600]};
`;
