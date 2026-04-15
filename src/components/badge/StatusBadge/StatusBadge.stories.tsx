import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

export default {
  title: 'component/badge/StatusBadge',
  component: StatusBadge,
} as ComponentMeta<typeof StatusBadge>;

const Template: ComponentStory<typeof StatusBadge> = (args) => (
  <StatusBadge {...args} />
);

export const FirstApproved = Template.bind({});
FirstApproved.args = { status: 'FIRST_APPROVED' };

export const FinalApproved = Template.bind({});
FinalApproved.args = { status: 'FINAL_APPROVED' };

export const Rejected = Template.bind({});
Rejected.args = { status: 'REJECTED' };

export const Pending = Template.bind({});
Pending.args = { status: 'PENDING' };