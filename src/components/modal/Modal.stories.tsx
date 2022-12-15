import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../button/Button';
import { Modal } from '.';

export default {
  title: 'component/modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const modal = Template.bind({});

modal.args = {
  header: '모달 제목이 들어갑니다.',
  content: '내용이 들어갑니다.',
  inputList: [],
  buttonList: [
    <Button kind={'outline'}>취소</Button>,
    <Button kind={'contained'}>확인</Button>,
  ],
};
