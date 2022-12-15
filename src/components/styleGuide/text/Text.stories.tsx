import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';
import { font, fontKeyOfType } from '../../../styles/theme/font';

export default {
  title: 'styleGuide',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = () => (
  <>
    {Object.keys(font).map((kind: fontKeyOfType, idx) => (
      <Text key={idx} size={kind}>
        {kind}
      </Text>
    ))}
  </>
);

export const text = Template.bind({});
