import type { Meta, StoryObj } from '@storybook/react';
import { LoginInput } from './LoginInput';

const meta: Meta<typeof LoginInput> = {
  title: 'component/login/LoginInput',
  component: LoginInput,
  argTypes: {
    type: {
      control: 'radio',
      options: ['ID', 'PW'],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof LoginInput>;

export const ID: Story = {
  args: {
    type: 'ID',
  },
};

export const Password: Story = {
  args: {
    type: 'PW',
  },
};
