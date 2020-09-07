import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

interface BottomSectionProps {
  children: ReactNode;
  height: Animated.Value<number>;
}

const BottomSection = ({ children, height }: BottomSectionProps) => (
  <ContainerView style={{ height }}>{children}</ContainerView>
);

export default BottomSection;

const ContainerView = styled(Animated.View)`
  background-color: black;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
