import { TableVariant } from './types';

const COL = {
  CHECKBOX: '28px',
  STUDENT: '120px',
  DATE: '120px',
  TYPE: '180px',
  TEACHER: '90px',
  REASON: '1fr',
  PERIOD: '220px',
  STATUS: '124px',
} as const;

export const GRID_TEMPLATE: Record<TableVariant, string> = {
  HEAD_TEACHER: `${COL.CHECKBOX} ${COL.STUDENT} ${COL.DATE} ${COL.TYPE} ${COL.TEACHER} ${COL.REASON} ${COL.PERIOD}`,
  GENERAL_TEACHER: `${COL.CHECKBOX} ${COL.STUDENT} ${COL.DATE} ${COL.TYPE} ${COL.REASON} ${COL.PERIOD} ${COL.STATUS}`,
  DORMITORY_TEACHER: `${COL.STUDENT} ${COL.DATE} ${COL.TYPE} ${COL.TEACHER} ${COL.REASON} ${COL.PERIOD}`,
};
