import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface LoginButtonProps {
  label: string;
  disabled?: boolean;
}

export const LoginButton = ({ label, disabled }: LoginButtonProps) => {
  return (
    <_LoginButton type="submit" disabled={disabled}>
      {label}
    </_LoginButton>
  );
};

const _LoginButton = styled.button`
  width: 520px;
  padding: 15px 24px;
  border-radius: 12px;
  ${theme.font.headlineS};
  background: ${theme.teacherColor.blue[300]};
  color: ${theme.teacherColor.gray[50]};
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: ${theme.teacherColor.blue[200]};
  }

  :disabled {
    background-color: ${theme.teacherColor.blue[100]};
  }
`;
