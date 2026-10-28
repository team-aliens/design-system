import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <_Button type="button" onClick={onClick} aria-label="뒤로 가기">
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
    </_Button>
  );
}

const _Button = styled.button`
  display: flex;
  align-self: flex-start;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.teacherColor.gray[600]};
`;
