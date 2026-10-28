import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActionButton } from './ActionButton';

export default {
  title: 'component/TeacherButton/ActionButton',
  component: ActionButton,
  argTypes: {
    onClick: { action: 'clicked' },
    // variant에 따라 label이 어떻게 변하는지 확인하기 쉽게 제어
    variant: {
      control: { type: 'radio' },
      options: ['approve', 'reject'],
    },
  },
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
);

// 1. 기본 승인 버튼 (기본 라벨 '승인' 출력)
export const ApproveDefault = Template.bind({});
ApproveDefault.args = {
  variant: 'approve',
};

// 2. 커스텀 승인 버튼 (label 전달 시 '참가 수락' 출력)
export const ApproveCustom = Template.bind({});
ApproveCustom.args = {
  variant: 'approve',
  label: '1차 승인',
};

// 3. 거절 버튼 (label을 넣어도 무조건 '거절' 출력)
export const Reject = Template.bind({});
Reject.args = {
  variant: 'reject',
  label: '이건 무시됨',
};

// 4. 비활성화 상태
export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'approve',
  disabled: true,
};
