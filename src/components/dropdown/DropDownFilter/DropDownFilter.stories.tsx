import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropDownFilter } from '.';

export default {
  title: 'component/dropDown/dropDownFilter',
  component: DropDownFilter,
} as ComponentMeta<typeof DropDownFilter>;

const items = [
  { label: '개인공부', value: 'ITEM_1' },
  { label: '팀 프로젝트', value: 'ITEM_2' },
  { label: '개인 프로젝트', value: 'ITEM_3' },
  { label: '대회 준비', value: 'ITEM_4' },
  { label: '기타', value: 'ITEM_5' },
];

const Template: ComponentStory<typeof DropDownFilter> = (args) => (
  <DropDownFilter items={items} {...args} />
);

export const Disable = Template.bind({});

Disable.args = {
  disable: true,
  placeholder: '전체',
  onChange: () => undefined,
};

export const Enabled = Template.bind({});

Enabled.args = {
  disable: false,
  placeholder: '전체',
  onChange: () => undefined,
};

/** 라벨이 길면 박스가 내용에 맞춰 늘어나고 줄바꿈되지 않는다 */
export const LongLabel = Template.bind({});

LongLabel.args = {
  disable: false,
  placeholder: '전체',
  value: 'ITEM_3',
  onChange: () => undefined,
};
