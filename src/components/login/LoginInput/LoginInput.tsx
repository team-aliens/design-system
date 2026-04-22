import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { ChangeEvent } from 'react';

type InputType = 'ID' | 'PW';

interface LoginInputProps {
  type: InputType;
  value: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const MODE_CONFIG: Record<
  InputType,
  { label: string; htmlType: string; placeholder: string }
> = {
  ID: {
    label: '아이디',
    htmlType: 'text',
    placeholder: '아이디를 입력하세요',
  },
  PW: {
    label: '비밀번호',
    htmlType: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
};

export const LoginInput = ({ type, value }: LoginInputProps) => {
  const { label, htmlType, placeholder } = MODE_CONFIG[type];
  return (
    <_Wrapper>
      <_LoginInputLabel>{label}</_LoginInputLabel>
      <_LoginInput value={value} type={htmlType} placeholder={placeholder} />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const _LoginInputLabel = styled.label`
  ${theme.font.headlineS};
  color: ${theme.teacherColor.gray[800]};
  margin-bottom: 10px;
`;

const _LoginInput = styled.input`
  width: 520px;
  height: 60px;
  padding: 18px 24px;
  border-radius: 16px;
  ${theme.font.titleS};
  background: ${theme.teacherColor.gray[100]};
  border: 1px solid ${theme.teacherColor.gray[300]};
  color: ${theme.teacherColor.gray[600]};

  ::placeholder {
    color: ${theme.teacherColor.gray[400]};
  }

  :focus {
    border: 1px solid ${theme.teacherColor.blue[200]};
  }
`;
