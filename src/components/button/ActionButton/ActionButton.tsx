import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

type Variant = 'approve' | 'reject';

interface ActionButtonProps {
  label: string;
  variant: Variant;
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<Variant, ReturnType<typeof css>> = {
  approve: css`
    background: ${theme.teacherColor.blue[300]};
    border-color: ${theme.teacherColor.blue[300]};
  `,
  reject: css`
    background: ${theme.teacherColor.red[200]};
    border-color: ${theme.teacherColor.red[200]};
  `,
};

const LABELS: Record<Variant, string> = {
  approve: '승인',
  reject: '거절',
};

const StyledActionButton = styled.button<{ $variant: Variant }>`
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 12px;
  border: 1px solid;
  ${theme.font.titleS};
  color: ${theme.teacherColor.gray[50]};
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;

  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export function ActionButton({
  label,
  variant,
  disabled,
  onClick,
}: ActionButtonProps) {
  const displayLabel = variant === 'approve' && label ? label : LABELS[variant];
  return (
    <StyledActionButton
      $variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {displayLabel}
    </StyledActionButton>
  );
}
