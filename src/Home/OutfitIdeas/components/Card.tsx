import React from 'react';
import Animated, { add } from 'react-native-reanimated';
import {
  mixColor,
  mix,
  usePanGestureHandler,
  withSpring,
} from 'react-native-redash';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { PanGestureHandler } from 'react-native-gesture-handler';

interface CardProps {
  position: number;
}
const { width: wWidth } = Dimensions.get('window');
const width = wWidth * 0.8;
const height = width * (425 / 294);
const Card = ({ position }: CardProps) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const backgroundColor = mixColor(position, '#C9E9E7', '#74BCB8');
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width],
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    }),
  );
  return (
    <PanGestureHandler {...gestureHandler}>
      <StyledAnimatedView
        style={{
          backgroundColor,
          transform: [{ translateY }, { translateX }, { scale }],
        }}
      />
    </PanGestureHandler>
  );
};

export default Card;

const StyledAnimatedView = styled(Animated.View)`
  width: ${width}px
  height: ${height}px
  position: absolute
  alignSelf: center
  border-radius: 24px;
`;
