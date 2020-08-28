import React from 'react';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';
import styled from 'styled-components/native';

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return <StyledAnimatedView style={{ opacity, transform: [{ scale }] }} />;
};

export default Dot;

const StyledAnimatedView = styled(Animated.View)`
  background-color: #2cb9b0;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 4px;
`;
