import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';

export default {
  title: 'component/radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const disabled = Template.bind({});

disabled.args = {
  disabled: true,
};

export const enabled = Template.bind({});

enabled.args = {
  disabled: false,
};
