import React from 'react';

import Navigation from './src/Navigation';
import { LoadAssets } from './src/components';
import { StatusBar } from 'react-native';

import { assets } from './src/Authentication/constants';

const fonts = {
  SFProTextBold: require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  SFProTextSemiBold: require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  SFProTextRegular: require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

export default function App() {
  return (
    <LoadAssets {...{ fonts, assets }}>
      <StatusBar hidden />
      <Navigation />
    </LoadAssets>
  );
}
