import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { SegmentedBtn } from '.';

export default {
  title: 'component/segmentedBtn',
  component: SegmentedBtn,
} as ComponentMeta<typeof SegmentedBtn>;

const selectedArr = ['A', 'B', 'C'];

const Template: ComponentStory<typeof SegmentedBtn> = (args) => {
  const [state, setState] = useState<string | number>(selectedArr[0]);
  const onChange = (selected: string | number) => {
    setState(selected);
  };
  return (
    <SegmentedBtn
      onChange={onChange}
      selectedArr={selectedArr}
      cur={state}
      {...args}
    />
  );
};

export const segmentedBtn = Template.bind({});
