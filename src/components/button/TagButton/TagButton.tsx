// TagButton.tsx
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

interface TagButtonProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledTagButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 15.5px 32px;
  border-radius: 12px;
  border: 2px solid ${({ $active }) => ($active ? theme.teacherColor.blue[300] : theme.teacherColor.gray[500])};
  background: ${({ $active }) => ($active ? theme.teacherColor.blue[300] : theme.teacherColor.gray[50])};
  color: ${({ $active }) => ($active ? theme.teacherColor.gray[50] : theme.teacherColor.blue[500])};
  font-size: ${theme.font.headlineS};
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;

  &:hover:not(:disabled) {
    border-color: ${({ $active }) => ($active ? theme.teacherColor.gray[500] : theme.teacherColor.gray[400])};
    background: ${({ $active }) => ($active ? theme.teacherColor.gray[50] : theme.teacherColor.gray[100])};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export function TagButton({ label, active, disabled, onClick }: TagButtonProps) {
  return (
    <StyledTagButton $active={active} disabled={disabled} onClick={onClick}>
      {label}
    </StyledTagButton>
  );
}