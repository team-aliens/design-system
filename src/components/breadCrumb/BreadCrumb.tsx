import styled from 'styled-components';
import { Arrow } from '../styleGuide/icon';
import { Text } from '../styleGuide/text/Text';
import { useLocation, Link } from 'react-router-dom';

interface PropsType {
  className?: string;
  pathToKorean: any;
  top?: number;
  left?: number;
}

export const BreadCrumb = ({
  className,
  pathToKorean,
  top = 86,
  left = 330,
}: PropsType) => {
  const path: string[] = useLocation().pathname.split('/').slice(1);
  const pathList = [];
  const LinkList = [`/${path[0]}`];
  for (let i = 0; i < path.length; i++) {
    if (i > 0) LinkList.push(`${LinkList[i - 1]}/${path[i]}`);
    if (pathToKorean[path[i]]) {
      if (pathToKorean[path[i]].index)
        pathList.push(pathToKorean[path[i]].index);
      else if (typeof pathToKorean[path[i]] === 'string')
        pathList.push(pathToKorean[path[i]]);
      pathToKorean = pathToKorean[path[i]];
    } else if (pathToKorean['dynamic']) {
      pathList.push(pathToKorean['dynamic']);
      pathToKorean = pathToKorean['dynamic'];
    }
  }
  return (
    <_Wrapper left={left} top={top} className={className}>
      {pathList &&
        pathList.map((item, idx, arr) => (
          <>
            {arr.length !== idx + 1 ? (
              <Link to={LinkList[idx]}>
                <Text size="bodyS" color={'gray5'}>
                  {item}
                </Text>
              </Link>
            ) : (
              <Text size="bodyS" color={'gray10'} cursor="pointer">
                {item}
              </Text>
            )}
            {arr.length !== idx + 1 && (
              <Arrow colorKey="gray5" direction="right" />
            )}
          </>
        ))}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;
