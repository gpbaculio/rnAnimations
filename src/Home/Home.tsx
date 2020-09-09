import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Drawer from './Drawer';
import OutfitIdeas from './OutfitIdeas';

const HomeDrawer = createDrawerNavigator();

const HomeDrawerNavigator = () => (
  <HomeDrawer.Navigator drawerContent={Drawer}>
    <HomeDrawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </HomeDrawer.Navigator>
);

export default HomeDrawerNavigator;
