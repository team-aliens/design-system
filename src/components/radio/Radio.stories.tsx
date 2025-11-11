import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Radio } from './Radio';

export default {
  title: 'component/radio',
  component: Radio,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '라디오 비활성화 여부',
    },
    isChecked: {
      control: 'boolean',
      description: '라디오 선택 여부',
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  isChecked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  disabled: false,
  isChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  isChecked: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  isChecked: true,
};

export const RadioGroup = () => {
  const radioOptions = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const radioClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      {radioOptions.map((data, index) => (
        <div
          key={index}
          onClick={() => radioClick(index)}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: '8px',
          }}
        >
          <Radio isChecked={selectedIndex === index} />
          <span style={{ marginLeft: '8px' }}>{data}</span>
        </div>
      ))}
    </div>
  );
};
RadioGroup.parameters = {
  docs: {
    description: {
      story: '부모 컴포넌트에서 여러 라디오 버튼의 상태를 관리하는 예시입니다.',
    },
  },
};
