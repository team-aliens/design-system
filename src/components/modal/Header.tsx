import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

export interface headerPropsType {
  className?: string;
  title?: string;
}

export const Header = ({ className, title }: headerPropsType) => {
  return (
    <_Wrapper className={className} margin={['bottom', 37]} size="titleM">
      {title}
    </_Wrapper>
  );
};

const _Wrapper = styled(Text)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
