import styled from 'styled-components';

export const Spinner = styled.div`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.color.gray4};
    border-top-color: ${({ theme }) => theme.color.gray7};
    animation: spinner 0.8s linear infinite;
  }
`;
