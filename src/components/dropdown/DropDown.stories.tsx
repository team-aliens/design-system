import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropDown } from '.';

export default {
  title: 'component/dropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const items = ['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'];
const placeholder = '아이템을 선택해주세요';

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown width={240} placeholder={placeholder} items={items} {...args} />
);

export const Disable = Template.bind({});

Disable.args = {
  disable: true,
};

export const Enabled = Template.bind({});

Enabled.args = {
  disable: false,
};
