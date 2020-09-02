import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

interface RowViewProps {
  children: ReactNode;
}

const RowView = ({ children }: RowViewProps) => (
  <StyledView>{children}</StyledView>
);

export default RowView;

const StyledView = styled.View`
  flex-direction: row;
`;
