import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

export default {
  title: 'component/header',
  component: Header,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeadTeacher = Template.bind({});
HeadTeacher.args = {
  variant: 'HEAD_TEACHER',
  onLogout: () => console.log('logout'),
};

export const GeneralTeacher = Template.bind({});
GeneralTeacher.args = {
  variant: 'GENERAL_TEACHER',
  onLogout: () => console.log('logout'),
};