import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface LoginButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const LoginButton = ({ label, disabled, onClick }: LoginButtonProps) => {
  return (
    <_LoginButton disabled={disabled} onClick={onClick}>
      {label}
    </_LoginButton>
  );
};

const _LoginButton = styled.button`
  width: 520px;
  padding: 15px 24px;
  border-radius: 12px;
  ${theme.font.headlineS};
  background: ${theme.teacherColor.blue[200]};
  color: ${theme.teacherColor.gray[50]};

  :hover {
    background-color: ${theme.teacherColor.blue[300]};
  }

  :disabled {
    background-color: ${theme.teacherColor.blue[100]};
  }
`;
