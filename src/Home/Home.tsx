import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import Drawer from './Drawer';
import OutfitIdeas from './OutfitIdeas';
import { RouteProp } from '@react-navigation/native';

const HomeDrawer = createDrawerNavigator();

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type HomeRoutes = {
  OutfitIdeas: undefined;
};

const HomeDrawerNavigator = () => (
  <HomeDrawer.Navigator
    drawerContent={(
      props: DrawerContentComponentProps<DrawerContentOptions>,
    ) => <Drawer {...props} />}
  >
    <HomeDrawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </HomeDrawer.Navigator>
);

export default HomeDrawerNavigator;
