import { TableVariant } from './types';

const COL = {
  CHECKBOX: '28px',
  STUDENT: '132px',
  DATE: '128px',
  TYPE: '180px',
  TEACHER: '110px',
  REASON: '1fr',
  PERIOD: '276px',
  STATUS: '124px',
} as const;

export const GRID_TEMPLATE: Record<TableVariant, string> = {
  HEAD_TEACHER: `${COL.CHECKBOX} ${COL.STUDENT} ${COL.DATE} ${COL.TYPE} ${COL.TEACHER} ${COL.REASON} ${COL.PERIOD}`,
  GENERAL_TEACHER: `${COL.CHECKBOX} ${COL.STUDENT} ${COL.DATE} ${COL.TYPE} ${COL.REASON} ${COL.PERIOD} ${COL.STATUS}`,
  DORMITORY_TEACHER: `${COL.STUDENT} ${COL.DATE} ${COL.TYPE} ${COL.TEACHER} ${COL.REASON} ${COL.PERIOD}`,
};
