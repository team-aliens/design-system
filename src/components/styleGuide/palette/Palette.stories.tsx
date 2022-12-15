import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Palette } from './Palette';

export default {
  title: 'styleGuide',
  component: Palette,
} as ComponentMeta<typeof Palette>;

const Template: ComponentStory<typeof Palette> = () => <Palette />;

export const color = Template.bind({});
