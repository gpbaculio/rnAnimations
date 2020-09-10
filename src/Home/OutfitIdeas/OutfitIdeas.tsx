import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Header } from '../components';
import { iconMenu, iconShoppingBag } from '../constants';
import { Container } from '../../components';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const OutfitIdeas = () => {
  const navigation = useNavigation();
  const onLeftNavPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Container style={styles.container}>
      <Header
        color="#0C0D34"
        backgroundColor="#fafafa"
        title="OUTFIT IDEAS"
        leftSection={{
          leftNavImgSrc: iconMenu,
          onLeftNavPress,
        }}
        rightSection={{
          rightNavImgSrc: iconShoppingBag,
          onRightNavPress: () => true,
        }}
      />
      <Text>OutfitIdasd asdeas</Text>
    </Container>
  );
};

export default OutfitIdeas;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 21,
  },
});
