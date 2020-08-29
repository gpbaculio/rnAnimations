import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './src/Routes';
import { LoadAssets } from './src/components';
import OnBoarding, { onBoardingAssets } from './src/Authentication/OnBoarding';
import Welcome, { welcomeAssets } from './src/Authentication/Welcome';

const assets = [...onBoardingAssets, ...welcomeAssets];
const fonts = {
  SFProTextBold: require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  SFProTextSemiBold: require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  SFProTextRegular: require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const AuthStack = createStackNavigator<Routes>();

const AuthNavigator = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthStack.Screen name="Welcome" component={Welcome} />
  </AuthStack.Navigator>
);

export default function App() {
  return (
    <LoadAssets {...{ fonts, assets }}>
      <AuthNavigator />
    </LoadAssets>
  );
}
