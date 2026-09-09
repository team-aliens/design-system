import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import OutsideClickHandler from 'react-outside-click-handler';
import { HistorySidebarProps } from './types';
import { BackButton } from './BackButton';
import { Header } from './Header';
import { ApplicationInfo } from './ApplicationInfo';
import { ReasonBox } from './ReasonBox';
import { LoadingContent } from './LoadingContent';
import { HistoryTable } from '../../table/HistoryTable/index';

export function HistorySidebar({
  data,
  close,
  isLoading,
  onReachEnd,
}: HistorySidebarProps) {
  // null이면 목록 뷰(펼쳐 들어온 신청 + 이력 표), 값이 있으면 그 이력의 상세 뷰
  const [viewedId, setViewedId] = useState<string | null>(null);

  const openedApplication = data[0];
  const viewedApplication =
    (viewedId && data.find((item) => item.application_id === viewedId)) ||
    openedApplication;

  // 이력이 아직 없으면 패널만 먼저 띄우고 내용 자리에 자리표시를 그린다
  if (isLoading || !viewedApplication) {
    return (
      <_Background>
        <OutsideClickHandler onOutsideClick={close}>
          <_SideBar>
            <LoadingContent />
          </_SideBar>
        </OutsideClickHandler>
      </_Background>
    );
  }

  return (
    <_Background>
      <OutsideClickHandler onOutsideClick={close}>
        <_SideBar>
          {viewedId && <BackButton onClick={() => setViewedId(null)} />}
          <Header
            studentName={viewedApplication.student_name}
            status={viewedId ? undefined : openedApplication.status}
          />
          <_Body>
            <ApplicationInfo
              createdAt={viewedApplication.created_at}
              teacherName={viewedApplication.teacher_name}
              type={viewedApplication.type_name}
            />
            <_Section>
              <_SectionLabel>사유</_SectionLabel>
              <ReasonBox reason={viewedApplication.reason} />
            </_Section>
            {!viewedId && (
              <_Section>
                <_SectionLabel>이력</_SectionLabel>
                <HistoryTable
                  data={data}
                  onRowClick={setViewedId}
                  onReachEnd={onReachEnd}
                />
              </_Section>
            )}
          </_Body>
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
  gap: 56px;
  box-sizing: border-box;
  padding: 80px 32px 40px;
  background: ${theme.teacherColor.gray[50]};
`;

const _Body = styled.div`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow: hidden;
`;

const _Section = styled.div`
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:last-child {
    flex: 1;
  }
`;

const _SectionLabel = styled.span`
  ${theme.font.titleM}
  color: ${theme.teacherColor.gray[600]};
`;
