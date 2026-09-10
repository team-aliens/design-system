import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigatorBar } from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'component/navigator',
  component: NavigatorBar,
} as ComponentMeta<typeof NavigatorBar>;

const Template: ComponentStory<typeof NavigatorBar> = (args) => (
  <MemoryRouter initialEntries={['/approval']}>
    <NavigatorBar {...args} />
  </MemoryRouter>
);

export const navigator = Template.bind({});

navigator.args = {
  // navList: ['홈', '신청', '공지', '설문', '분실물', '마이페이지'],
  navList: [
    '홈',
    '신청',
    '공지',
    '설문',
    '마이페이지',
    '새벽자습',
    '승인/반려',
  ],
  variant: 'teacher',
};
