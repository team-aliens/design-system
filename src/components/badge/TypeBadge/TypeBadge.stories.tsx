import { Meta, StoryObj } from '@storybook/react';
import { TypeBadge } from './TypeBadge';

const meta: Meta<typeof TypeBadge> = {
  title: 'component/badge/TypeBadge',
  component: TypeBadge,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof TypeBadge>;

export const PersonalStudy: Story = {
  args: {
    label: '개인공부',
  },
};

export const PersonalProject: Story = {
  args: {
    label: '개인 프로젝트',
  },
};
