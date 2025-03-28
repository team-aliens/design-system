import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigatorBar } from '.';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

export default {
  title: 'component/navigator',
  component: NavigatorBar,
} as ComponentMeta<typeof NavigatorBar>;

const Template: ComponentStory<typeof NavigatorBar> = (args) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NavigatorBar {...args} />} />
    </Routes>
  </BrowserRouter>
);

export const navigator = Template.bind({});

navigator.args = {
  // navList: ['홈', '신청', '공지', '설문', '분실물', '마이페이지'],
  navList: ['홈', '신청', '공지', '설문', '마이페이지'],
  pathname: '/',
};
