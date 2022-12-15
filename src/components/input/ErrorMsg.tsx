import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

export interface errorMsgPropsType {
  errorMsg?: string;
}

export const ErrorMsg = ({ errorMsg }: errorMsgPropsType) => {
  return (
    <_Error margin={[8, 0, 0, 16]} color="error" size="captionM">
      {errorMsg}
    </_Error>
  );
};

const _Error = styled(Text)`
  position: absolute;
`;
