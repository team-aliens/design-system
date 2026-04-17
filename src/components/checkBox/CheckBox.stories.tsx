import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { CheckBox } from './';

export default {
  title: 'component/checkBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [status, setCheck] = useState<boolean>(false);
  return <CheckBox status={status} checkSetState={setCheck} {...args} />;
};

export const disabled = Template.bind({});

disabled.args = {
  disabled: true,
  label: 'with label',
};

export const enabled = Template.bind({});

enabled.args = {
  disabled: false,
  label: 'with label',
};
