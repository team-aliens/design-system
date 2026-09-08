import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import OutsideClickHandler from 'react-outside-click-handler';
import { HistorySidebarProps } from './types';
import { Header } from './Header';
import { ReasonBox } from './ReasonBox';
import { HistoryTable } from '../../table/HistoryTable/index';

export function HistorySidebar({ data, close }: HistorySidebarProps) {
  const [selectedId, setSelectedId] = useState<string | undefined>(
    data[0]?.application_id
  );
  const selectedHistory =
    data.find((item) => item.application_id === selectedId) ?? data[0];

  const handleRowClick = (id: string) => {
    setSelectedId(id);
  };

  return (
    <_Background>
      <OutsideClickHandler onOutsideClick={close}>
        <_SideBar>
          <_Content>
            {selectedHistory && (
              <>
                <Header
                  createdAt={selectedHistory.created_at}
                  studentName={selectedHistory.student_name}
                  teacherName={selectedHistory.teacher_name}
                  type={selectedHistory.type_name}
                  status={selectedHistory.status}
                />
                <ReasonBox reason={selectedHistory.reason} />
              </>
            )}
            <HistoryTable data={data} onRowClick={handleRowClick} />
          </_Content>
        </_SideBar>
      </OutsideClickHandler>
    </_Background>
  );
}

const _Background = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
`;

const _SideBar = styled.div`
  width: 580px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 80px 32px 40px;
  background: ${theme.teacherColor.gray[50]};
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow: hidden;
`;
