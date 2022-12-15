import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

export interface contentPropsType {
  content?: string;
}

export const Content = ({ content }: contentPropsType) => {
  return (
    <_Content size="bodyM" color="gray6">
      {content}
    </_Content>
  );
};

const _Content = styled(Text)`
  height: 108px;
  margin-bottom: 33px;
  overflow: scroll;
`;
