import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Input } from '.';

export default {
  title: 'component/input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [state, setState] = useState<string>('');
  return <Input value={state} setState={setState} {...args} />;
};

export const input = Template.bind({});

input.args = { label: 'title', width: 426 };
