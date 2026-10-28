import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { getDayOfWeek, WEEKDAY_LABELS } from '../../../utils/date';

interface ApplicationDatesProps {
  dates: string[];
}

export function ApplicationDates({ dates }: ApplicationDatesProps) {
  // 같은 날짜는 한 번만 세며, YYYY-MM-DD 문자열 정렬로 연월별 표시 순서를 맞춘다.
  const sortedDates = [...new Set(dates)].sort();
  const groups = sortedDates.reduce<Record<string, string[]>>(
    (result, date) => {
      const month = date.slice(0, 7);
      (result[month] ??= []).push(date);
      return result;
    },
    {}
  );

  return (
    <_Wrapper>
      <_LabelRow>
        <_Title>신청 날짜</_Title>
        <_Count>{sortedDates.length}일</_Count>
      </_LabelRow>
      <_Groups>
        {Object.entries(groups).map(([month, days]) => (
          <_Group key={month}>
            <_Month>
              {month.slice(0, 4)}년 {Number(month.slice(5))}월
            </_Month>
            <_Tiles>
              {days.map((date) => (
                <_Tile key={date}>
                  <_Day>{date.slice(8, 10)}</_Day>
                  <_Weekday>{WEEKDAY_LABELS[getDayOfWeek(date)]}</_Weekday>
                </_Tile>
              ))}
            </_Tiles>
          </_Group>
        ))}
      </_Groups>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const _LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const _Title = styled.span`
  ${theme.font.titleM}
  font-weight: 600;
  color: ${theme.teacherColor.gray[600]};
`;

const _Count = styled.span`
  padding: 2px 10px;
  border-radius: 999px;
  ${theme.font.bodyS}
  background: ${theme.teacherColor.blue[50]};
  color: ${theme.teacherColor.blue[300]};
`;

const _Groups = styled.div`
  display: flex;
  gap: 24px;
`;

const _Group = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 12px;

  & + & {
    padding-left: 25px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 5px;
      bottom: 0;
      width: 1px;
      background: ${theme.teacherColor.gray[200]};
    }
  }
`;

const _Month = styled.span`
  ${theme.font.bodyS}
  color: ${theme.teacherColor.gray[500]};
`;

const _Tiles = styled.div`
  display: flex;
  gap: 10px;
`;

const _Tile = styled.div`
  box-sizing: border-box;
  width: 88px;
  height: 83px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 12px;
  background: ${theme.teacherColor.blue[50]};
  color: ${theme.teacherColor.blue[300]};
`;

const _Day = styled.span`
  ${theme.font.titleL}
  font-weight: 600;
`;

const _Weekday = styled.span`
  ${theme.font.bodyS}
  line-height: 17px;
  font-weight: 600;
`;
