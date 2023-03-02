import { Toast } from '../components/toast/Toast';
import { useContext } from 'react';
import { toastStateContext } from '../context/ToastContext';
import styled from 'styled-components';

export interface ToastOption {
  className?: string;
  holdingTime?: number;
  zIndex?: number;
}

export const ToastContainer = ({ zIndex, ...options }: ToastOption) => {
  const toastState = useContext(toastStateContext);
  return (
    <_Section zIndex={zIndex || 1}>
      {toastState.lists.map((item) => (
        <Toast type={item.type} {...options}>
          {item.message}
        </Toast>
      ))}
    </_Section>
  );
};

const _Section = styled.ul<{
  zIndex: number;
}>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: ${({ zIndex }) => zIndex};
`;
