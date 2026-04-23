import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';
import TeacherLogo from '../../assets/teacherLogo.svg';
import LogOut from '../../assets/logout.svg';

type HeaderVariant = 'HEAD_TEACHER' | 'GENERAL_TEACHER';

interface HeaderProps {
  variant: HeaderVariant;
  onLogout: () => void;
}

const NAV_ITEMS = [
  { label: '승인된 페이지', path: '/approved' },
  { label: '거절된 페이지', path: '/rejected' },
];

export function Header({ variant, onLogout }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Left>
        <Logo onClick={() => navigate('/')}>
          <img src={TeacherLogo} alt="logo" />
          <Title>새벽 자습 관리페이지</Title>
        </Logo>
        {variant === 'HEAD_TEACHER' && (
          <Nav>
            {NAV_ITEMS.map(({ label, path }) => (
              <StyledNavLink key={path} to={`study-apply${path}`}>
                {label}
              </StyledNavLink>
            ))}
          </Nav>
        )}
      </Left>
      <LogoutButton onClick={onLogout}>
        <img src={LogOut} alt="logout" />
        로그아웃
      </LogoutButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 128px;
  height: 123px;
  background: ${theme.teacherColor.gray[50]};
  border-bottom: 1px solid ${theme.teacherColor.gray[100]};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  cursor: pointer;
`;

const Title = styled.span`
  ${theme.font.headlineM};
  color: ${theme.teacherColor.gray[600]};
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledNavLink = styled(NavLink)`
  ${theme.font.headlineS};
  color: ${theme.teacherColor.gray[400]};
  text-decoration: none;
  transition: color 0.15s ease;

  &.active {
    color: ${theme.teacherColor.gray[600]};
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: none;
  ${theme.font.headlineS};
  color: ${theme.teacherColor.gray[600]};
  cursor: pointer;
`;
