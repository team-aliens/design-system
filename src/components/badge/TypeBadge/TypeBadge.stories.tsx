import { Meta, StoryObj } from '@storybook/react';
import { TypeBadge } from './TypeBadge';

const meta: Meta<typeof TypeBadge> = {
  title: 'component/badge/TypeBadge',
  component: TypeBadge,
  // 스토리북 우측 Control 패널에서 label을 직접 수정해볼 수 있게 설정
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof TypeBadge>;

// 1. 기본형 (개인공부)
export const PersonalStudy: Story = {
  args: {
    label: '개인공부',
  },
};

// 2. 개인 프로젝트
export const PersonalProject: Story = {
  args: {
    label: '개인 프로젝트',
  },
};
