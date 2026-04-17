import styled from 'styled-components';
import { Text } from '../styleGuide/text/Text';

export interface errorMsgPropsType {
  className?: string;
  errorMsg?: string;
}

export const ErrorMsg = ({ errorMsg, className }: errorMsgPropsType) => {
  return (
    <_Error
      className={className}
      margin={[8, 0, 0, 16]}
      color="error"
      size="captionM"
    >
      {errorMsg}
    </_Error>
  );
};

const _Error = styled(Text)`
  position: absolute;
`;
