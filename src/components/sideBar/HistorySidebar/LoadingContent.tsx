import styled from 'styled-components';
import { Skeleton } from '../../skeleton/Skeleton';

const HISTORY_ROW_COUNT = 5;

/** 이력을 기다리는 동안 실제 내용과 같은 자리에 회색 블록을 깔아둔다 */
export function LoadingContent() {
  return (
    <>
      <Skeleton width="260px" height="50px" radius="8px" />
      <_Body>
        <_InfoRow>
          {[0, 1, 2].map((key) => (
            <_InfoItem key={key}>
              <Skeleton width="80px" height="34px" />
              <Skeleton width="100px" height="28px" />
            </_InfoItem>
          ))}
        </_InfoRow>
        <_Section>
          <Skeleton width="44px" height="34px" />
          <Skeleton height="184px" radius="8px" />
        </_Section>
        <_Section>
          <Skeleton width="44px" height="34px" />
          <_Rows>
            {Array.from({ length: HISTORY_ROW_COUNT }, (_, index) => (
              <Skeleton key={index} height="26px" />
            ))}
          </_Rows>
        </_Section>
      </_Body>
    </>
  );
}

const _Body = styled.div`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow: hidden;
`;

const _InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
`;

const _InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const _Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 13px;
`;
