import type { Meta, StoryObj } from '@storybook/react';
import { DaybreakModal } from '.';
import { title } from 'process';

const meta: Meta<typeof DaybreakModal> = {
  title: 'component/dayBreakModal/DaybreakModal',
  component: DaybreakModal,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    textCount: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof DaybreakModal>;

export const Default: Story = {
  args: {
    title: '2312 정일웅',
    content: '안녕하세요',
    textCount: 200,
  },
};
