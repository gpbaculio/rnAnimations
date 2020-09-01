import React, { ReactNode, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import TopSectionContainer from './TopSectionContainer';
import TopSectionImg from './TopSectionImg';
import MainContent from './MainContent';

const topSectionImgSrc = require('../../assets/images/pattern1.png');
const facebookIcon = require('../../assets/images/icons/icon-facebook.png');
const appleIcon = require('../../assets/images/icons/icon-apple.png');
const googleIcon = require('../../assets/images/icons/icon-google.png');

interface ContainerProps {
  topSectionImg: number;
  children: ReactNode;
}

export const assets = [topSectionImgSrc, facebookIcon, appleIcon, googleIcon];

const Container = ({ topSectionImg, children }: ContainerProps) => {
  const [topSectionWidth, setTopSectionWidth] = useState(0);

  return (
    <StyledViewContainer>
      <TopSectionContainer
        onLayout={({ nativeEvent }) => {
          const { layout } = nativeEvent;
          setTopSectionWidth(layout.width);
        }}
      >
        <TopSectionImg bottomLeftRadius source={topSectionImgSrc} />
      </TopSectionContainer>
      <MainContent width={topSectionWidth} source={topSectionImg}>
        {children}
      </MainContent>
      <BottomSection />
    </StyledViewContainer>
  );
};

Container.defaultProps = {
  topSectionImg: topSectionImgSrc,
};

export default Container;
const IconsSection = styled.View`
  flex-direction: row;
`;
const BottomSection = styled.View`
  flex: 0.2;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const StyledViewContainer = styled(View)`
  flex: 1;
`;
