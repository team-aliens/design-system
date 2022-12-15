import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../styleGuide/text/Text';

interface propsType {
  link: string;
  Icon: ({ ...args }) => JSX.Element;
  name: string;
}

export const Item = ({ link, Icon, name }: propsType) => {
  const firstPath = useLocation().pathname.split('/')[1];
  return (
    <Link to={`/${link}`}>
      <_Wrapper isSelected={link === firstPath}>
        <_IconBox>
          <Icon
            fill={link === firstPath}
            colorKey={link === firstPath ? 'gray1' : 'gray5'}
          />
        </_IconBox>
        <Text
          color={link === firstPath ? 'gray1' : 'gray5'}
          margin={['left', 20]}
          size="titleS"
        >
          {name}
        </Text>
      </_Wrapper>
    </Link>
  );
};

const _Wrapper = styled.div<{ isSelected: boolean }>`
  width: 190px;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  cursor: pointer;
  ${({ theme, isSelected }) => {
    return css`
      background-color: ${isSelected ? theme.color.primary : theme.color.gray1};
      > :first-child {
        background-color: ${isSelected
          ? theme.color.primaryDarken1
          : theme.color.gray2};
      }
      > p {
        color: ${isSelected ? theme.color.gray1 : theme.color.gray5};
      }
    `;
  }}
`;

const _IconBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
