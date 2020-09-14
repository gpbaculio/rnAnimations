import React, { ReactNode } from 'react';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  add,
  and,
  call,
  clockRunning,
  cond,
  eq,
  greaterThan,
  neq,
  not,
  set,
  startClock,
  stopClock,
  useCode,
} from 'react-native-reanimated';
import { useClock, useTapGestureHandler, useValue } from 'react-native-redash';
import styled from 'styled-components/native';

interface BorderlessTapProps {
  onPress: () => void;
  children: ReactNode;
}

const BorderlessTap = ({ onPress, children }: BorderlessTapProps) => {
  const clock = useClock();
  const start = useValue(0);
  const { gestureHandler, state } = useTapGestureHandler();
  const opacity = useValue(0);
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), stopClock(clock)),
      cond(eq(state, State.END), [call([], onPress)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1,
        ),
      ),
    ],
    [],
  );
  return (
    <TapGestureHandler {...gestureHandler}>
      <AnimatedContainer style={{ opacity }}>{children}</AnimatedContainer>
    </TapGestureHandler>
  );
};

export default BorderlessTap;

const AnimatedContainer = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
