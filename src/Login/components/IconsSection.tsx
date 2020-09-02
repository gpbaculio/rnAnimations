import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

interface IconsSectionProps {
  children: ReactNode;
}

const IconsSection = ({ children }: IconsSectionProps) => (
  <Container>{children}</Container>
);

export default IconsSection;

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: center;
`;
