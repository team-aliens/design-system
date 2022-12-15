import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toast } from './Toast';
import {
  toastDispatchContext,
  ToastProvider,
  toastStateContext,
} from '../../context/ToastContext';
import { ToastContainer } from '../../container/ToastContainer';
import { useContext, useEffect } from 'react';

export default {
  title: 'component/toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;
const Template: ComponentStory<typeof Toast> = (args) => (
  <ToastProvider>
    <ToastContainer />
    {/*<Toast type={args.type}>{args.children}</Toast>*/}
    <Test />
  </ToastProvider>
);

const Test = () => {
  const state = useContext(toastStateContext);
  const dispatch = useContext(toastDispatchContext);
  useEffect(() => {
    dispatch({
      actionType: 'APPEND_TOAST',
      toastType: 'INFORMATION',
      message: '정보',
    });
    setTimeout(
      () =>
        dispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '성공',
        }),
      1000
    );
    setTimeout(
      () =>
        dispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '에러',
        }),
      2000
    );
  }, []);
  return <div></div>;
};

export const errorToast = Template.bind({});

errorToast.args = {
  type: 'ERROR',
  children: 'error message',
};

export const successToast = Template.bind({});

successToast.args = {
  type: 'SUCCESS',
  children: '인증에 성공했습니다.',
};

export const infoToast = Template.bind({});

infoToast.args = {
  type: 'INFORMATION',
  children: 'ddjsdsd@gmail.com 으로 아이디가 발송되었습니다.',
};
