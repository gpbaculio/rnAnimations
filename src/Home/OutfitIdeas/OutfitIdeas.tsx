import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useTransition } from 'react-native-redash';
import { sub } from 'react-native-reanimated';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { Header } from '../components';
import { iconMenu, iconShoppingBag, outfitIdeasBg } from '../constants';
import { Container } from '../../components';
import { borderOverlayImage } from '../../Authentication/constants';
import { Card, Categories } from './components';

const { height } = Dimensions.get('window');

const cards = [
  {
    index: 3,
    source: require('../../../assets/images/4.png'),
  },
  {
    index: 2,
    source: require('../../../assets/images/3.png'),
  },
  {
    index: 1,
    source: require('../../../assets/images/2.png'),
  },
  {
    index: 0,
    source: require('../../../assets/images/1.png'),
  },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = () => {
  const navigation = useNavigation();
  const onLeftNavPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const animIndex = useTransition(currentIndex);
  return (
    <Container>
      <Header
        leftIcon={{ width: 14, height: 14 }}
        rightIcon={{ width: 15, height: 17.5 }}
        color="#0C0D34"
        backgroundColor="#fafafa"
        title="OUTFIT IDEAS"
        leftSection={{
          leftNavImgSrc: iconMenu,
          onLeftNavPress,
        }}
        rightSection={{
          rightNavImgSrc: iconShoppingBag,
          onRightNavPress: () => true,
        }}
      />
      <Categories />
      <CardsContainer>
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, animIndex)}
                onSwipe={() => {
                  setCurrentIndex((prevIndex) => prevIndex + step);
                }}
                source={source}
                step={step}
              />
            ),
        )}
      </CardsContainer>
      <Background>
        <BackgroundImage source={outfitIdeasBg} />
        <BackgroundBottomSection>
          <BottomOverlay>
            <BorderOverlay
              style={{
                transform: [{ rotate: '270deg' }],
              }}
              resizeMode="contain"
              source={borderOverlayImage}
            />
          </BottomOverlay>
        </BackgroundBottomSection>
      </Background>
    </Container>
  );
};

export default OutfitIdeas;

const CardsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const BorderOverlay = styled.Image`
  width: 65px;
  height: 65px;
  position: absolute;
  margin-top: -63px;
  right: -1px;
  tint-color: #0c0d34;
`;

const Background = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  margin-top: 100px;
  background-color: #fff;
  bottom: 0;
`;

const BackgroundImage = styled.Image`
  width: 100%;
`;

const BackgroundBottomSection = styled.View`
  height: ${height * 0.175}px;
  width: 100%;
  background-color: #0c0d34;
  bottom: 0;
`;

const BottomOverlay = styled.View`
  height: ${height * 0.175}px;
  background-color: #0c0d34;
  margin-top: -60px;
  border-top-left-radius: 65px;
`;
