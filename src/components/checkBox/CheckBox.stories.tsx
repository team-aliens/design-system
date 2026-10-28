import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { CheckBox } from './';

export default {
  title: 'component/checkBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [status, setStatus] = useState<boolean>(args.status ?? false);
  return <CheckBox {...args} status={status} onChange={setStatus} />;
};

export const enabled = Template.bind({});
enabled.args = {
  disabled: false,
  label: 'with label',
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  label: 'with label',
};

export const teacherRow = Template.bind({});
teacherRow.args = {
  variant: 'teacherRow',
};

/** 상태가 확정돼 더 이상 선택할 수 없는 행: 회색 체크 박스로 잠긴다 */
export const teacherRowLocked = Template.bind({});
teacherRowLocked.args = {
  variant: 'teacherRow',
  status: true,
  disabled: true,
};

/** 테이블 헤더용 흰색 체크박스라 파란 배경 위에서 확인한다 */
export const teacherHeader = Template.bind({});
teacherHeader.args = {
  variant: 'teacherHeader',
};
teacherHeader.decorators = [
  (Story) => (
    <div style={{ padding: 16, background: '#0F6EFE' }}>
      <Story />
    </div>
  ),
];
