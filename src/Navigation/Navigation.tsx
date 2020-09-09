import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from '../Authentication/OnBoarding';
import Welcome from '../Authentication/Welcome';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import ForgotPassword from '../Authentication/ForgotPassword';
import Home from '../Home';

const AppStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
const HomeDrawer = createDrawerNavigator();

const AuthenticationStackNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="Signup" component={Signup} />
    <AuthenticationStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    />
  </AuthenticationStack.Navigator>
);

const HomeDrawerNavigator = () => (
  <HomeDrawer.Navigator>
    <HomeDrawer.Screen name="Home" component={Home} />
  </HomeDrawer.Navigator>
);

const AppStackNavigator = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen
      name="Authentication"
      component={AuthenticationStackNavigator}
    />
    <AppStack.Screen name="Home" component={HomeDrawerNavigator} />
  </AppStack.Navigator>
);

export default AppStackNavigator;
