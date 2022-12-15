import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'component/spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const spinner = Template.bind({});

spinner.args = {};
