import styled from 'styled-components';
import { MegaPhone } from '../styleGuide/icon/MegaPhone';
import { Home } from '../styleGuide/icon/Home';
import { PaperPlane } from '../styleGuide/icon/PaperPlane';
import { PlusBubble } from '../styleGuide/icon/PlusBubble';
import { ArchiveBox } from '../styleGuide/icon/ArchiveBox';
import { Human } from '../styleGuide/icon/Human';
import { Item } from './Item';
import { Logo } from '../logo';

type NavListType = '홈' | '신청' | '공지' | '설문' | '분실물' | '마이페이지';

interface PropsType {
  navList: NavListType[];
}

export const NavigatorBar = ({ navList }: PropsType) => {
  return (
    <_Filler>
      <_Navigation>
        <Logo
          margin={['bottom', 48]}
          width={113}
          height={40}
          type="horizontal"
        />
        {navList.map((name, idx) => {
          const { Icon, link } = nameToIconLink[name];
          return <Item key={idx} name={name} Icon={Icon} link={link} />;
        })}
      </_Navigation>
    </_Filler>
  );
};

const nameToIconLink = {
  신청: {
    link: 'apply',
    Icon: PaperPlane,
  },
  공지: {
    link: 'notice',
    Icon: MegaPhone,
  },
  설문: { link: 'survey', Icon: PlusBubble },
  분실물: {
    link: 'lost',
    Icon: ArchiveBox,
  },
  마이페이지: {
    link: 'my-page',
    Icon: Human,
  },
  홈: { link: '', Icon: Home },
};

const _Filler = styled.div`
  padding-right: 250px;
`;

const _Navigation = styled.nav`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 60px 30px 0 30px;
  gap: 20px;
  position: fixed;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  min-height: 100%;
  max-height: 100%;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
`;
