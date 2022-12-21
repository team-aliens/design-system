import styled, { css } from 'styled-components';
import { marginCssType, marginToCss } from '../../utils/distance';
import { Text } from '../styleGuide/text/Text';

interface PropsType<T> extends marginCssType {
  selectedArr: T[];
  cur: T;
  onChange: (selected: T) => void;
}

export const SegmentedBtn = <T extends string | number>({
  selectedArr,
  cur,
  onChange,
  margin,
}: PropsType<T>) => {
  return (
    <_Wrapper margin={margin}>
      {selectedArr.map((selected) => (
        <_SelectedItem
          onClick={() => onChange(selected)}
          display="inline-block"
          key={selected}
        >
          <_SelectedInner cur={selected === cur}>{selected}</_SelectedInner>
        </_SelectedItem>
      ))}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<marginCssType>`
  ${({ margin }) => marginToCss({ margin })};
  display: inline-block;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.color.primaryLighten1};
  cursor: pointer;
  border-radius: 4px;
  > div {
    :first-of-type {
      left: -1px;
    }
    :last-of-type {
      right: -1px;
    }
  }
`;

const _SelectedItem = styled(Text)`
  color: ${({ theme }) => theme.color.gray4};
  width: 110px;
  height: 48px;
  transition: 0.15s;
  position: relative;
  top: -1px;
`;

const _SelectedInner = styled.div<{ cur: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: 0.15s;
  ${({ theme, cur }) =>
    cur &&
    css`
      background-color: ${theme.color.primary};
      border-radius: 4px;
      color ${theme.color.gray1}
    `};
`;
