import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Table } from './Table';
import { GeneralStudyRequest, HeadStudyRequest, DormitoryStudyRequest } from './types';

export default {
  title: 'component/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const baseData = {
  application_id: 'b264324f-366a-11f1-a76c-a78f14fa5d8b',
  type_name: '개인 프로젝트',
  created_at: '2026-04-12T21:25:31',
  start_date: '2026-04-20',
  end_date: '2026-04-24',
  reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
  student_name: '정일웅',
  student_gcn: '2312',
};

const generalData: GeneralStudyRequest[] = [
  { ...baseData, status: 'FIRST_APPROVED' },
  { ...baseData, application_id: '2', status: 'FINAL_APPROVED' },
  { ...baseData, application_id: '3', status: 'REJECTED' },
  { ...baseData, application_id: '4', status: 'PENDING' },
];

const headData: HeadStudyRequest[] = [
  { ...baseData, teacher_name: '정은진' },
  { ...baseData, application_id: '2', teacher_name: '정은진' },
  { ...baseData, application_id: '3', teacher_name: '정은진' },
];

const dormitoryData: DormitoryStudyRequest[] = [
  { ...baseData, teacher_name: '서무성' },
  { ...baseData, application_id: '2', teacher_name: '서무성' },
  { ...baseData, application_id: '3', teacher_name: '서무성' },
];

export const GeneralTeacher: ComponentStory<typeof Table> = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <Table
      variant="GENERAL_TEACHER"
      data={generalData}
      selectedIds={selectedIds}
      onSelectChange={setSelectedIds}
      onRowClick={(id) => console.log('clicked:', id)}
    />
  );
};

export const HeadTeacher: ComponentStory<typeof Table> = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <Table
      variant="HEAD_TEACHER"
      data={headData}
      selectedIds={selectedIds}
      onSelectChange={setSelectedIds}
      onRowClick={(id) => console.log('clicked:', id)}
    />
  );
};

export const DormitoryTeacher: ComponentStory<typeof Table> = () => (
  <Table
    variant="DORMITORY_TEACHER"
    data={dormitoryData}
    onRowClick={(id) => console.log('clicked:', id)}
  />
);