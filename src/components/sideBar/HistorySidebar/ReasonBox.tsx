import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface ReasonBoxProps {
  reason: string;
}

export function ReasonBox({ reason }: ReasonBoxProps) {
  return <_Box>{reason}</_Box>;
}

/** 사유 길이와 무관하게 높이를 고정하고, 넘치면 안에서 스크롤한다 */
const _Box = styled.div`
  width: 100%;
  height: 184px;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 12px;
  background: ${theme.teacherColor.gray[50]};
  border: 1px solid ${theme.teacherColor.gray[200]};
  border-radius: 8px;
  ${theme.font.bodyM}
  color: ${theme.teacherColor.gray[600]};
  overflow-y: auto;
  overflow-wrap: break-word;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
