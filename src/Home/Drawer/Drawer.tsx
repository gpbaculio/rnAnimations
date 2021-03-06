import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import { RoundIcon, Header } from '../components';
import { Container, ColumnView } from '../../components';
import {
  iconZap,
  iconLogout,
  iconGear,
  iconClock,
  iconPerson,
  iconHeart,
  iconClose,
  iconShoppingBag,
  bottomSectionDrawerImg,
} from '../constants';
import { DrawerActions } from '@react-navigation/native';
import { borderOverlayImage } from '../../Authentication/constants';
import { AuthContext } from '../../Navigation/store/context';

const { height, width } = Dimensions.get('window');

export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const imgHeight = DRAWER_WIDTH * aspectRatio;

const Drawer = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const onLeftNavPress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  const onNavPress = (route: string) => {
    return () => {
      navigation.navigate(route);
    };
  };
  const { signOut } = useContext(AuthContext);
  const onLogout = () => {
    signOut();
  };
  return (
    <Container>
      <TopSection>
        <Header
          leftIcon={{ width: 14, height: 14 }}
          rightIcon={{ width: 15, height: 17.5 }}
          color="#fff"
          backgroundColor="#111747"
          title="MY PROFILE"
          leftSection={{
            leftNavImgSrc: iconClose,
            onLeftNavPress,
          }}
          rightSection={{
            rightNavImgSrc: iconShoppingBag,
            onRightNavPress: () => true,
          }}
        />
      </TopSection>
      <MainContentContainer>
        <TopOverlay />
        <MainContent>
          <ProfileContainer />
          <UserName>Glendon Philipp Baculio</UserName>
          <Email>gpbaculio@gmail.com</Email>
          <ColumnView>
            <NavContainer onPress={onNavPress('OutfitIdeas')}>
              <RoundIcon
                {...{
                  icon: {
                    width: 13.8,
                    height: 17.64,
                    color: '#fff',
                  },
                  container: {
                    size: 36,
                    color: '#2CB9B0',
                  },
                  source: iconZap,
                }}
              />
              <NavLabel>Outfit Ideas</NavLabel>
            </NavContainer>
            <NavContainer onPress={onNavPress('FavoriteOutfits')}>
              <RoundIcon
                {...{
                  icon: {
                    width: 17,
                    height: 14.77,
                    color: '#fff',
                  },
                  container: {
                    size: 36,
                    color: '#FE5E33',
                  },
                  source: iconHeart,
                }}
              />
              <NavLabel>Favorite Outfits</NavLabel>
              <NavCount>(26)</NavCount>
            </NavContainer>
            <NavContainer>
              <RoundIcon
                {...{
                  icon: {
                    width: 12.73,
                    height: 14.87,
                    color: '#fff',
                  },
                  container: {
                    size: 36,
                    color: '#FFC641',
                  },
                  source: iconPerson,
                }}
              />
              <NavLabel>Edit Profile</NavLabel>
            </NavContainer>
            <NavContainer onPress={onNavPress('TransactionHistory')}>
              <RoundIcon
                {...{
                  icon: {
                    width: 16.87,
                    height: 16.87,
                    color: '#fff',
                  },
                  container: {
                    size: 36,
                    color: '#FF87A2',
                  },
                  source: iconClock,
                }}
              />
              <NavLabel>Transaction History</NavLabel>
              <NavCount>(8)</NavCount>
            </NavContainer>
            <NavContainer>
              <RoundIcon
                {...{
                  icon: {
                    width: 17,
                    height: 17,
                    color: '#fff',
                  },
                  container: {
                    size: 36,
                    color: '#442CB9',
                  },
                  source: iconGear,
                }}
              />
              <NavLabel>Notification Settings</NavLabel>
            </NavContainer>
            <NavContainer onPress={onLogout}>
              <RoundIcon
                {...{
                  icon: {
                    width: 17,
                    height: 13.98,
                    color: '#fff',
                  },
                  container: {
                    size: 36,
                    color: '#0C0D34',
                  },
                  source: iconLogout,
                }}
              />
              <NavLabel>Logout</NavLabel>
            </NavContainer>
          </ColumnView>
        </MainContent>
        <BorderOverlay
          style={{
            transform: [{ rotate: '90deg' }],
          }}
          resizeMode="contain"
          source={borderOverlayImage}
        />
      </MainContentContainer>
      <StyledImage resizeMode="cover" source={bottomSectionDrawerImg} />
    </Container>
  );
};

export default Drawer;

const BorderOverlay = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: -59px;
  left: 0;
  tint-color: #fff;
`;
const NavContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

const NavLabel = styled.Text`
  margin-left: 16px;
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0c0d34;
`;

const NavCount = styled.Text`
  margin-left: 6px;
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: rgba(12, 13, 52, 0.3);
`;

const UserName = styled.Text`
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #0c0d34;
  margin-bottom: 5px;
  margin-top: 25px;
`;

const Email = styled.Text`
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0c0d34;
  opacity: 0.5;
  margin-bottom: 12px;
`;

const ProfileContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 60px;
  background-color: #beecc4;
  position: absolute;
  top: -50px;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 0.2;
  border-bottom-right-radius: 60px;
  background-color: #111747;
`;

const TopOverlay = styled.View`
  width: 100%;
  height: 50px;
  position: absolute;
  background-color: #111747;
`;

const MainContent = styled.View`
  flex: 1;
  padding-horizontal: 15px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const MainContentContainer = styled.View`
  flex: 0.9;
  background-color: #fff;
  border-bottom-right-radius: 60px;
  margin-bottom: ${height * 0.15}px;
  z-index: 9;
`;

const StyledImage = styled.Image`
  width: ${DRAWER_WIDTH}px;
  height: ${imgHeight}px;
  bottom: 0;
  position: absolute;
`;
