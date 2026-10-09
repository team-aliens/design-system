import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TagButton } from './TagButton';

export default {
  title: 'component/TeacherButton/TagButton',
  component: TagButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof TagButton>;

const Template: ComponentStory<typeof TagButton> = (args) => (
  <TagButton {...args} />
);

// 1. 기본 상태 (비활성화 상태)
export const Default = Template.bind({});
Default.args = {
  label: '태그 버튼',
  active: false,
};

// 2. 활성화 상태 (Active)
export const Active = Template.bind({});
Active.args = {
  label: '선택됨',
  active: true,
};

// 3. 비활성 버튼 (Disabled)
export const Disabled = Template.bind({});
Disabled.args = {
  label: '사용 불가',
  disabled: true,
};

// 4. 긴 텍스트 태그
export const LongText = Template.bind({});
LongText.args = {
  label: '매우 긴 이름의 태그 버튼입니다',
  active: false,
};
