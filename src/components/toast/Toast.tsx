import styled from 'styled-components';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Success } from '../styleGuide/icon/Success';
import { Error } from '../styleGuide/icon/Error';
import { Information } from '../styleGuide/icon/Information';
import { ToastOption } from '../../container/ToastContainer';
import { useDebounce } from '../../hooks/useDebounce';

export type ToastType = 'ERROR' | 'SUCCESS' | 'INFORMATION' | null;

interface Props extends ToastOption {
  type: ToastType;
  children: ReactNode;
}

const toastIconType = {
  SUCCESS: <Success />,
  ERROR: <Error />,
  INFORMATION: <Information />,
};

export const Toast = ({
  type,
  children,
  holdingTime = 1000,
  className,
}: Props) => {
  const [remainingHoldingTime, setRemainingHoldingTime] = useState(holdingTime);
  const { debounce } = useDebounce();
  const icon = useMemo(() => {
    return toastIconType[type];
  }, [type]);
  useEffect(() => {
    debounce(() => {
      setRemainingHoldingTime(0);
    }, holdingTime);
    setRemainingHoldingTime(holdingTime);
  }, [type, children, holdingTime]);

  return (
    remainingHoldingTime > 0 && (
      <_Wrapper type={type} className={className}>
        {icon}
        <strong>{children}</strong>
      </_Wrapper>
    )
  );
};

const _Wrapper = styled.div<{
  type: ToastType;
}>`
  margin-bottom: 14px;
  z-index: 20;
  min-width: 397px;
  background-color: ${({ theme }) => theme.color.gray1};
  padding: 16px 24px;
  color: ${({ theme, type }) => {
    switch (type) {
      case 'SUCCESS':
        return theme.color.primaryDarken2;
      case 'ERROR':
        return theme.color.error;
      case 'INFORMATION':
        return theme.color.gray9;
      default:
        return;
    }
  }};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  ${({ theme }) => theme.font.bodyS}
  display: flex;
  align-items: center;
  > strong {
    margin-left: 10px;
  }
`;
