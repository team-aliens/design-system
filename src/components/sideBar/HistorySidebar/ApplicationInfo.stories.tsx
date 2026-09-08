import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApplicationInfo } from './ApplicationInfo';

export default {
  title: 'component/SideBar/HistorySidebar/ApplicationInfo',
  component: ApplicationInfo,
} as ComponentMeta<typeof ApplicationInfo>;

const Template: ComponentStory<typeof ApplicationInfo> = (args) => (
  <div style={{ width: 516 }}>
    <ApplicationInfo {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  createdAt: '2026.12.28',
  teacherName: '정은진',
  type: '개인 프로젝트',
};
