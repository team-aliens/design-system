import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';
import { Add } from '../styleGuide/icon/Add';

export default {
  title: 'component/button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const contained = Template.bind({});

contained.args = {
  kind: 'contained',
};

export const outlined = Template.bind({});

outlined.args = {
  kind: 'outline',
};

export const text = Template.bind({});

text.args = {
  kind: 'text',
};

export const underline = Template.bind({});

underline.args = {
  kind: 'underline',
};

export const rounded = Template.bind({});

rounded.args = {
  kind: 'rounded',
};

export const withIcon = Template.bind({});

withIcon.args = {
  icon: <Add />,
};
