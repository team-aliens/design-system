import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HistorySidebar } from '.';
import { StudyHistoryRequest } from './types';

export default {
  title: 'component/SideBar/HistorySidebar',
  component: HistorySidebar,
} as ComponentMeta<typeof HistorySidebar>;

/**
 * 첫 항목이 목록에서 눌러 들어온 신청이고, 나머지는 같은 학생의 지난 신청이다.
 * 이력 표의 행을 누르면 그 신청의 상세 뷰로 넘어가고, 뒤로가기로 목록 뷰에 돌아온다.
 */
const data: StudyHistoryRequest[] = [
  {
    application_id: 'b264324f-366a-11f1-a76c-a78f14fa5d8b',
    type_name: '개인 프로젝트',
    created_at: '2026.12.28',
    start_date: '2026.12.28',
    end_date: '2026.12.30',
    reason:
      'DMS 프로젝트 개발 어쩌구 저쩌구 이러쿵 저러쿵. 새벽에 남아서 배포 파이프라인을 정리하려고 합니다.',
    student_name: '2312 정일웅',
    student_gcn: '2312',
    teacher_name: '정은진',
    status: 'FIRST_APPROVED',
  },
  {
    application_id: '2',
    type_name: '개인공부',
    created_at: '2026.11.02',
    start_date: '2026.11.02',
    end_date: '2026.11.02',
    reason: '정보처리기능사 실기 준비',
    student_name: '2312 정일웅',
    student_gcn: '2312',
    teacher_name: '정은진',
    status: 'SECOND_APPROVED',
  },
  {
    application_id: '3',
    type_name: '팀 프로젝트',
    created_at: '2026.10.15',
    start_date: '2026.10.15',
    end_date: '2026.10.18',
    reason: '교내 해커톤 팀 프로젝트 마무리',
    student_name: '2312 정일웅',
    student_gcn: '2312',
    teacher_name: '서무성',
    status: 'REJECTED',
  },
  {
    application_id: '4',
    type_name: '대회 준비',
    created_at: '2026.09.21',
    start_date: '2026.09.21',
    end_date: '2026.09.25',
    reason: '전국 기능경기대회 준비',
    student_name: '2312 정일웅',
    student_gcn: '2312',
    teacher_name: '서무성',
    status: 'PENDING',
  },
];

const Template: ComponentStory<typeof HistorySidebar> = (args) => (
  <HistorySidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data,
  close: () => undefined,
};

/** status를 넘기지 않으면 이름 옆 뱃지를 그리지 않는다 */
export const WithoutStatus = Template.bind({});
WithoutStatus.args = {
  data: data.map(({ status, ...rest }) => rest),
  close: () => undefined,
};

/** 이력이 없으면 표 영역이 비어 있다 */
export const SingleApplication = Template.bind({});
SingleApplication.args = {
  data: [data[0]],
  close: () => undefined,
};
