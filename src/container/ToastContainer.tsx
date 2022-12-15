import { Toast } from '../components/toast/Toast';
import { useContext } from 'react';
import { toastStateContext } from '../context/ToastContext';
import styled from 'styled-components';

export interface ToastOption {
  className?: string;
  holdingTime?: number;
}

export const ToastContainer = (props: ToastOption) => {
  const toastState = useContext(toastStateContext);
  return (
    <_Section>
      {toastState.lists.map((item) => (
        <Toast type={item.type}>{item.message}</Toast>
      ))}
    </_Section>
  );
};

const _Section = styled.ul`
  position: fixed;
  top: 20px;
  right: 20px;
`;
