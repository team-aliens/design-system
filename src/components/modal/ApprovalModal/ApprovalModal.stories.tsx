import type { Meta, StoryObj } from '@storybook/react';
import { ApprovalModal } from '.';

const meta: Meta<typeof ApprovalModal> = {
  title: 'component/approvalModal/ApprovalModal',
  component: ApprovalModal,
  argTypes: {
    type: { control: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof ApprovalModal>;

export const Default: Story = {
  args: {
    type: 'approve',
    close: () => undefined,
    onClick: () => undefined,
  },
};
