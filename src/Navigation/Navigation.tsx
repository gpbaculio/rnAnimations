import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from '../Authentication/OnBoarding';
import Welcome from '../Authentication/Welcome';
import { Routes } from './Routes';
import Login from '../Login';

const AuthStack = createStackNavigator<Routes>();

const AuthNavigator = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthStack.Screen name="Welcome" component={Welcome} />
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
