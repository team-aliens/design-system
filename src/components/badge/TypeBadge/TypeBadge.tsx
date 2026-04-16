import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface TypeBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
}

const StyledBadge = styled.span`
  height: 47px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 2000px;
  font-size: ${theme.font.headlineS};
  line-height: 29px;
  background-color: ${theme.teacherColor.blue[50]}; 
  color: ${theme.teacherColor.blue[200]};           
  border: 1px solid ${theme.teacherColor.blue[200]}; 
  white-space: nowrap;
`;

export function TypeBadge({ label, ...props }: TypeBadgeProps) {
  return (
    <StyledBadge {...props}>
      {label}
    </StyledBadge>
  );
}