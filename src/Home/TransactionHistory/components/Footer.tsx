import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { borderOverlayImage } from '../../../Authentication/constants';

import { transactionBg } from '../../constants';

const { width, height } = Dimensions.get('window');

const Footer = () => (
  <StyledImage resizeMode="contain" source={transactionBg}>
    <BorderOverlay
      style={{
        transform: [{ rotate: '90deg' }],
      }}
      resizeMode="contain"
      source={borderOverlayImage}
    />
  </StyledImage>
);

export default Footer;

const aspectRatio = 872 / 1500;
const imgHeight = width * aspectRatio;

const StyledImage = styled.ImageBackground`
  bottom: 0;
  position: absolute;
  width: ${width}px;
  height: ${imgHeight}px;
`;

const BorderOverlay = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  left: -1px;
  bottom: ${height * 0.15 - 59}px
  tint-color: #fff;
`;
