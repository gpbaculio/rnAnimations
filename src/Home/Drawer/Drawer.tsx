import React from 'react';
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

import { RoundIcon, Header } from '../components';
import { Container, ColumnView } from '../../components';
import {
  bottomSectionDrawerImg,
  iconZap,
  iconLogout,
  iconGear,
  iconClock,
  iconPerson,
  iconHeart,
  iconClose,
  iconShoppingBag,
} from '../constants';

const { height } = Dimensions.get('window');

const Drawer = () => {
  return (
    <Container>
      <TopSection>
        <Header
          color="#fff"
          backgroundColor="#111747"
          title="MY PROFILE"
          leftSection={{
            leftNavImgSrc: iconClose,
            onLeftNavPress: () => true,
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
            <NavContainer>
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
            <NavContainer>
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
            <NavContainer>
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
            <NavContainer>
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
      </MainContentContainer>
      <StyledImage resizeMode="stretch" source={bottomSectionDrawerImg} />
    </Container>
  );
};

export default Drawer;

const NavContainer = styled.View`
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
  margin-bottom: 32px;
`;

const ProfileContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #beecc4;
  position: absolute;
  top: -50px;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 0.2;
  padding-horizontal: 15px;
  border-bottom-right-radius: 50px;
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
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const MainContentContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-bottom-right-radius: 50px;
  margin-bottom: ${height * 0.2 - (Platform.OS === 'ios' ? 80 : 60)}px;
  z-index: 9;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: ${height * 0.2}px;
  bottom: 0;
  position: absolute;
  background-color: #fff;
`;
