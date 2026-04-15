import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme' 

type Variant = 'approve' | 'reject';

interface ActionButtonProps {
  label: string;
  variant: Variant;
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<Variant, ReturnType<typeof css>> = {
  approve: css`
    background: ${theme.teacherColor.blue[50]};
    color: ${theme.teacherColor.blue[300]};
    border-color: ${theme.teacherColor.blue[300]};
    &:hover:not(:disabled) {
      background: ${theme.teacherColor.blue[100]}
    }
  `,
  reject: css`
    background: ${theme.teacherColor.red[50]};
    color: ${theme.teacherColor.red[200]};
    border-color: ${theme.teacherColor.red[200]};
    &:hover:not(:disabled) {
      background: ${theme.teacherColor.red[100]};
    }
  `,
};

const LABELS: Record<Variant, string> = {
  approve: '승인',
  reject: '거절',
};

const StyledActionButton = styled.button<{ $variant: Variant }>`
  display: inline-flex;
  align-items: center;
  padding: 15.5px 32px;
  border-radius: 12px;
  border: 2px solid;
  font-size: ${theme.font.headlineS};
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;

  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export function ActionButton({ label, variant, disabled, onClick }: ActionButtonProps) {
  const displayLabel = (variant === 'approve' && label) ? label : LABELS[variant];
  return (
    <StyledActionButton $variant={variant} disabled={disabled} onClick={onClick}>
      {displayLabel}
    </StyledActionButton>
  );
}