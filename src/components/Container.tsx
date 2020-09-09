import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <ContainerView>{children}</ContainerView>
);

export default Container;

const ContainerView = styled.View`
  flex: 1
  background-color: #fff
`;
