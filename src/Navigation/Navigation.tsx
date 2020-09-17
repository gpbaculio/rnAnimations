import React, { useEffect, useMemo, useReducer } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import OnBoarding from '../Authentication/OnBoarding';
import Welcome from '../Authentication/Welcome';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import ForgotPassword from '../Authentication/ForgotPassword';
import Home from '../Home';
import { authenticationReducer } from './store/reducers';
import { restoreToken, signIn, signOut } from './store/actions';
import { AuthContextType, AuthContext, CredentialsType } from './store/context';

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

const AppStackNavigator = () => {
  const [state, dispatch] = useReducer(authenticationReducer, {
    isLoading: true,
    isSignout: false,
    userToken: '',
  });
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        dispatch(restoreToken(userToken));
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async ({ email, password }: CredentialsType) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        // when using signIn you should setItem token on async storage but this is just a UI demo
        dispatch(signIn(`dummy-token:${email}:${password}`));
      },
      signOut: () => {
        dispatch(signOut());
      },
      signUp: async ({ email, password }: CredentialsType) => {
        dispatch(signIn(`dummy-token:${email}:${password}`));
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={authContext as AuthContextType}>
      <AppStack.Navigator headerMode="none">
        {state.userToken ? (
          <AppStack.Screen name="Home" component={HomeDrawerNavigator} />
        ) : (
          <AppStack.Screen
            name="Authentication"
            component={AuthenticationStackNavigator}
          />
        )}
      </AppStack.Navigator>
    </AuthContext.Provider>
  );
};

export default AppStackNavigator;
