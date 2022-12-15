import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from './Switch';
import React from 'react';

export default {
  title: 'component/switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const disabled = Template.bind({});

disabled.args = {
  disabled: true,
};

export const enabled = Template.bind({});

enabled.args = {
  disabled: false,
};
