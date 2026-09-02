import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface HeaderProps {
  studentName: string;
  createdAt: string;
  teacherName: string;
  type: string;
}

export function Header({
  studentName,
  createdAt,
  teacherName,
  type,
}: HeaderProps) {
  return (
    <_Wrapper>
      <_Title>{studentName}</_Title>
      <_InfoGrid>
        <_InfoItem>
          <_Label>신청날짜</_Label>
          <_Value>{createdAt}</_Value>
        </_InfoItem>
        <_InfoItem>
          <_Label>담당 선생님</_Label>
          <_Value>{teacherName}</_Value>
        </_InfoItem>
        <_InfoItem>
          <_Label>유형</_Label>
          <_Value>{type}</_Value>
        </_InfoItem>
      </_InfoGrid>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const _Title = styled.h2`
  ${theme.font.headlineL}
  color: ${theme.teacherColor.gray[600]};
`;

const _InfoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
`;

const _InfoItem = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const _Label = styled.label`
  ${theme.font.titleM}
  color: ${theme.teacherColor.gray[600]};
`;

const _Value = styled.span`
  ${theme.font.titleLS}
  color: ${theme.teacherColor.blue[300]};
`;
