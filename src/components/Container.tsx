import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';

interface ContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

const Container = ({ children, style }: ContainerProps) => (
  <ContainerView style={style}>{children}</ContainerView>
);

export default Container;

const ContainerView = styled.View`
  flex: 1
  background-color: #fff
`;
