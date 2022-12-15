import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { SearchBox } from '.';

export default {
  title: 'component/search',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => {
  const [state, setState] = useState<string>('');
  return <SearchBox value={state} setState={setState} {...args} />;
};

export const disabled = Template.bind({});

disabled.args = {
  disabled: true,
};

export const enabled = Template.bind({});

enabled.args = {};
