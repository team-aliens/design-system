import styled from 'styled-components';
import { theme } from '../.././styles/theme';

export interface ContentPropsType {
  content: string;
  textCount: number;
}

export const Content = ({ content, textCount }: ContentPropsType) => {
  const countLabel = `${textCount}/200`;
  return (
    <_Wrapper>
      <_Contnet>{content}</_Contnet>
      <_CountLabel>{countLabel}</_CountLabel>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  width: 312px;
  height: 288px;
`;

const _Contnet = styled.div`
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  word-break: break-all;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;

  font-size: ${theme.font.titleM};
  font-weight: 500;
  color: ${theme.teacherColor.blue[500]};
`;

const _CountLabel = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: ${theme.font.captionM};
  font-weight: 500;
  color: ${theme.teacherColor.blue[200]};
`;
