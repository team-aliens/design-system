export const WEEKDAY_LABELS = [
  '일',
  '월',
  '화',
  '수',
  '목',
  '금',
  '토',
] as const;

// YYYY-MM-DD를 UTC 기준으로 해석해 실행 환경의 시간대와 무관하게 0(일)~6(토)를 반환한다.
export const getDayOfWeek = (date: string): number =>
  new Date(`${date}T00:00:00Z`).getUTCDay();

// YYYY-MM-DD 문자열을 정렬하되 전달받은 배열은 변경하지 않는다.
export const getSortedDates = (dates: string[]): string[] =>
  [...new Set(dates)].sort();
