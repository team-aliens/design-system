import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import OutsideClickHandler from 'react-outside-click-handler';
import { HistorySidebarProps } from './types';
import { Header } from './Header';
import { ReasonBox } from './ReasonBox';
import { HistoryTable } from '../../table/HistoryTable/index';
import { ActionButton } from '../../button/ActionButton/ActionButton';

export function HistorySidebar({
  data,
  close,
  onApprove,
  onReject,
}: HistorySidebarProps) {
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
                />
                <ReasonBox reason={selectedHistory.reason} />
              </>
            )}
            <HistoryTable data={data} onRowClick={handleRowClick} />
          </_Content>
          <_BtnWrapper>
            <ActionButton variant="approve" label="승인" onClick={onApprove} />
            <ActionButton variant="reject" label="거절" onClick={onReject} />
          </_BtnWrapper>
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
  justify-content: center;
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

const _BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  gap: 10px;
  margin-top: 5px;
  padding: 10px 0;
  border-top: 1px solid ${theme.teacherColor.gray[200]};
  background: ${theme.teacherColor.gray[50]};
`;
