import React from 'react';
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import { mixColor, mix, usePanGestureHandler } from 'react-native-redash';
import { Dimensions, ImageRequireSource } from 'react-native';
import styled from 'styled-components/native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useSpring } from '../Animations';

const { width: wWidth } = Dimensions.get('window');
const width = wWidth * 0.8;
const height = width * (425 / 294);

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}

const Card = ({ position, onSwipe, source, step }: CardProps) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const backgroundColor = mixColor(position, '#C9E9E7', '#74BCB8');
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
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
      >
        <StyledAnimatedImage
          {...{ source, style: { transform: [{ scale: imageScale }] } }}
        />
      </StyledAnimatedView>
    </PanGestureHandler>
  );
};

export default Card;

const StyledAnimatedImage = styled(Animated.Image)`
  width: 80%;
  height: 80%;
`;

const StyledAnimatedView = styled(Animated.View)`
  width: ${width}px
  height: ${height}px
  position: absolute
  alignSelf: center
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;
