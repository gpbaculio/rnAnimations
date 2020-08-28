import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated, { multiply, divide } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';

import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';

const { width } = Dimensions.get('window');
const slides = [
  {
    title: 'Relaxed',
    subTitle: 'Find your outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here",
    color: '#BFEAF5',
    picture: require('../../../assets/1.png'),
  },
  {
    title: 'Playful',
    subTitle: 'Hear it first, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: require('../../../assets/2.png'),
  },
  {
    title: 'Excentric',
    subTitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: require('../../../assets/3.png'),
  },
  {
    title: 'Funky',
    subTitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    picture: require('../../../assets/4.png'),
  },
];
export const BORDER_RADIUS = 75;
const OnBoarding = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <Container>
      <Slider style={[{ backgroundColor }]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Slider>
      <FooterSection>
        <FooterOverlay style={{ backgroundColor }} />
        <SliderPagination>
          {slides.map((_, index) => (
            <Dot
              key={index}
              {...{ index, x, currentIndex: divide(x, width) }}
            />
          ))}
        </SliderPagination>

        <Footer>
          <FooterContent
            style={{
              borderTopLeftRadius: BORDER_RADIUS,
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subTitle, description }, index) => (
              <SubSlide
                onPress={() => {
                  if (scrollRef.current) {
                    scrollRef.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                key={index}
                last={index === slides.length - 1}
                {...{ subTitle, description, x }}
              />
            ))}
          </FooterContent>
        </Footer>
      </FooterSection>
    </Container>
  );
};

export default OnBoarding;

const SliderPagination = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: ${BORDER_RADIUS}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${BORDER_RADIUS}px;
  z-index: 99;
  background-color: #fff;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Slider = styled(Animated.View)`
  height: ${SLIDE_HEIGHT}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`;

const FooterSection = styled.View`
  flex: 1;
  border-top-left-radius: ${BORDER_RADIUS}px;
  background-color: red;
`;

const FooterOverlay = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Footer = styled.View`
  flex: 1;
  border-top-left-radius: ${BORDER_RADIUS}px;
  background-color: #fff;
`;

const FooterContent = styled(Animated.View)`
  flex: 1;
  border-top-left-radius: ${BORDER_RADIUS}px;
  flex-direction: row;
`;
