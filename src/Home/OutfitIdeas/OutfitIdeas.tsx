import React from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Header } from '../components';
import { iconMenu, iconShoppingBag, outfitIdeasBg } from '../constants';
import { Container } from '../../components';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { borderOverlayImage } from '../../Authentication/constants';

const { height } = Dimensions.get('window');

const OutfitIdeas = () => {
  const navigation = useNavigation();
  const onLeftNavPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Container>
      <TopSection>
        <Header
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
      </TopSection>
      <Text>OutfitIdasd asdeas</Text>
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

const BorderOverlay = styled.Image`
  width: 65px;
  height: 65px;
  position: absolute;
  margin-top: -63px;
  right: -1px;
  tint-color: #0c0d34;
`;

const TopSection = styled.View`
  padding-horizontal: 21px;
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
