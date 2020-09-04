import React, { ReactNode, useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import { Dimensions, Platform, Keyboard } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import {
  BORDER_RADIUS,
  borderOverlayImage,
  facebookIcon,
  googleIcon,
  appleIcon,
} from '../../components/constants';
import BottomSection from './BottomSection';
import ColumnView from '../../components/ColumnView';
import SocialIconContainer from './SocialIconContainer';
import IconsSection from './IconsSection';
import RowView from '../../components/RowView';
import Typography from '../../components/Typography';

interface MainContentProps {
  source: number;
  children: ReactNode;
}

const { width, height } = Dimensions.get('window');
const MainContent = ({ source, children }: MainContentProps) => {
  const topAndBottomSectionHeight = new Animated.Value(height * 0.2);

  const keyBoardWillShow = () => {
    if (Platform.OS !== 'ios') {
      Animated.timing(topAndBottomSectionHeight, {
        toValue: 0,
        duration: 100,
        easing: Easing.in(Easing.ease),
      }).start();
    }
  };
  const keyBoardWillHide = () => {
    if (Platform.OS !== 'ios') {
      Animated.timing(topAndBottomSectionHeight, {
        toValue: height * 0.2,
        duration: 100,
        easing: Easing.out(Easing.ease),
      }).start();
    }
  };
  useEffect(() => {
    const keyboardWillShowSubscription = Keyboard.addListener(
      'keyboardDidShow',
      keyBoardWillShow,
    );
    const keyboardWillHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      keyBoardWillHide,
    );
    return () => {
      keyboardWillShowSubscription.remove();
      keyboardWillHideSubscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MainContentSection
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TopSection style={{ height: topAndBottomSectionHeight }}>
          <BorderOverlayRadius
            resizeMode="contain"
            source={borderOverlayImage}
          />
        </TopSection>
        <MainContentImageOverlay resizeMode="repeat" source={source} />
        <MainContentContainer topRightRadius bottomLeftRadius bottomRightRadius>
          {children}
        </MainContentContainer>
        <BottomOverlay />
      </MainContentSection>
      <BottomSection height={topAndBottomSectionHeight}>
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
    </>
  );
};

export default MainContent;
// adjust height to zero on animation keyboard show

const TopSection = styled(Animated.View)`
  width: ${width}px;
  background-color: transparent;
  z-index: 3;
`;

const BorderOverlayRadius = styled.Image`
  width: 63px;
  height: 63px;
  bottom: -1px;
  left: -1px;
  position: absolute;
  background-color: transparent;
`;

interface MainContentSectionProps {
  topLeftRadius?: boolean;
  topRightRadius?: boolean;
  bottomLeftRadius?: boolean;
  bottomRightRadius?: boolean;
}

const MainContentContainer = styled(Animated.View)<MainContentSectionProps>`
  ${Platform.OS !== 'ios'
    ? 'padding-vertical: 32px;'
    : 'justify-content: center; flex: 1;'}
  z-index: 2;
  background-color: #fff;
  ${(props) => css`
    ${props.topLeftRadius && `border-top-left-radius: ${BORDER_RADIUS}px;`}
    ${props.topRightRadius &&
    `border-top-right-radius: ${BORDER_RADIUS}px;`}
    ${props.bottomLeftRadius &&
    `border-bottom-left-radius: ${BORDER_RADIUS}px;`}
    ${props.bottomRightRadius &&
    `border-bottom-right-radius: ${BORDER_RADIUS}px;`}
  `};
`;

const BottomOverlay = styled.View`
  width: 100%;
  bottom: 0;
  z-index: 1;
  border: solid black 1px;
  height: 75px;
  background-color: black;
  position: absolute;
`;

const MainContentImageOverlay = styled.Image` 
  width: 100%;
  height: ${width}px; 
  top: 0;
  background-color: yellow
  position: absolute;
`;

const MainContentSection = styled.KeyboardAvoidingView`
  flex: 1
  background-color: black;
  border-bottom-color: black;
  border-bottom-width: 1px;
  z-index: 99
`;

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
