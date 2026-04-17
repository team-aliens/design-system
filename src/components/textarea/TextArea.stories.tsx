import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextArea } from './TextArea';

export default {
  title: 'component/textarea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea value="" {...args} />
);

export const enable = Template.bind({
  onChange: () => {},
});

export const limit = Template.bind({});

limit.args = { onChange: () => {}, limit: 500, length: 100 };

export const disabled = Template.bind({});

disabled.args = {
  disabled: true,
  onChange: () => {},
};
