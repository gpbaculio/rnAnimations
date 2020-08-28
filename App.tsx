import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './src/Authentication/OnBoarding';
import { LoadAssets } from './src/components';

const fonts = {
   SFProTextBold: require('./assets/fonts/SF-Pro-Text-Bold.otf'),
   SFProTextSemiBold: require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
   SFProTextRegular: require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
   <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
   </AuthStack.Navigator>
);
export default function App() {
   return (
      <LoadAssets {...{ fonts }}>
         <AuthNavigator />
      </LoadAssets>
   );
}
