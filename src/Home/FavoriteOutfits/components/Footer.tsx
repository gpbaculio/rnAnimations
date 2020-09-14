import React from 'react';
import { LayoutChangeEvent, Platform } from 'react-native';
import styled from 'styled-components/native';

import { borderOverlayImage } from '../../../Authentication/constants';
import { Typography } from '../../../components';

interface FooterProps {
  onLayout: (e: LayoutChangeEvent) => void;
  onFooterBtnPress: () => void;
}

const Footer = ({ onLayout, onFooterBtnPress }: FooterProps) => {
  return (
    <Container>
      <BorderOverlay
        style={{
          transform: [{ rotate: '270deg' }],
        }}
        resizeMode="contain"
        source={borderOverlayImage}
      />
      <FooterContainer onLayout={onLayout}>
        <Button onPress={onFooterBtnPress}>
          <Typography color="#fff">Add more to favorites</Typography>
        </Button>
      </FooterContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  background-color: red;
  border-top-left-radius: 75px;
`;

const FooterContainer = styled.View`
  background-color: #0c0d34;
  border-top-left-radius: 75px;
  padding-top: 40px;
  padding-bottom: ${Platform.OS === 'ios' ? 60 : 40}px;
  align-items: center;
`;

const BorderOverlay = styled.Image`
  width: 75px;
  height: 75px;
  position: absolute;
  margin-top: -74px;
  right: 0;
  tint-color: #0c0d34;
`;

const Button = styled.TouchableHighlight`
  background-color: #2cb9b0;
  width: 70%;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  padding-vertical: 16px;
`;
