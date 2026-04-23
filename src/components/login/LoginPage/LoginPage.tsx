import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { ChangeEvent } from 'react';
import { Logo } from '../../logo/index';
import { LoginInput } from '../LoginInput/LoginInput';
import { LoginButton } from '../LoginButton/LoginButton';
import LoginBg from '../../../assets/loginBg.svg';

const HEADER_TITLE = `새벽 자습 관리 \n페이지에 오신걸 환영합니다`;

interface LoginPageProps {
  value: {
    account_id: string;
    password: string;
  };
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClick: () => void;
}

export const LoginPage = ({ value, onChange, onClick }: LoginPageProps) => {
  return (
    <_PageWrapper>
      <_ContentArea>
        <Logo
          type="horizontal"
          width={120}
          height={43}
          margin={[0, 0, 0, 40]}
        />

        <_LoginSection>
          <_HeaderSection>
            <_Title>{HEADER_TITLE}</_Title>
            <_Description>계속하려면 계정에 로그인하세요</_Description>
          </_HeaderSection>

          <_LoginForm>
            <_InputGroup>
              <LoginInput
                name="account_id"
                type="ID"
                value={value.account_id}
                onChange={onChange}
              />
              <LoginInput
                name="password"
                type="PW"
                value={value.password}
                onChange={onChange}
              />
            </_InputGroup>
            <LoginButton label="로그인" onClick={onClick} />
          </_LoginForm>
        </_LoginSection>
      </_ContentArea>
    </_PageWrapper>
  );
};

const _PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${LoginBg});
  background-size: cover;
  background-position: center;
`;

const _ContentArea = styled.section`
  width: 720px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  background: #ffffff;
`;

const _LoginSection = styled.div`
  padding-top: 105.5px;
  padding-left: 100px;
`;

const _HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 44px;
`;

const _Title = styled.span`
  ${theme.font.headlineL};
  color: ${theme.teacherColor.gray[800]};
  white-space: pre-wrap;
`;

const _Description = styled.span`
  ${theme.font.headlineS};
  color: ${theme.teacherColor.gray[400]};
`;

const _LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const _InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
