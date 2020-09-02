import React, { useState } from 'react';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import styled from 'styled-components/native';

import Container from '../components/Container';
import TopSectionContainer from './components/TopSectionContainer';
import {
  topSectionImg,
  facebookIcon,
  googleIcon,
  appleIcon,
} from '../components/constants';
import TopSectionImg from './components/TopSectionImg';
import MainContent from './components/MainContent';
import Typography from '../components/Typography';
import BottomSection from './components/BottomSection';
import ColumnView from '../components/ColumnView';
import IconsSection from './components/IconsSection';
import SocialIconContainer from './components/SocialIconContainer';
import RowView from '../components/RowView';
import TextInput from './components/TextInput';

const Login = () => {
  const [topSectionWidth, setTopSectionWidth] = useState(0);
  return (
    <Container>
      <TopSectionContainer
        onLayout={({ nativeEvent }) => {
          const { layout } = nativeEvent;
          setTopSectionWidth(layout.width);
        }}
      >
        <TopSectionImg bottomLeftRadius source={topSectionImg} />
      </TopSectionContainer>
      <MainContent width={topSectionWidth} source={topSectionImg}>
        <ColumnView style={styles.container}>
          <Typography
            style={styles.title}
            fontSize={28}
            fontFamily="SFProTextSemiBold"
            color="#0C0D34"
          >
            Welcome back
          </Typography>
          <Typography style={styles.subTitle} color="rgba(12, 13, 52, 0.5)">
            Use your credentials below and login to your account
          </Typography>
          <TextInput />
        </ColumnView>
      </MainContent>
      <BottomSection>
        <ColumnView>
          <IconsSection>
            <SocialIconContainer last={false} onPress={() => {}}>
              <FbIcon resizeMode="contain" source={facebookIcon} />
            </SocialIconContainer>
            <SocialIconContainer last={false} onPress={() => {}}>
              <GoogleIcon resizeMode="contain" source={googleIcon} />
            </SocialIconContainer>
            <SocialIconContainer last onPress={() => {}}>
              <AppleIcon resizeMode="contain" source={appleIcon} />
            </SocialIconContainer>
          </IconsSection>
          <RowView>
            <Typography color={'#fff'}>Don't have an account?&nbsp;</Typography>
            <Typography color={'#2CB9B0'}>Sign Up Here</Typography>
          </RowView>
        </ColumnView>
      </BottomSection>
    </Container>
  );
};

export default Login;

interface StylesProps {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

const styles = StyleSheet.create<StylesProps>({
  container: {
    paddingHorizontal: 35,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 33,
    textAlign: 'center',
    marginBottom: 6,
  },
  subTitle: {
    paddingHorizontal: 25,
    textAlign: 'center',
    marginBottom: 18,
  },
});

const AppleIcon = styled.Image`
  width: 17.27px;
  height: 20px;
`;

const GoogleIcon = styled.Image`
  width: 19.77px;
  height: 20px;
`;

const FbIcon = styled.Image`
  width: 13px;
  height: 17px;
`;
