import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import { BORDER_RADIUS } from '../../components/constants';

interface MainContentProps {
  width: number;
  source: number;
  children: ReactNode;
}

const MainContent = ({ width, source, children }: MainContentProps) => (
  <MainContentSection>
    <MainContentImageOverlay
      height={width}
      resizeMode="repeat"
      source={source}
    />
    <MainContentContainer topRightRadius bottomLeftRadius bottomRightRadius>
      {children}
    </MainContentContainer>
    <BottomOverlay />
  </MainContentSection>
);

export default MainContent;

interface MainContentSectionProps {
  topLeftRadius?: boolean;
  topRightRadius?: boolean;
  bottomLeftRadius?: boolean;
  bottomRightRadius?: boolean;
}

const MainContentContainer = styled.View<MainContentSectionProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: #fff;
  ${(props) => css`
    ${props.topLeftRadius && `border-top-left-radius: ${BORDER_RADIUS}px;`}
    ${props.topRightRadius &&
    `border-top-right-radius: ${BORDER_RADIUS}px;`}
    ${props.bottomLeftRadius &&
    `border-bottom-left-radius: ${BORDER_RADIUS}px;`}
    ${props.bottomRightRadius &&
    `border-bottom-right-radius: ${BORDER_RADIUS}px;`}
  `};
`;

const BottomOverlay = styled.View`
  width: 100%;
  bottom: 0;
  z-index: 1;
  border: solid black 1px;
  height: 75px;
  background-color: black;
  position: absolute;
`;

interface MainContentImageOverlayProps {
  height: number;
}

const MainContentImageOverlay = styled.Image<MainContentImageOverlayProps>`
  ${(props) => css`
    width: 100%;
    height: ${props.height}px;
    transform: translateY(
      ${-props.height / 2 + (Platform.OS === 'ios' ? -20 : 0)}px
    );
  `}
  z-index: 0;
  position: absolute;
`;

const MainContentSection = styled.View`
  flex: 0.6;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;
