import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

interface BottomSectionProps {
  children: ReactNode;
}

const BottomSection = ({ children }: BottomSectionProps) => (
  <ContainerView>{children}</ContainerView>
);

export default BottomSection;

const ContainerView = styled.View`
  flex: 0.2;
  background-color: black;
  align-items: center;
  justify-content: center;
`;
