import React from 'react';
import { StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

import { STATUSBAR_HEIGHT } from '../Authentication/constants';

interface StatusBarProps {
  backgroundColor: string;
  barStyle: 'default' | 'light-content' | 'dark-content';
}

const CrossPlatformStatusBar = ({
  backgroundColor,
  barStyle,
}: StatusBarProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <StatusBar translucent {...{ backgroundColor, barStyle }} />
    </Container>
  );
};

export default CrossPlatformStatusBar;

interface ContainerProps {
  backgroundColor?: string;
}

const Container = styled.View<ContainerProps>`
  height: ${STATUSBAR_HEIGHT}px;
  z-index: 99;
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;
