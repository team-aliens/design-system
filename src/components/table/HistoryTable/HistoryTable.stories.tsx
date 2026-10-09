import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HistoryTable } from './HistoryTable';
import { HistoryTableItem } from './types';

export default {
  title: 'component/Table/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const data: HistoryTableItem[] = [
  {
    application_id: 'b264324f-366a-11f1-a76c-a78f14fa5d8b',
    type_name: '개인 프로젝트',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
  },
  {
    application_id: '2',
    type_name: '개인 프로젝트',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
  },
  {
    application_id: '3',
    type_name: '개인 프로젝트',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
  },
  {
    application_id: '4',
    type_name: '개인 프로젝트',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
  },
  {
    application_id: '5',
    type_name: '개인 프로젝트',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
  },
];

export const StudyHistory: ComponentStory<typeof HistoryTable> = () => {
  return (
    <HistoryTable
      data={data}
      onRowClick={(id) => console.log('clicked:', id)}
    />
  );
};
