import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { Text } from '../styleGuide/text/Text';

interface PropsType {
  width?: number;
  height?: number;
  limit?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export const TextArea = ({
  width,
  height,
  disabled,
  limit,
  onChange,
  value,
  placeholder,
  name,
  className,
}: PropsType) => {
  return (
    <_Wrapper className={className}>
      <_TextArea
        width={width}
        height={height}
        disabled={disabled}
        value={value}
        onChange={onChange}
        maxLength={limit}
        placeholder={placeholder}
        name={name}
      />
      {limit && (
        <Text size="captionM" color="gray5">
          ({value.length}/{limit})
        </Text>
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

interface TextAreaProps {
  width?: number;
  height?: number;
}

const _TextArea = styled.textarea<TextAreaProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  resize: none;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  background-color: ${({ theme }) => theme.color.gray1};
  border-radius: 4px;
  ${({ theme }) => theme.font.bodyM}
  padding: 9px 16px;
  :disabled {
    cursor: not-allowed;
  }
  ::placeholder {
    ${({ theme }) => theme.font.bodyM}
  }
`;
