import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

export interface contentPropsType {
  className?: string;
  content?: string;
}

export const Content = ({ className, content }: contentPropsType) => {
  return (
    <_Content className={className} size="bodyM" color="gray6">
      {content}
    </_Content>
  );
};

const _Content = styled(Text)`
  height: 108px;
  margin-bottom: 33px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
`;
