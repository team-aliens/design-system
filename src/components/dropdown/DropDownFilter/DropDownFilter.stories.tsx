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
  <DropDownFilter width={240} items={items} {...args} />
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
