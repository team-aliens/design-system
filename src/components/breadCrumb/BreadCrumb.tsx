import styled from 'styled-components';
import { Arrow } from '../styleGuide/icon';
import { Text } from '../styleGuide/text/Text';
import { useLocation } from 'react-router-dom';
import { marginCssType } from '../../utils/distance';

interface PropsType extends marginCssType {
  className?: string;
  pathToKorean: { [key: string]: string };
}

// 동적 라우팅
// 링크 이동
export const BreadCrumb = ({ className, pathToKorean, margin }: PropsType) => {
  return (
    <_Wrapper margin={margin} className={className}>
      {/* {useLocation()
        .pathname */}
      {'/notice/my-page'
        .split('/')
        .slice(1)
        .map((item, idx, arr) => (
          <>
            <Text
              size="bodyS"
              color={arr.length !== idx + 1 ? 'gray5' : 'gray10'}
            >
              {pathToKorean[item]}
            </Text>
            {arr.length !== idx + 1 && (
              <Arrow colorKey="gray5" direction="right" />
            )}
          </>
        ))}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<marginCssType>`
  display: flex;
  align-items: center;
  gap: 12px;
`;
