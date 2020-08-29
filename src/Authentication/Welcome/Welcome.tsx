import React from 'react';
import styled from 'styled-components/native';
import { BORDER_RADIUS } from '../OnBoarding/OnBoarding';
import { StyledOnBoardingImg } from '../OnBoarding/Slide';
import { SubTitle, Description, Button } from '../../components';

interface WelcomeProps {
  welcomeImg: number;
}
const welcomeImgSrc = require('../../../assets/4.png');
export const assets = [welcomeImgSrc];
const Welcome = ({ welcomeImg }: WelcomeProps) => {
  const onLoginPress = () => {};
  const onJoinUsPress = () => {};
  const onForgotPasswordPress = () => {};
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
          <Button
            onPress={onLoginPress}
            label={'Have an account? Login'}
            variant={'primary'}
          />
          <Button
            onPress={onJoinUsPress}
            label={"Join us, it's free"}
            variant={'default'}
          />
          <Button
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
  flex: 1;
`;

const TopSection = styled.View`
  background-color: rgba(242, 242, 242, 0.6);
  border-bottom-right-radius: ${BORDER_RADIUS}px;
  padding-top: 81px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
