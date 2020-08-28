import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
  title: string;
  right?: boolean;
}

const Slide = ({ title, right }: SlideProps) => {
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
