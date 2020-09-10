import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';

interface RoundIconProps {
  source: ImageSourcePropType;
  icon: { width: number; height: number; color: string };
  container: { size: number; color: string };
  onPress?: () => void;
}

const RoundIcon = ({
  source,
  icon: { width, height, color },
  container: { size, color: containerColor },
  onPress,
}: RoundIconProps) => {
  if (onPress) {
    return (
      <PressableNavIconContainer
        onPress={onPress}
        color={containerColor}
        containerSize={size}
      >
        <StyledImage color={color} source={source} {...{ width, height }} />
      </PressableNavIconContainer>
    );
  } else {
    return (
      <NavIconContainer color={containerColor} containerSize={size}>
        <StyledImage color={color} source={source} {...{ width, height }} />
      </NavIconContainer>
    );
  }
};

export default RoundIcon;

interface StyledImageProps {
  width: number;
  height: number;
  color: string;
}

const StyledImage = styled.Image<StyledImageProps>`
  ${(props) => `
    tint-color:${props.color};
    width: ${props.width}px
    height: ${props.height}px
  `}
`;

interface IconContainerProps {
  containerSize: number;
  color: string;
}

const NavIconContainer = styled.View<IconContainerProps>`
  ${(props) => `
    width: ${props.containerSize}px;
    height: ${props.containerSize}px;
    background-color: ${props.color};
  `}
  border-radius: 22px;
  align-items: center;
  justify-content: center;
`;

const PressableNavIconContainer = styled.TouchableOpacity<IconContainerProps>`
  ${(props) => `
    width: ${props.containerSize}px;
    height: ${props.containerSize}px;
    background-color: ${props.color};
  `}
  border-radius: 22px;
  align-items: center;
  justify-content: center;
`;
