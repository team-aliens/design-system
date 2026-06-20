import type { Meta, StoryObj } from '@storybook/react';

import { LoginButton } from './LoginButton';

const meta: Meta<typeof LoginButton> = {
  title: 'component/login/LoginButton',

  component: LoginButton,

  argTypes: {
    label: { control: 'string' },

    disabled: { control: 'boolean' },

    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const Default: Story = {
  args: {
    label: '로그인',

    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: '로그인',

    disabled: true,
  },
};
