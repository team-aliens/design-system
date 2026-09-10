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
      <_Content>{content}</_Content>
      <_CountLabel>{countLabel}</_CountLabel>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 312px;
  height: 288px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const _Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-break: break-all;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;

  ${theme.font.titleS};
  color: ${theme.teacherColor.blue[500]};
`;

const _CountLabel = styled.span`
  font-size: ${theme.font.captionM};
  font-weight: 500;
  color: ${theme.teacherColor.blue[200]};
`;
