import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Animated, { multiply, divide } from 'react-native-reanimated';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import { useNavigation } from '@react-navigation/native';

import Slide from './Slide';
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
    picture: require('../../../assets/images/1.png'),
  },
  {
    title: 'Playful',
    subTitle: 'Hear it first, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: require('../../../assets/images/2.png'),
  },
  {
    title: 'Excentric',
    subTitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: require('../../../assets/images/3.png'),
  },
  {
    title: 'Funky',
    subTitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    picture: require('../../../assets/images/5.png'),
  },
];

export const onBoardingAssets = slides.map((i) => i.picture);

export const BORDER_RADIUS = 75;

const OnBoarding = () => {
  const navigation = useNavigation();
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
        <Footer>
          <SliderPagination>
            {slides.map((_, index) => (
              <Dot
                key={index}
                {...{ index, x, currentIndex: divide(x, width) }}
              />
            ))}
          </SliderPagination>
          <FooterContent
            style={{
              borderTopLeftRadius: BORDER_RADIUS,
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subTitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scrollRef!
                        .current!.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  key={index}
                  {...{ subTitle, description, last }}
                />
              );
            })}
          </FooterContent>
        </Footer>
      </FooterSection>
    </Container>
  );
};

export default OnBoarding;

const SliderPagination = styled(Animated.View)`
  width: 100%;
  height: ${BORDER_RADIUS}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${BORDER_RADIUS}px;
  z-index: 99;
  background-color: transparent;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Slider = styled(Animated.View)`
  flex: 0.6;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`;

const FooterSection = styled.View`
  flex: 0.4;
  border-top-left-radius: ${BORDER_RADIUS}px;
  background-color: #fff;
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
