import styled from 'styled-components';
import { theme } from '../.././styles/theme';

export interface HeaderPropsType {
  title: string;
}

export const Header = ({ title }: HeaderPropsType) => {
  return <_Wrapper>{title}</_Wrapper>;
};

const _Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${theme.teacherColor.blue[500]};
  ${theme.font.headlineS};
  color: ${theme.teacherColor.blue[500]};
`;
