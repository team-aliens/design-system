import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '.';

export default {
  title: 'component/logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />;
};

export const horizontal = Template.bind({});

horizontal.args = { type: 'horizontal' };

export const vertical = Template.bind({});

vertical.args = { type: 'vertical' };
