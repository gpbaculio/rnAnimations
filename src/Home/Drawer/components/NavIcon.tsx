import React from 'react';
import styled from 'styled-components/native';

interface NavIconProps {
  source: number;
  width: number;
  height: number;
}

const NavIcon = ({ source, width, height }: NavIconProps) => (
  <StyledImage source={source} {...{ width, height }} />
);

export default NavIcon;

interface StyledImageProps {
  width: number;
  height: number;
}

const StyledImage = styled.Image<StyledImageProps>`
  ${(props) => `
    width: ${props.width}px
    height: ${props.height}px
  `}
`;
