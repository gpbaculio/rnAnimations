import React from 'react';
import styled, { css } from 'styled-components/native';
import { BORDER_RADIUS } from './constants';

interface TopSectionImgProps {
  source: number;
  bottomLeftRadius?: boolean;
  bottomRightRadius?: boolean;
}

const TopSectionImg = ({
  source,
  bottomLeftRadius,
  bottomRightRadius,
}: TopSectionImgProps) => (
  <StyledImageContainer>
    <StyledImage
      bottomLeftRadius={bottomLeftRadius}
      bottomRightRadius={bottomRightRadius}
      resizeMode="cover"
      source={source}
    />
  </StyledImageContainer>
);

export default TopSectionImg;

const StyledImageContainer = styled.View`
  background-color: #fff;
  position: relative
  z-index: 99
  border-bottom-left-radius: 75px;
  flex: 1;
`;

interface StyledImageProps {
  bottomLeftRadius?: boolean;
  bottomRightRadius?: boolean;
}

const StyledImage = styled.Image<StyledImageProps>`
  width: 100%;
  background-color: #fff;
  height: 100%;
  ${(props) => css`
    ${props.bottomLeftRadius &&
    `border-bottom-left-radius: ${BORDER_RADIUS}px;`}
    ${props.bottomRightRadius &&
    `border-bottom-right-radius: ${BORDER_RADIUS}px;`}
  `};
`;
