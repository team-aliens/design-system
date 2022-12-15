import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Wrapper } from './';

export default {
  title: 'component/checkBox',
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = (args) => {
  const [status, setCheck] = useState<boolean>(false);
  return <Wrapper status={status} checkSetState={setCheck} {...args} />;
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
