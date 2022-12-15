import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

export interface headerPropsType {
  title?: string;
}

export const Header = ({ title }: headerPropsType) => {
  return (
    <_Wrapper margin={['bottom', 37]} size="titleM">
      {title}
    </_Wrapper>
  );
};

const _Wrapper = styled(Text)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
