import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const shimmer = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`;

interface SkeletonProps {
  width?: string;
  height?: string;
  radius?: string;
}

/** 서버 데이터를 기다리는 동안 자리를 잡아두는 회색 블록 */
export const Skeleton = styled.div<SkeletonProps>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '16px'};
  border-radius: ${({ radius }) => radius ?? '4px'};
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    ${theme.teacherColor.gray[200]} 25%,
    ${theme.teacherColor.gray[100]} 50%,
    ${theme.teacherColor.gray[200]} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`;
