import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StatusChip } from './StatusChip';

export default {
  title: 'component/SideBar/HistorySidebar/StatusChip',
  component: StatusChip,
} as ComponentMeta<typeof StatusChip>;

const Template: ComponentStory<typeof StatusChip> = (args) => (
  <StatusChip {...args} />
);

export const Pending = Template.bind({});
Pending.args = { status: 'PENDING' };

export const FirstApproved = Template.bind({});
FirstApproved.args = { status: 'FIRST_APPROVED' };

export const FinalApproved = Template.bind({});
FinalApproved.args = { status: 'SECOND_APPROVED' };

export const Rejected = Template.bind({});
Rejected.args = { status: 'REJECTED' };
