import styled from 'styled-components';
import { Text } from '../text/Text';
import { Add } from './Add';
import { Arrow } from './Arrow';
import { Close } from './Close';
import { Eye } from './Eye';
import { Human } from './Human';
import { PlusBubble } from './PlusBubble';
import { Search } from './Search';
import { Sort } from './Sort';
import { Trash } from './Trash';
import { Information } from './Information';
import { Error } from './Error';
import { Success } from './Success';
import { Home } from './Home';
import { PaperPlane } from './PaperPlane';
import { MegaPhone } from './MegaPhone';
import { ArchiveBox } from './ArchiveBox';

const IconList = [
  { svg: <Arrow direction="left" />, name: 'left-arrow' },
  { svg: <Arrow direction="right" />, name: 'right-arrow' },
  { svg: <Arrow direction="bottom" />, name: 'bottom-arrow' },
  { svg: <Arrow direction="top" />, name: 'top-arrow' },
  { svg: <Sort />, name: 'sort' },
  { svg: <Add />, name: 'add' },
  { svg: <Search />, name: 'search' },
  { svg: <Close />, name: 'close' },
  { svg: <Trash />, name: 'trash' },
  { svg: <Eye state={true} />, name: 'eye' },
  { svg: <Home fill={false} />, name: 'home-empty' },
  { svg: <Home fill={true} />, name: 'home-fill' },
  { svg: <PaperPlane fill={false} />, name: 'papre-plane-empty' },
  { svg: <PaperPlane fill={true} />, name: 'paper-plane-fill' },
  { svg: <MegaPhone fill={false} />, name: 'mega-phone-empty' },
  { svg: <MegaPhone fill={true} />, name: 'mega-phone-fill' },
  { svg: <PlusBubble fill={false} />, name: 'plus-bubble-empty' },
  { svg: <PlusBubble fill={true} />, name: 'plus-bubble-fill' },
  { svg: <ArchiveBox fill={false} />, name: 'archiveBox-empty' },
  { svg: <ArchiveBox fill={true} />, name: 'archiveBox-fill' },
  { svg: <Human fill={false} />, name: 'human-empty' },
  { svg: <Human fill={true} />, name: 'human-fill' },
  { svg: <Information />, name: 'information' },
  { svg: <Error />, name: 'error' },
  { svg: <Success />, name: 'success' },
];

export const Icon = () => {
  return (
    <_Wrapper>
      {IconList.map((Icon, idx) => (
        <_IconWrapper key={idx}>
          {Icon.svg}
          <Text display="block">{Icon.name}</Text>
        </_IconWrapper>
      ))}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const _IconWrapper = styled.div`
  width: 120px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  text-align: center;
  margin: 8px;
  padding: 8px;
  > svg {
    margin: 10px 0px;
  }
`;
