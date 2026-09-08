import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HistorySidebar } from '.';
import { StudyHistoryRequest } from './types';

export default {
  title: 'component/SideBar/HistorySidebar',
  component: HistorySidebar,
} as ComponentMeta<typeof HistorySidebar>;

const data: StudyHistoryRequest[] = [
  {
    application_id: 'b264324f-366a-11f1-a76c-a78f14fa5d8b',
    type_name: '개인 프로젝트',
    created_at: '2026-04-12T21:25:31',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
    student_name: '정일웅',
    student_gcn: '2312',
    teacher_name: '정은진',
    status: 'FIRST_APPROVED',
  },
  {
    application_id: '2',
    type_name: '개인 프로젝트',
    created_at: '2026-04-12T21:25:31',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
    student_name: '정일웅',
    student_gcn: '2312',
    teacher_name: '정은진',
  },
  {
    application_id: '3',
    type_name: '개인 프로젝트',
    created_at: '2026-04-12T21:25:31',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
    student_name: '정일웅',
    student_gcn: '2312',
    teacher_name: '정은진',
  },
  {
    application_id: '4',
    type_name: '개인 프로젝트',
    created_at: '2026-04-12T21:25:31',
    start_date: '2026-04-20',
    end_date: '2026-04-24',
    reason: 'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵...',
    student_name: '정일웅',
    student_gcn: '2312',
    teacher_name: '정은진',
  },
];

const Template: ComponentStory<typeof HistorySidebar> = (args) => (
  <HistorySidebar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data,
  close: () => undefined,
  onApprove: () => undefined,
  onReject: () => undefined,
};
