import React from 'react';
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

import { Container, ColumnView } from '../../components';
import { NavContainer, NavIcon } from './components';
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
        <TopSectionNav>
          <NavIcon width={14} height={14} source={iconClose} />
          <NavTitle>MY PROFILE</NavTitle>
          <NavIcon width={15} height={17.5} source={iconShoppingBag} />
        </TopSectionNav>
      </TopSection>
      <MainContentContainer>
        <TopOverlay />
        <MainContent>
          <ProfileContainer />
          <UserName>Glendon Philipp Baculio</UserName>
          <Email>gpbaculio@gmail.com</Email>
          <ColumnView>
            <NavContainer backgroundColor="#2CB9B0" navLabel="Outfit Ideas">
              <NavIcon width={13.8} height={17.64} source={iconZap} />
            </NavContainer>
            <NavContainer backgroundColor="#FE5E33" navLabel="Favorite Outfits">
              <NavIcon width={17} height={14.77} source={iconHeart} />
            </NavContainer>
            <NavContainer backgroundColor="#FFC641" navLabel="Edit Profile">
              <NavIcon width={12.73} height={14.87} source={iconPerson} />
            </NavContainer>
            <NavContainer
              backgroundColor="#FF87A2"
              navLabel="Transaction History"
            >
              <NavIcon width={16.87} height={16.87} source={iconClock} />
            </NavContainer>
            <NavContainer
              backgroundColor="#442CB9"
              navLabel="Notification Settings"
            >
              <NavIcon width={17} height={17} source={iconGear} />
            </NavContainer>
            <NavContainer backgroundColor="#0C0D34" navLabel="Logout">
              <NavIcon width={17} height={13.98} source={iconLogout} />
            </NavContainer>
          </ColumnView>
        </MainContent>
      </MainContentContainer>
      <StyledImage resizeMode="stretch" source={bottomSectionDrawerImg} />
    </Container>
  );
};

export default Drawer;

const TopSectionNav = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.Text`
  font-family: SFProTextRegular;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.5px;
  color: #fff;
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
  padding-top: ${Platform.OS === 'ios' ? 35 : 15}px;
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
