import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'component/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <div style={{ width: 320 }}>
    <Skeleton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Title = Template.bind({});
Title.args = { width: '260px', height: '50px', radius: '8px' };

export const Box = Template.bind({});
Box.args = { height: '184px', radius: '8px' };
