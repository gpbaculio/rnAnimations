import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import Drawer from './Drawer';
import OutfitIdeas from './OutfitIdeas';
import FavoriteOutfits from './FavoriteOutfits';
import TransactionHistory from './TransactionHistory';

const HomeDrawer = createDrawerNavigator();

const HomeDrawerNavigator = () => (
  <HomeDrawer.Navigator
    drawerContent={(
      props: DrawerContentComponentProps<DrawerContentOptions>,
    ) => <Drawer {...props} />}
  >
    <HomeDrawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <HomeDrawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
    <HomeDrawer.Screen
      name="TransactionHistory"
      component={TransactionHistory}
    />
  </HomeDrawer.Navigator>
);

export default HomeDrawerNavigator;
