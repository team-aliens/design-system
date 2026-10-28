import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface ApplicationInfoProps {
  teacherName: string;
  type: string;
}

export function ApplicationInfo({ teacherName, type }: ApplicationInfoProps) {
  return (
    <_Wrapper>
      <_Item>
        <_Label>담당 선생님</_Label>
        <_Value>{teacherName}</_Value>
      </_Item>
      <_Item>
        <_Label>유형</_Label>
        <_Value>{type}</_Value>
      </_Item>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 80px;
`;

const _Item = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const _Label = styled.label`
  ${theme.font.titleM}
  font-weight: 600;
  color: ${theme.teacherColor.gray[600]};
`;

const _Value = styled.span`
  ${theme.font.titleLS}
  font-weight: 600;
  color: ${theme.teacherColor.blue[300]};
`;
