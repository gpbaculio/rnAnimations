import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({ title, right, picture }: SlideProps) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? '-90deg' : '90deg',
    },
  ];
  return (
    <Container>
      <ImageUnderlay>
        <StyledOnBoardingImg source={picture} />
      </ImageUnderlay>
      <TitleContainer
        style={{
          transform,
        }}
      >
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
};

export default Slide;

export const StyledOnBoardingImg = styled(Image)`
  right: 0;
  margin-left: auto
  margin-right: auto;
  bottom: 0;
  width: ${width / 1.4}px;
  height: ${width}px;
`;

const ImageUnderlay = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: flex-end;
`;

const Container = styled.View`
  width: ${width}px;
`;

const TitleContainer = styled.View`
  height: 100px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 80px;
  font-family: SFProTextBold;
  color: #fff;
  text-align: center;
`;
