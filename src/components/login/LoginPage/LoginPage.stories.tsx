import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from './LoginPage';

const meta: Meta<typeof LoginPage> = {
  title: 'page/login/loginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onChange: { action: 'input changed' },
    onClick: { action: 'login button clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {
    value: {
      account_id: '',
      password: '',
    },
  },
};
