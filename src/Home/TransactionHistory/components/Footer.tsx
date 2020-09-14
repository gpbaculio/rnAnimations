import React from 'react';
import { Dimensions, LayoutChangeEvent, Platform } from 'react-native';
import styled from 'styled-components/native';
import { transactionBg } from '../../constants';

const { width } = Dimensions.get('window');

interface FooterProps {
  onLayout: (e: LayoutChangeEvent) => void;
}

const Footer = ({ onLayout }: FooterProps) => {
  return (
    <StyledImage
      onLayout={onLayout}
      resizeMode="contain"
      source={transactionBg}
    />
  );
};

export default Footer;

const ratio = width / 1500;

const StyledImage = styled.Image`
  bottom: 0;
  position: absolute;
  width: ${width}px;
  margin-bottom: ${Platform.OS === 'ios' ? 0 : -30}px;
  height: ${872 * ratio}px;
`;
