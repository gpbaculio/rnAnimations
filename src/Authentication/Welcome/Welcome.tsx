import React from 'react';
import styled from 'styled-components/native';
import { BORDER_RADIUS } from '../OnBoarding/OnBoarding';
import { StyledOnBoardingImg } from '../OnBoarding/Slide';
import { SubTitle, Description, FormButton } from '../components';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const welcomeImgSrc = require('../../../assets/images/4.png');

interface WelcomeProps {
  welcomeImg: number;
}

const Welcome = ({ welcomeImg }: WelcomeProps) => {
  const navigation = useNavigation();
  const onLoginPress = () => {
    navigation.navigate('Login');
  };
  const onJoinUsPress = () => {
    navigation.navigate('Signup');
  };
  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <Container>
      <TopSection>
        <StyledOnBoardingImg source={welcomeImg} />
      </TopSection>
      <BottomSection>
        <BottomContent>
          <SubTitle>Let's get started</SubTitle>
          <Description>
            Login to your account below or signup for an amazing experience
          </Description>
          <FormButton
            onPress={onLoginPress}
            label={'Have an account? Login'}
            variant={'primary'}
          />
          <FormButton
            onPress={onJoinUsPress}
            label={"Join us, it's free"}
            variant={'default'}
          />
          <FormButton
            onPress={onForgotPasswordPress}
            label={'Forgot password?'}
            variant={'transparent'}
          />
        </BottomContent>
      </BottomSection>
    </Container>
  );
};

Welcome.defaultProps = {
  welcomeImg: welcomeImgSrc,
};

export default Welcome;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const TopSection = styled.View`
  flex: 0.5;
  background-color: rgba(242, 242, 242, 0.6);
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  padding-top: ${Platform.OS === 'ios' ? 81 : 0}px;
`;

const BottomContent = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  padding-horizontal: 60px;
  align-items: center;
  border-top-left-radius: ${BORDER_RADIUS}px;
`;

const BottomSection = styled.View`
  background-color: rgba(242, 242, 242, 0.6);
  flex: 0.5;
`;
