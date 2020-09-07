import React from 'react';

import Navigation from './src/Navigation';
import { LoadAssets } from './src/components';
import { onBoardingAssets } from './src/Authentication/OnBoarding';
import { welcomeAssets } from './src/Authentication/Welcome';
import { StatusBar } from 'react-native';

const fonts = {
  SFProTextBold: require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  SFProTextSemiBold: require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  SFProTextRegular: require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const assets = [...onBoardingAssets, ...welcomeAssets];

export default function App() {
  return (
    <LoadAssets {...{ fonts, assets }}>
      <StatusBar hidden />
      <Navigation />
    </LoadAssets>
  );
}
