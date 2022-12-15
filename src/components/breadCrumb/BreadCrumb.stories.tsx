import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { BreadCrumb } from './BreadCrumb';

export default {
  title: 'component/breadCrumb',
  component: BreadCrumb,
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<BreadCrumb {...args} />} />
    </Routes>
  </BrowserRouter>
);

export const breadCrumb = Template.bind({});

const pathToKorean = {
  'notice': '공지 목록',
  'my-page': '마이페이지',
};

breadCrumb.args = {
  pathToKorean: pathToKorean,
};
