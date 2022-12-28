import styled from 'styled-components';
import { Arrow } from '../styleGuide/icon';
import { Text } from '../styleGuide/text/Text';
import { useLocation, Link } from 'react-router-dom';
import { marginCssType } from '../../utils/distance';

interface PropsType extends marginCssType {
  className?: string;
  pathToKorean: any;
}

export const BreadCrumb = ({ className, pathToKorean, margin }: PropsType) => {
  const path: string[] = useLocation().pathname.split('/').slice(1);
  const pathList = [];
  const LinkList = [`/${path[0]}`];
  for (let i = 0; i < path.length; i++) {
    if (i > 0) LinkList.push(`${LinkList[i - 1]}/${path[i]}`);
    if (pathToKorean[path[i]]) {
      pathList.push(pathToKorean[path[i]].index || pathToKorean[path[i]]);
      pathToKorean = pathToKorean[path[i]];
    } else if (pathToKorean['dynamic']) {
      pathList.push(pathToKorean['dynamic']);
      pathToKorean = pathToKorean['dynamic'];
    }
  }
  return (
    <_Wrapper margin={margin} className={className}>
      {pathList &&
        pathList.map((item, idx, arr) => (
          <>
            <Link to={LinkList[idx]}>
              <Text
                size="bodyS"
                color={arr.length !== idx + 1 ? 'gray5' : 'gray10'}
              >
                {item}
              </Text>
            </Link>
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
